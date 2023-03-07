"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_1 = require("./Person");
class Student extends Person_1.Person {
    constructor(personName, age, stud_id) {
        super(personName, age);
        this.stud_id = stud_id;
    }
    writeExam() {
        console.log("Exam completed");
    }
}
exports.Student = Student;
