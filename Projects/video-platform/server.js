//import express
const exp=require("express")

//import dot env
require("dotenv").config()

//call express
const app=exp()

//expose to port
app.listen(process.env.PORT || 80,()=>{
    console.log(`listening to port ${process.env.PORT}`)
})


//Test db connection
const {sequelize}=require("./database/db.config")
sequelize.authenticate()
.then(()=>console.log("Connection sucess"))
.catch(err=>console.log("Error occured : ",err))


//import routes
const channelApp=require("./routes/channel.route")

app.use("/channel-api",channelApp)


sequelize.sync()



//Invalid path middleware
app.use("*",(req,res)=>{
    res.send({message:"Invalid path"})
})

//Error handler middleware
app.use((err,req,res,next)=>{
    res.send({message:"error occured",error:err.message})
})
