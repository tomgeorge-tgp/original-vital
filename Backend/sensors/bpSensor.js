import serialport from 'serialport';
var SerialPort = serialport.SerialPort;
var portName = process.argv[7];
import SensorSchema from '../Models/SensorSchema.js';
//var Buffer =  require('buffer/').Buffer;
let data;
let value;
export default function sensorRead () {
  const port = new SerialPort({
    path: "COM3",
    baudRate: 115200
  })


  const command = ["0XBE", "0XB0", "0X01", "0Xc0", "0X36"];
 

  port.write( command , function (err) {
    if (err) {
      return console.log("Error on write: ", err.message);
    }
    console.log("message written");
    //console.log("ha",data);
  });

  port.on('data', async function(data) {
    console.log("data",data[2]);
    if(data[2] == 5)
    {
      console.log("sys",data[5]);
      value =  data[5];

      const realm = await Realm.open({
      schema: [SensorSchema],
      path: "sensors",
    });
    
  
    realm.write(() => {
        sensor1 = realm.create("SensorSchema", {
            _id:1234,
            name: "bp",
            value : value,
      });
        
    });
    }
     
      // for(i=0;i<data)
      // console.log("cuff pressure "+ data[5]*2 + ", sys =" + data[6] + ", dia = " + data[8] )
    });
    
}

