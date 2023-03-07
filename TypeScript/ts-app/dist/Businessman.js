"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Businessman = void 0;
const Person_1 = require("./Person");
class Businessman extends Person_1.Person {
    constructor(personName, age, businessName) {
        super(personName, age);
        this.businessName = businessName;
    }
}
exports.Businessman = Businessman;
