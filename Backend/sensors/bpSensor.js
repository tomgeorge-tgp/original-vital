import { isObjectIdOrHexString } from 'mongoose';
import serialport from 'serialport';
var SerialPort = serialport.SerialPort;
var portName = process.argv[7];
import SensorSchema from '../Models/SensorSchema.js';
//var Buffer =  require('buffer/').Buffer;
let port1 = "COM3";
let port;


export default function sensorRead (callback) {
  let buffer=[];
  console.log("here");

   port = new SerialPort({
    path: port1,
    baudRate: 115200
    
  })
  


  const commandStart = ["0XBE", "0XB0", "0X01", "0Xc0", "0X36"];
  const commandStop  = ["0XBE", "0XB0", "0X01", "0Xc1", "0X68"];
 

  port.write( commandStart , function (err) {
    if (err) {
      return console.log("Error on write: ", err.message);
    }
    console.log("message written");
    //console.log("ha",data);
  });

  

  port.on('data', async function(data) {
    // console.log("data",Buffer.from(data,'base64').toString());
    // console.log("data",data.toString("hex"));
    const readings={
      sis:data[4],
      dia:data[5],
      hrate:data[6],
      state:data[2] ===5 ? "end" :parseInt(data[2],16)===2 ? "start" : "continue"
    }
    //  const readings={
    //   sis:100,
    //   dia:20,
    //   hrate:30,
    //   state:"end"
    // }
    
    console.log("data",readings);
    
    callback(readings);
    
    // const statusCode=parseInt(data[2],16);

    if(data[2] == 5)
   {
      buffer.push(data);
      
      port.emit("end")
  
    // realm.write(() => {
    //     sensor1 = realm.create("SensorSchema", {
    //         _id:1234,
    //         name: "bp",
    //         value : value,
    //   });
        
    // });
    //}
     
      // for(i=0;i<data)
      // console.log("cuff pressure "+ data[5]*2 + ", sys =" + data[6] + ", dia = " + data[8] )
      
    }

    if(data[2] == 5)
      port.close();
    // port.on('end', () => {
    // console.log("Final Buffer data",Buffer.concat(buffer).toString())})

    }  )

    

  
}

