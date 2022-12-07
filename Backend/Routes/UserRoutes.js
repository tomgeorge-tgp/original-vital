import {response, Router} from "express";
import {check,validationResult} from "express-validator";
const UserRouter = Router();
import bcrypt from "bcrypt";
import UserSchema from "../Models/User.js"
// import { UUID } from "Realm.BSON";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import auth from "../Middleware/auth.js";
import { v4 as uuidv4 } from 'uuid';
import realm from "../database.js";

dotenv.config();
// const realm = await Realm.open({
//   schema: [UserSchema],
//   path: "testDatabase",
// });
//const { UUID } = Realm.BSON;

//signup page post routes
UserRouter.post('/signup',[
    check("name").not().isEmpty(),
    check("email").isEmail(),
    check("password").not().isEmpty(),
    check("password").isLength({min:6}),
    check("phoneNumber").not().isEmpty(),
    check("phoneNumber").isMobilePhone('any'),  //en-IN
    check("dob").not().isEmpty(),
    check('dob').isISO8601(),
    check("gender").not().isEmpty(),
    check("gender").matches(/^(?:F|M|T|P)$/),   //regular expression validator
    // check("dob").matches(/^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)\d\d$/),
], async(req, res) =>
{
  try{
      console.log(req.body);
      // res.header("Access-Control-Allow-Origin", "*");
      const errors = validationResult(req);
      
      if(!errors.isEmpty())
      {
        console.log(errors.array())
        return res.status(400).json({errors:errors.array() })
  
      }
      
      let {name,email,password,phoneNumber,gender,dob} =req.body;
      
      // let user = await User.findOne({email: email});
      let users = realm.objects("UserSchema");
       console.log(`The lists of users are: ${users.map((user) => user.name)}`);
       let filtereduser = users.filtered("name == $0" , name);
       console.log(`The lists of users are: ${filtereduser.map((user) => user.name)}`);
      // console.log(user.name);
      // if(user) throw new Error("Error creating account") 
      
      const salt= await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
      const hash= await bcrypt.hash(password,salt);
      password=hash;
      let newuser ; 
    realm.write(() => {
        newuser = realm.create("UserSchema", {
            _id:uuidv4(),
            name: name,
            gender: gender,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
      });}
    )
    
      console.log("user saved");
      users = realm.objects("UserSchema");
       console.log(`The lists of users are: ${users.map((user) => user._id)}`);
       const userData={
        _id:filtereduser.map((user) => user._id).pop(), 
       name:filtereduser.map((user) => user.name).pop(),
       gender:filtereduser.map((user) => user.gender).pop(),
       email: filtereduser.map((user) => user.email).pop(),
       password: filtereduser.map((user) => user.password).pop(),
       phoneNumber: filtereduser.map((user) => user.phoneNumber).pop(),
      }

      const jwtToken = jwt.sign({ id: userData._id, name: userData.name }, process.env.JWT_ACCESS_TOKEN_SECRET);
      
      res.status(201).json({msg: "Account created successfully!", user: {_id: userData._id, name: userData.name, email: userData.email,gender:userData.gender,dob:userData.dob}, errors: []}) // accessToken: jwtToken,
    }
    catch(err){
            console.log(err);
            return res.status(400).json({errors:[{msg: err.message}]});
    } 
});




UserRouter.post('/login',[
  //check("name").not().isEmpty(),
  // check("email").isEmail(),
  check("phoneNumber").not().isEmpty(),
  check("password").not().isEmpty(),
  check("password").isLength({min:6}),
  // check("phoneNumber").isMobilePhone('any'),  //en-IN
  // check("dob").not().isEmpty(),
  // check('dob').isISO8601(),
  // check("gender").not().isEmpty(),
  // check("gender").matches(/^(?:F|M|T|P)$/),   //regular expression validator
  // check("dob").matches(/^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)\d\d$/),
], async(req, res) =>
{
  try
  {
  console.log(req.body);
  res.header("Access-Control-Allow-Origin", "*");
 const errors = validationResult(req);
  
  if(!errors.isEmpty())
  {
    console.log(errors.array())
    return res.status(400).json({errors:errors.array() })
  }
  
  // const {name, phoneNumber, password} = req.body;
  const {phoneNumber, password} = req.body;
  let users = realm.objects("UserSchema");
       console.log(`The lists of users are: ${users.map((user) => user.name)}`);
       let filtereduser = users.filtered("phoneNumber == $0" , phoneNumber);
       console.log(`The lists of users are: ${filtereduser.map((user) => user.name)}`);
  //let user = await User.findOne({phoneNumber: phoneNumber});
  if(!filtereduser)
  {
    throw new Error("Invalid login details!");
  }
 const userData={
   _id:filtereduser.map((user) => user._id).pop(), 
  name:filtereduser.map((user) => user.name).pop(),
  gender:filtereduser.map((user) => user.gender).pop(),
  email: filtereduser.map((user) => user.email).pop(),
  password: filtereduser.map((user) => user.password).pop(),
  phoneNumber: filtereduser.map((user) => user.phoneNumber).pop(),
 }

  
  console.log(`${filtereduser.map((user) => user.name)}`);
   console.log(userData);
  
    if(await bcrypt.compare(password, userData.password))
    {
      console.log("User loggged in: ", userData._id, " ", new Date().toISOString());
      const jwtToken = jwt.sign({ id: userData._id, name: userData.name }, process.env.JWT_ACCESS_TOKEN_SECRET);
      
      res.status(201).json({msg: "Logged in successfully!", accessToken: jwtToken, user: {_id: userData._id,name: userData.name, email: userData.email,gender:userData.gender,dob:userData.dob}, errors: []}) 
    }
    else
    {
      throw new Error("Invalid login details!");
    }
  }
  catch(err){
      console.log(err);
      return res.status(400).json({errors:[{msg: err.message}]});
  }
});


UserRouter.get('/:id',auth,async(req, res) => {
 try{ 
  const userId=req.params.id;
  let users = realm.objects("UserSchema");
  console.log(`The lists of users are: ${users.map((user) => user.name)}`);
  let filtereduser = users.filtered("_id == $0" , userId);
  console.log(`The lists of users are: ${filtereduser.map((user) => user.name)}`);

  


  if(!filtereduser)
  {
    throw new Error("User not found!");
  }
  else{
    const userData={
      _id:filtereduser.map((user) => user._id).pop(), 
      name:filtereduser.map((user) => user.name).pop(),
      gender:filtereduser.map((user) => user.gender).pop(),
      email: filtereduser.map((user) => user.email).pop(),
      password: filtereduser.map((user) => user.password).pop(),
      phoneNumber: filtereduser.map((user) => user.phoneNumber).pop(),
    }
    
    return res.status(200).json(userData);
      
  }
 }
 catch (err)
 {
  res.status(400).json({errors:[{msg: err.message}]});
 }
});






export default UserRouter;