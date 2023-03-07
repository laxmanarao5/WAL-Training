import express,{Router,IRouter} from "express";

const userApp:IRouter=Router()

import {testController,register,login,modify,getAll,deleteUser,getUser} from "../controllers/user.controller"

//import token verification middleware
import { verifyToken } from "../middlewares/verifyToken.middleware";

//body-parser
userApp.use(express.json())

//Test route
userApp.get("/test",testController)

//User registration
userApp.post("/user",register)

//Login
userApp.post("/login",login)

//Modify user
userApp.put("/user/",verifyToken,modify)

//Soft delete user
userApp.delete("/user/",verifyToken,deleteUser)

//Get user information
userApp.get("/user/",verifyToken,getUser)

//Get all users information
userApp.get("/users",getAll)

//exporting Router
export default userApp










// class A{
//     test(){}
// }

// class B extends A{
//     test1(){}
// }

// let a:A=new B()
// a.test()
// // a.test1()
