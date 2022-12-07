import {response, Router} from "express";
import {check,validationResult} from "express-validator";
import auth from "../Middleware/auth.js";
import SensorSchema from "../Models/SensorSchema.js"
// import { UUID } from "Realm.BSON";
import realm from "../database.js";
import dotenv from "dotenv";

import { v4 as uuidv4 } from 'uuid';

const SensorRouter = Router();

dotenv.config();



SensorRouter.post('/bpsensor', async(req, res) =>
{
  try{
      console.log(req.body);
      
      let { _idUser,type,value,} =req.body;
      
      // let user = await User.findOne({email: email});
    //   let users = realm.objects("UserSchema");
       //console.log(`The lists of users are: ${users.map((user) => user.name)}`);
      // let filtereduser = users.filtered("name == $0" , name);
       //console.log(`The lists of users are: ${filtereduser.map((user) => user.name)}`);
      // console.log(user.name);
      // if(user) throw new Error("Error creating account") 
      
      
    let newSensorReading ; 
    realm.write(() => {
        newSensorReading= realm.create("sensorschema", {
            _id:uuidv4(),
            _idUser:"5432",
            type:"bp",
            value:req.body.sis
      });}
    )
      console.log("here");
      
      return res.status(200).json({msg: "sensor read successfully", data: {data:"here"}, errors: []})
    
    }
    catch(err){
        console.log(err);
        return res.status(400).json({errors:[{msg: err.message}]});
    } 
});

SensorRouter.get('/:id',auth,async(req, res) => {
    try{ 
     const userId=req.params.id;
     let sensorValue = realm.objects("SensorSchema");
     //console.log(`The lists of users are: ${users.map((user) => user.name)}`);
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
   

SensorRouter.get('/bpfetchsensor',async(req, res) => {
  try{ 
    
   if(!data)
   {
     throw new Error("Sensor Not Working!");
   }
   else{
    
     return res.status(200).json(data);
       
   }
  }
  catch (err)
  {
   res.status(400).json({errors:[{msg: err.message}]});
  }
 });



export default SensorRouter;
