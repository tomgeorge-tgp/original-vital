import {response, Router} from "express";
import {check,validationResult} from "express-validator";
const UserRouter = Router();
import bcrypt from "bcrypt";
import UserSchema from "../Models/User.js"
// import { UUID } from "Realm.BSON";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import auth from "../Middleware/auth.js";


dotenv.config();
const realm = await Realm.open({
  schema: [UserSchema],
  path: "testDatabase",
});
const { UUID } = Realm.BSON;

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
      let user = realm.objectForPrimaryKey("UserSchema",phoneNumber);
      // console.log(user.name);
      if(user) throw new Error("Error creating account")  //To check if the user already exists
      
      const salt= await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
      const hash= await bcrypt.hash(password,salt);
      password=hash;
        
    realm.write(() => {
        user = realm.create("UserSchema", {
            _id:new UUID(),
            name: name,
            gender: gender,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
      });}
    )
    
      console.log("user saved");

      const jwtToken = jwt.sign({ id: user._id, name: user.name }, process.env.JWT_ACCESS_TOKEN_SECRET);
      res.status(201).json({msg: "Account created successfully!", user: {_id: user._id, name: user.name, email: user.email,gender:user.gender,dob:user.dob}, errors: []}) // accessToken: jwtToken,
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
  // res.header("Access-Control-Allow-Origin", "*");
  const errors = validationResult(req);
  
  if(!errors.isEmpty())
  {
    console.log(errors.array())
    return res.status(400).json({errors:errors.array() })
  }
  
  // const {name, phoneNumber, password} = req.body;
  const {phoneNumber, password} = req.body;
  let user = realm.objectForPrimaryKey("UserSchema",phoneNumber);
  //let user = await User.findOne({phoneNumber: phoneNumber});
  if(user==null)
  {
    throw new Error("Invalid login details!");
  }

  
    if(await bcrypt.compare(password, user.password))
    {
      console.log("User loggged in: ", user._id, " ", new Date().toISOString());
      const jwtToken = jwt.sign({ id: user._id, name: user.name }, process.env.JWT_ACCESS_TOKEN_SECRET);
      res.status(201).json({msg: "Logged in successfully!", accessToken: jwtToken, user: {_id: user._id,name: user.name, email: user.email,gender:user.gender,dob:user.dob}, errors: []}) 
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
  let user = await User.findById(userId);

  console.log(user);


  if(!user)
  {
    throw new Error("User not found!");
  }
  else{
    const userData={
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      dob: user.dob,
      gender: user.gender,
    }
    return res.status(200).json(userData);
      
  }
 }
 catch (err)
 {
  res.status(400).json({errors:[{msg: err.message}]});
 }
});



// realm.close();


export default UserRouter;