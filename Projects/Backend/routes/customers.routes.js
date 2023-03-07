//import express
const exp=require("express")

//create router
const customerApp=exp.Router()


customerApp.use(exp.json())

const {testCustomer,addCustomer,getCustomers,getOrders,getReviews,addReview,placeOrder,createTransaction}=require("../controllers/customer.controller")
//test api
customerApp.get("/test",testCustomer)

//create user route
customerApp.post("/customer",addCustomer)


//Write a review
customerApp.post("/customer-review",addReview)


//Place order
customerApp.post("/order",placeOrder)
//Fetch all customers
customerApp.get("/customers",getCustomers)


//Fetch orders
customerApp.get("/customer-orders/:cust_id",getOrders)

//Fetch Reviews
customerApp.get("/customer-reviews/:cust_id",getReviews)

//Transactions
customerApp.post("/transaction",createTransaction)

//Express-validator

//Import express validator
const { body, validationResult } = require('express-validator')

customerApp.post("/validate",body("customer_name").isLength({min:5}),(req,res)=>{
    const errors=validationResult(req)
    console.log(errors)
    if(!errors.isEmpty()){
        res.send({message:"validation failed "})
    }
    else
    res.send({message:"working fine"})
    
})

//export router
module.exports=customerApp