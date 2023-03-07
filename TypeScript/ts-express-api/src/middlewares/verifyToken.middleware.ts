//import Request,Response Interface
import { Request,Response} from "express"

import * as dotenv from "dotenv"
dotenv.config({path:"../../.env"})

//import json webtoken
import jwt from "jsonwebtoken"

export const verifyToken=(req:Request,res:Response,next:any)=>{
    //checking for authorization in headers
    if(req.headers.authorization!=undefined)
    {
        //Spliting bearer and token
        let [bearer,token]=req.headers.authorization.split(" ")
        try{
            //verifying jwt token
            jwt.verify(token,process.env.SECRET_KEY||"")
            //if valid token send req to next middleware else generate an error
            next()
        }
        catch(err){
            //if error occured means token expired
            res.send({message:"Token expired Login again"})
        }
    }
    else
    {
        res.send({message:"Unauthorized request"})
    }
}