"use strict";
exports.__esModule = true;
//import default exports
var moduleA_1 = require("./moduleA");
//moduleA transpile while transpiling moduleB
console.log(moduleA_1["default"]);
// import {Student,Person} from "./moduleA"
var data = require("./moduleA");
// console.log(Student,Person);
console.log(data.Student, data.Person);
