// console.log("hello");

// import { Person } from "./moduleA";


// //import Employee
// import { Employee } from "./Employee";

// //import student
// import {Student} from "./Student";

// //import businessman
// import { Businessman } from "./Businessman";

// import { Address } from "./Address";

// let objAdddress=new Address("Hyd")

// //crearte object for Employee
// let emp1=new Employee("Employee laxman",20,"Full stack",objAdddress)


// let emp2=new Employee("Employee lokesh",20,"backend",objAdddress)

// emp1.address.city="Chennai"

// console.log(emp1);

// console.log(emp2);


// //create object for Student
// let stdObj=new Student("Student laxman",21,"S170116")

// //create object for Businessman
// let bmObj=new Businessman("Businessman laxman",26,"Chip Manufacturer")

// // bmObj.sleep();

//import Oneplus module
import { Oneplus } from "./Abstract-classes/Oneplus"

let mob1=new Oneplus();

//from BBKEle
mob1.makePCB()
mob1.makeCamera()

//from OPPO
mob1.makeBattery()

//from manuCase
mob1.makeCase()

//from Oneplus
mob1.assembleAllParts()
