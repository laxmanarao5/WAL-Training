//import express
const exp=require("express")

//create router
const customerApp=exp.Router()


customerApp.use(exp.json())

const {testCustomer,addCustomer,getCustomers,getOrders,getReviews,addReview,placeOrder}=require("../controllers/customer.controller")
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



//export router
module.exports=customerApp