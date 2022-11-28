import serialport from 'serialport';
var SerialPort = serialport.SerialPort;
var portName = process.argv[7];
//var Buffer =  require('buffer/').Buffer;
let data;

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
  });

  port.on('data', function(data) {
    console.log(data);
    return data;
      // for(i=0;i<data)
      // console.log("cuff pressure "+ data[5]*2 + ", sys =" + data[6] + ", dia = " + data[8] )
    });
}

