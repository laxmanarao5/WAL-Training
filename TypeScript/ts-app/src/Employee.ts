import { Address } from "./Address";
import {Person } from "./Person"

export class Employee extends Person {
    constructor(personName:string,age:number,private designation:string,public address:Address){     
        super(personName,age)
    }

    createApp(){
        console.log("Application developed");
        
    }

    
}



