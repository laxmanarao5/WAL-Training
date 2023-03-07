//import express
const app=require("express")()

//import files model
const fs=require("fs")

//crate serer
app.listen(80,()=>{
    console.log("Listening to port 80")
    console.log("")
})

// //read data locally
// app.get("/read-data-from-file",(req,res)=>{
//     //read file
//     fs.readFile("./data.txt",(err,data)=>{
//         if(err) console.log(err)
//         //send response
//         else res.send(data.toString());
//     })
// })


//read data locally
app.get("/read-data-from-file",(req,res)=>{
    //read file
    let read=fs.createReadStream("./data.txt")
    //let read=fs.createReadStream("./download.jpg")
    read.pipe(res)
})

//read data from API
app.get("/read-data-from-api",async(req,res)=>{
    //fetch data from API
    let resData=await fetch("https://jsonplaceholder.typicode.com/posts")
    //collecting data stream
    
})