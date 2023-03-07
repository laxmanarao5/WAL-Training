import {Person } from "./Person"

export class Student extends Person{
    constructor(personName:string,age:number,private stud_id:string){
        super(personName,age)
    }
    writeExam(){
        console.log("Exam completed");   
    }
}