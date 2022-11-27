import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()

function auth(req,res,next)
{
    try{
        const authHeader=req.header('Authorization');
        console.log("authHeader",authHeader);
        if(!authHeader && !authHeader.startsWith('Bearer '))
           throw new Error(
            "invalid token"
           )
        const tokenArr = authHeader.split(" ");
        if(tokenArr.length<2)
        throw new Error(
            "invalid token"
           )
        const token = tokenArr[1];
        console.log(process.env.JWT_ACCESS_TOKEN_SECRET)
        jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (err,decoded)=>{
            console.log("decoded",decoded);
            if(err)
            throw new Error(
                "invalid token"
               )
            req.decoded = decoded;
            next();   
        })

    }
    catch(err)
    {
        return res.status(403).json({
            errors:[
                {
                   msg: err.message,
                }
            ]
        })
    }
  }
   

    


export default auth;