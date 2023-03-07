import {Person } from "./Person"

export class Businessman extends Person{
    constructor(personName:string,age:number,private businessName:string){
        super(personName,age)
    }

    
}