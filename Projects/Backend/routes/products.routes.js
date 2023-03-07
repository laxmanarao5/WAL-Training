//import express
const exp=require("express")

//create router
const productApp=exp.Router()

//body-parser
productApp.use(exp.json())

const {testProduct,addProduct,getProducts,getReviews}=require("../controllers/product.controller")

//test request
productApp.get("/test",testProduct)

//add products route
productApp.post("/product",addProduct)


productApp.get("/products",getProducts)

// //Fetch Reviews
productApp.get("/product-reviews/:prod_id",getReviews)


//export router
module.exports=productApp