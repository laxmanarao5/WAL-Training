"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const userApp = (0, express_1.Router)();
const user_controller_1 = require("../controllers/user.controller");
//import token verification middleware
const verifyToken_middleware_1 = require("../middlewares/verifyToken.middleware");
//body-parser
userApp.use(express_1.default.json());
//Test route
userApp.get("/test", user_controller_1.testController);
//User registration
userApp.post("/user", user_controller_1.register);
//Login
userApp.post("/login", user_controller_1.login);
//Modify user
userApp.put("/user/", verifyToken_middleware_1.verifyToken, user_controller_1.modify);
//Soft delete user
userApp.delete("/user/", verifyToken_middleware_1.verifyToken, user_controller_1.deleteUser);
//Get user information
userApp.get("/user/", verifyToken_middleware_1.verifyToken, user_controller_1.getUser);
//Get all users information
userApp.get("/users", user_controller_1.getAll);
//exporting Router
exports.default = userApp;
// class A{
//     test(){}
// }
// class B extends A{
//     test1(){}
// }
// let a:A=new B()
// a.test()
// // a.test1()
