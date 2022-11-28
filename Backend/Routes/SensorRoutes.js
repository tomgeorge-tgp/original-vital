import {response, Router} from "express";
import sensorRead from "../sensors/bpSensor.js";
const SensorRouter = Router();
import UserSchema from "../Models/User.js"
// import { UUID } from "Realm.BSON";

let data;

SensorRouter.post('/bpsensor', async(req, res) =>
{
  try{
      console.log(req.body);
      
      data=sensorRead();

      console.log(data);
      if(parseINT(data[2]),16==5){
      return res.status(200).json({msg: "sensor read successfully", data: {data}, errors: []})
      } // accessToken: jwtToken,
    }
    catch(err){
        console.log(err);
        return res.status(400).json({errors:[{msg: err.message}]});
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