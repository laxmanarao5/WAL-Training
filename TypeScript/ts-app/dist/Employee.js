"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const Person_1 = require("./Person");
class Employee extends Person_1.Person {
    constructor(personName, age, designation, address) {
        super(personName, age);
        this.designation = designation;
        this.address = address;
    }
    createApp() {
        console.log("Application developed");
    }
}
exports.Employee = Employee;
