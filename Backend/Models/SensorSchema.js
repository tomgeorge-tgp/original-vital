


const SensorSchema = {
  name: "sensorschema",
  properties: {
    _id: "uuid",
    _idUser:"uuid",
    type : "string",
    value: "int",
  },
  primaryKey: "_id",
};


export default SensorSchema;