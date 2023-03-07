"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customerApp = (0, express_1.Router)();
const test_controller_1 = require("../controllers/test.controller");
customerApp.get("/test", test_controller_1.testController);
exports.default = customerApp;
// class A{
//     test(){}
// }
// class B extends A{
//     test1(){}
// }
// let a:A=new B()
// a.test()
// // a.test1()
