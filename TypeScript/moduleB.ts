//import default exports
import A from "./moduleA"

//moduleA transpile while transpiling moduleB

console.log(A);


// import {Student,Person} from "./moduleA"
import * as data from "./moduleA"

// console.log(Student,Person);
console.log(data.Student,data.Person);
