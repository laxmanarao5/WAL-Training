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
//import express and its type Application
const express_1 = __importDefault(require("express"));
//import dotenv
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: "../.env" });
const port = process.env.PORT;
//call the express function to get application
const app = (0, express_1.default)();
//create server
app.listen(port, () => console.log(`listening to port ${port}`));
//import router
const user_route_1 = __importDefault(require("./routes/user.route"));
//Routing to Customer API
app.use("/user-api", user_route_1.default);
//import sequelize
const db_config_1 = require("./database/db.config");
db_config_1.sequelize.authenticate()
    .then(() => console.log("Connection sucess"))
    .catch(err => console.log("Error occured : ", err));
//invalid path middleware
app.use("*", (req, res) => {
    res.send({ message: "Invalid path" });
});
//Error handling middleware
app.use((err, req, res, next) => {
    res.send({ message: "Error Occured", error: err.message });
});
