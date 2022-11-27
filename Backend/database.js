import Realm from "realm";
import UserSchema from "./Models/User.js";




const realm = await Realm.open({
      schema: [UserSchema],
      path: "testDatabase",
    });
    
    
    let user1, user2;
    realm.write(() => {
        user1 = realm.create("UserSchema", {
            _id:1234 ,
            name: "amjad",
            gender: "male",
            email: "amjad@1",
            password: "string",
            phoneNumber: "9526104187",
      });
      user2 = realm.create("UserSchema", {
        _id:123 ,
        name: "tom",
        gender: "male",
        email: "tom@1",
        password: "string",
        phoneNumber: "9526104187",
        });
        
    }); 
    const tasks = realm.objects("UserSchema");
    console.log(`The lists of tasks are: ${tasks.map((task) => task.name)}`);
    realm.close();
    
    export default realm
    
    
    
