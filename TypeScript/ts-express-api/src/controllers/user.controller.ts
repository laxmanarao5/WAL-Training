//import Request,Response Interface
import { Request,Response} from "express"

//import ENV variables
import * as dotenv from "dotenv"
dotenv.config({path:"../../.env"})

//import express-async-handler
import expressAsyncHandler from "express-async-handler"

//import json webtoken
import jwt from "jsonwebtoken"

//import bcryptjs
import bcryptjs from "bcryptjs"

//import user module
import { User } from "../database/models/user.model"

//test controller
export const testController=(req:Request,res:Response)=>{
    res.send({message:"Customer API Working"})
}

//user registration
export const register =expressAsyncHandler(async(req:Request,res:Response)=>{
    //inserting user info to database
    await User.create(req.body)
    //send response
    res.send({message:"Registraation sucessfull"})
}
)

//user Login
export const login =expressAsyncHandler(async(req:Request,res:Response)=>{
    //get user details
    let result:any=await User.findOne({where:{
        email:req.body.email,
        status:true
    }})
    
    //if user found 
   if(result!=null){
    console.log(result.password);
    //verifying password
    if(await bcryptjs.compare(req.body.password,result.password))
    {
        //generate Token
        let signedToken=jwt.sign({email:req.body.email},process.env.SECRET_KEY||"",{expiresIn:180})
        //send response
        res.send({message:"Login Sucess",token:signedToken})
    }
    else
    res.send({message:"Invalid Credentials"}) 
   }
   else
    res.send({message:"Invalid Credentials"}) 
}
)

//update user info
export const modify=expressAsyncHandler(async(req:Request,res:Response)=>{
    if(req.headers.authorization!=undefined){
        //split bearer and token
        let [bearer,token]=req.headers.authorization.split(" ")
        let emailId:any =jwt.verify(token,process.env.SECRET_KEY||"") 
        //update details to databse   
        if(req.body.email==emailId.email)   {
            let updateCount= await User.update(req.body,{where:{
                email:emailId.email
        }})
        }  
        else
        res.send({message:"Token is invalid to perform updation"})   
        
    //send response
    res.send({message:"User details updated sucessfull"}) 
}}
)

//delete user info
export const deleteUser=expressAsyncHandler(async(req:Request,res:Response)=>{
    if(req.headers.authorization!=undefined){
        //split bearer and token
        let [bearer,token]=req.headers.authorization.split(" ")
        //verify token and get email id
        let emailId:any =jwt.verify(token,process.env.SECRET_KEY||"")  
        //update status to false          
        let updateCount:any= await User.update({status:false},{where:{
            email:emailId.email
    }})
    //send response
    res.send({message:"User details deleted sucessfull"})  
}}
)

//Get all users
export const getAll=expressAsyncHandler(async(req:Request,res:Response)=>{
    let result=await User.findAll({where:{
        status:true
    },attributes:{
        exclude:["password","status"]
    }})
    res.send({message:"User details ",payload:result})
}
)

//get user info
export const getUser=expressAsyncHandler(async(req:Request,res:Response)=>{
    if(req.headers.authorization!=undefined){
        let [bearer,token]=req.headers.authorization.split(" ")
            let emailId:any =jwt.verify(token,process.env.SECRET_KEY||"")       
            console.log(emailId);
            
        let result:any=await User.findOne({where:{
            email:emailId.email  
        },attributes:{
            exclude:["password","status","createdAt","updatedAt"]
        }})
        res.send({message:"User details are ",payload:result})
}}
)