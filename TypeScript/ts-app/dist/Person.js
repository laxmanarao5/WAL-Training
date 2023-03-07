"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(personName, age) {
        this.personName = personName;
        this.age = age;
    }
    sleep() {
        console.log(this.personName, "is sleeping");
    }
}
exports.Person = Person;
