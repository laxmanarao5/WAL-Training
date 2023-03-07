type Employee={
    firstName:string,
    lastName:string,
     age:number,
     basic:number
}

let p1:Employee={
    firstName:"laxmanarao",
    lastName:"b",
    age:20,
    basic:2000
}
let p2:Employee={
    firstName:"lokesh",
    lastName:"boddepalli",
    age:20,
    basic:100000
}
let p3:Employee={
    firstName:"laxman",
    lastName:"boddepalli",
    age:20,
    basic:5000
}

// //Function to Calculate the salary
// function getSalary(emp:Employee){
//     let hra=0.25*emp.basic
//    let  da=0.20*emp.basic
//     return hra+da+emp.basic
// }

// console.log(getSalary(p1));

//least paid employee
function leastPaidEmployee(emps:Employee[]):Employee{
    return emps.reduce((element:Employee,accumulator:Employee)=>element.basic<accumulator.basic?element:accumulator)

}
console.log("Least paid Employee : ")
console.log(leastPaidEmployee([p1,p2,p3]));



//Higly paid employee
function highlyPaidEmployee(emps:Employee[]):Employee{
    return emps.reduce((element:Employee,accumulator:Employee)=>element.basic>accumulator.basic?element:accumulator)

}
console.log("Highly paid Employee : ")
console.log(highlyPaidEmployee([p1,p2,p3]));
