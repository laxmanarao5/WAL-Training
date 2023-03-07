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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: "../../.env" });
//import json webtoken
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => {
    //checking for authorization in headers
    if (req.headers.authorization != undefined) {
        //Spliting bearer and token
        let [bearer, token] = req.headers.authorization.split(" ");
        try {
            //verifying jwt token
            jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || "");
            //if valid token send req to next middleware else generate an error
            next();
        }
        catch (err) {
            //if error occured means token expired
            res.send({ message: "Token expired Login again" });
        }
    }
    else {
        res.send({ message: "Unauthorized request" });
    }
};
exports.verifyToken = verifyToken;