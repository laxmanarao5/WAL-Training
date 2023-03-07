//import express async handler
const expressAsyncHandler=require("express-async-handler")


//import models
const {Customers}=require("../database/models/customers.model")
const {Reviews}=require("../database/models/reviews.model")
const {Products}=require("../database/models/products.model")
const {Orders}=require("../database/models/orders.model")
const {Address}=require("../database/models/address.model")
const { sequelize } = require("../database/inventary.config")
const customerApp = require("../routes/customers.routes")

//Association between customer and address
Customers.Address=Customers.hasOne(Address,{foreignKey:"customer_id"})

//Associations for Reviews
Customers.Products=Customers.belongsToMany(Products,{through:Reviews,foreignKey:"customer_id"})
Products.Customers=Products.belongsToMany(Customers,{through:Reviews,foreignKey:"product_id"})


//Associations for Orders
Customers.Products_orders=Customers.belongsToMany(Products,{through:Orders,foreignKey:"customer_id"})
Products.Customers_orders=Products.belongsToMany(Customers,{through:Orders,foreignKey:"product_id"})

//test controller
exports.testCustomer=(req,res)=>{
    console.log("Customer API Working fine")
    res.send({message:"Customer API Working fine"})
}

//add customers
exports.addCustomer=expressAsyncHandler(async(req,res)=>{

    //check Customer info in data
    let result=await Customers.findOne({where:{
        email:req.body.email
    }})
    //if customer not found
    if(result==undefined )
    {
        await Customers.create(req.body,{
            include:[
                {
                    association:Customers.Address
                }
            ]
        })
        res.send({message:"Customer added sucessfully"})
    }
    //If customer exists
    else{
        let address_info=await result.getAddress()
        res.send({res:address_info})
        //check address available or not
        if(address_info[0]!=null)
        res.send({message:"User address already available"})
        // req.body.address.customer_id=result[0].customer_id
        // console.log(req.body)

        //
        else{
            let cust_address=await Address.create(req.body.address)
        result.setAddress(cust_address)
        res.send({message:"Address Updated sucessfully"})
        }
        

    }

    
    
})

//Write review
exports.addReview=expressAsyncHandler(async(req,res)=>{
   
   
    await Reviews.create(req.body,{
        include:[
            {
                association:Customers.Products
            }
        ]
    })
    res.send({message:"Reviews added sucessfully"})
})


//fetch customers
exports.getCustomers=expressAsyncHandler(async(req,res)=>{
    let result=await Customers.findAll()
    res.send({message:"Customers are",payload:result})
})

//fetch orders
exports.getOrders=expressAsyncHandler(async(req,res)=>{

})

//fetchReviews
exports.getReviews=expressAsyncHandler(async(req,res)=>{
    let result=await Reviews.findAll({attributes:{exclude:["customer_id"]},where:{
        customer_id:req.params.cust_id
    }})
    res.send({message:"Reviews",payload:{customer_id:req.params.cust_id,Reviews:result}})
    
})

//fetch Orders
exports.getOrders=expressAsyncHandler(async(req,res)=>{
    let result=await Orders.findAll({attributes:{exclude:["customer_id"]},where:{
        customer_id:req.params.cust_id
    }})
    res.send({message:"Orders",payload:{customer_id:req.params.cust_id,Reviews:result}})
    
})

//Place orders
exports.placeOrder=expressAsyncHandler(async(req,res)=>{
   
   
    await Orders.create(req.body,{
        include:[
            {
                association:Customers.Products_orders
            }
        ]
    })
    res.send({message:"Order placed sucessfully"})
})

//Creatinga transaction
exports.createTransaction=expressAsyncHandler(async(req,res)=>{
    const t=await sequelize.transaction()
    try{
        await Customers.create(req.body,{
            include:[
                {
                    association:Customers.Address
                }
            ]
        },{transaction:t})
        t.commit();
        res.send({message:"Customer added sucessfully"})
    }
    catch(err){
        await t.rollback()
        res.send({message:"Rollback working"})
    }
})


