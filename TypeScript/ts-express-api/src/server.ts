//import express and its type Application
import express,{Application,Request,Response} from "express"

//import dotenv
import * as dotenv from "dotenv"
dotenv.config({path:"../.env"})

const port:undefined|string=process.env.PORT

//call the express function to get application
const app:Application=express()

//create server
app.listen(port,():void=>console.log(`listening to port ${port}`))

//import router
import userApp from "./routes/user.route"

//Routing to Customer API
app.use("/user-api",userApp)

//import sequelize
import {sequelize} from "./database/db.config"

sequelize.authenticate()
.then(()=>console.log("Connection sucess"))
.catch(err=>console.log("Error occured : ",err))



//invalid path middleware
app.use("*",(req:Request,res:Response)=>{
    res.send({message:"Invalid path"})
})

//Error handling middleware
app.use((err:Error,req:Request,res:Response,next:any)=>{
    res.send({message:"Error Occured",error:err.message})
})