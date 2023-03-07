"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const testApp = (0, express_1.Router)();
const test_controller_1 = require("../controllers/test.controller");
testApp.get("/test", test_controller_1.testController);
exports.default = testApp;
// class A{
//     test(){}
// }
// class B extends A{
//     test1(){}
// }
// let a:A=new B()
// a.test()
// // a.test1()
