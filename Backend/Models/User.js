
import Realm from "realm";


const TaskSchema = {
  name: "UserSchema",
  properties: {
    _id: "string",
    name: "string",
    gender: "string",
    email: "string",
    password: "string",
    phoneNumber: "string",
  },
  primaryKey: "phoneNumber",
};


export default TaskSchema;