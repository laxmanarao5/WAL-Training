//import sequelize
//import express async handler
const expressAsyncHandler=require("express-async-handler")


const {Products}=require("../database/models/products.model")
const {Reviews}=require("../database/models/reviews.model")

exports.testProduct=(req,res)=>{
        console.log("Product API Working fine")
        res.send({message:"Product API Working fine"})
}

exports.addProduct=expressAsyncHandler(async(req,res)=>{
    console.log(req.body)
    await Products.create(req.body)
    res.send({message:"Product added sucessfully"})
})

exports.getProducts=expressAsyncHandler(async(req,res)=>{
    let result=await Products.findAll()
    res.send({message:"Products are",payload:result})
})


exports.getReviews=expressAsyncHandler(async(req,res)=>{
    let result=await Reviews.findAll({attributes:{exclude:["product_id"]},where:{
        customer_id:req.params.prod_id
    }})
    res.send({customer_id:req.params.prod_id,Reviews:result})
    
})