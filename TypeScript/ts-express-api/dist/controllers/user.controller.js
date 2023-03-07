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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getAll = exports.deleteUser = exports.modify = exports.login = exports.register = exports.testController = void 0;
//import ENV variables
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: "../../.env" });
//import express-async-handler
const express_async_handler_1 = __importDefault(require("express-async-handler"));
//import json webtoken
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//import bcryptjs
const bcryptjs_1 = __importDefault(require("bcryptjs"));
//import user module
const user_model_1 = require("../database/models/user.model");
//test controller
const testController = (req, res) => {
    res.send({ message: "Customer API Working" });
};
exports.testController = testController;
//user registration
exports.register = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //inserting user info to database
    yield user_model_1.User.create(req.body);
    //send response
    res.send({ message: "Registraation sucessfull" });
}));
//user Login
exports.login = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //get user details
    let result = yield user_model_1.User.findOne({ where: {
            email: req.body.email,
            status: true
        } });
    //if user found 
    if (result != null) {
        console.log(result.password);
        //verifying password
        if (yield bcryptjs_1.default.compare(req.body.password, result.password)) {
            //generate Token
            let signedToken = jsonwebtoken_1.default.sign({ email: req.body.email }, process.env.SECRET_KEY || "", { expiresIn: 180 });
            //send response
            res.send({ message: "Login Sucess", token: signedToken });
        }
        else
            res.send({ message: "Invalid Credentials" });
    }
    else
        res.send({ message: "Invalid Credentials" });
}));
//update user info
exports.modify = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.headers.authorization != undefined) {
        //split bearer and token
        let [bearer, token] = req.headers.authorization.split(" ");
        let emailId = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || "");
        //update details to databse   
        if (req.body.email == emailId.email) {
            let updateCount = yield user_model_1.User.update(req.body, { where: {
                    email: emailId.email
                } });
        }
        else
            res.send({ message: "Token is invalid to perform updation" });
        //send response
        res.send({ message: "User details updated sucessfull" });
    }
}));
//delete user info
exports.deleteUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.headers.authorization != undefined) {
        //split bearer and token
        let [bearer, token] = req.headers.authorization.split(" ");
        //verify token and get email id
        let emailId = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || "");
        //update status to false          
        let updateCount = yield user_model_1.User.update({ status: false }, { where: {
                email: emailId.email
            } });
        //send response
        res.send({ message: "User details deleted sucessfull" });
    }
}));
//Get all users
exports.getAll = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield user_model_1.User.findAll({ where: {
            status: true
        }, attributes: {
            exclude: ["password", "status"]
        } });
    res.send({ message: "User details ", payload: result });
}));
//get user info
exports.getUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.headers.authorization != undefined) {
        let [bearer, token] = req.headers.authorization.split(" ");
        let emailId = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || "");
        console.log(emailId);
        let result = yield user_model_1.User.findOne({ where: {
                email: emailId.email
            }, attributes: {
                exclude: ["password", "status", "createdAt", "updatedAt"]
            } });
        res.send({ message: "User details are ", payload: result });
    }
}));
