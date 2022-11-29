import express from 'express';

import UserSchema from "./Models/User.js";
import http from 'http';
import dotenv from 'dotenv';
import useAppRoutes from './Routes/appRoutes.js';
import SensorRoutes from './Routes/SensorWebSocketRoutes.js';
import bodyParser from 'body-parser';
import cors from "cors";
import sensorRead from './sensors/bpSensor.js';

import Realm from "realm";
dotenv.config();






// const realm = await Realm.open({
//       schema: [UserSchema],
//       path: "testDatabase",
//     });
    
  
    // let user1, user2;
    // realm.write(() => {
    //     user1 = realm.create("UserSchema", {
    //         _id:1234 ,
    //         name: "amjad",
    //         gender: "male",
    //         email: "amjad@1",
    //         password: "string",
    //         phoneNumber: "9526104187",
    //   });
    //   user2 = realm.create("UserSchema", {
    //     _id:123 ,
    //     name: "tom",
    //     gender: "male",
    //     email: "tom@1",
    //     password: "string",
    //     phoneNumber: "9526104188",
    //     });
        
    // }); 
    // const tasks = realm.objects("UserSchema");
    // console.log(`The lists of tasks are: ${tasks.map((task) => task.name)}`);


  // app.post('/create', function(req, res) {
  //   const newUser = {
  //     email: req.body.email,
  //     name: req.body.name,
  //     dob: req.body.dob,
  //     gender: req.body.gender,
  //   };
  // console.log(newUser);
  

const app=express();
// app.use(cors({origin: 'http://localhost:3000'}));
const corsOptions ={
  origin:'*',
  "access-control-allow-credentials":true,
  
}

var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin", "X-Requested-With", "Content-Type","Accept");
  next();
};
app.use(allowCrossDomain);

app.use(cors(corsOptions)) // Use this after the variable declaration



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());






useAppRoutes(app);

const httpServer = http.createServer(app);

SensorRoutes(httpServer);







httpServer.listen(5000,()=>{console.log("Server started on port 5000")});