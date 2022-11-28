import {response, Router} from "express";
import sensorRead from "../sensors/bpSensor.js";
const SensorRouter = Router();
import UserSchema from "../Models/User.js"
// import { UUID } from "Realm.BSON";


SensorRouter.post('/bpsensor', async(req, res) =>
{
  try{
      console.log(req.body);
      sensorRead();
      const data="hello";
      return res.status(200).json({msg: "sensor read successfully", data: {data}, errors: []}) // accessToken: jwtToken,
    }
    catch(err){
        console.log(err);
        return res.status(400).json({errors:[{msg: err.message}]});
    } 
});

export default SensorRouter;