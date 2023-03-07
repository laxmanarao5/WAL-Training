export class Person{
    constructor(private personName:string,private age:number){}

    sleep()
    {
        console.log(this.personName,"is sleeping");
        
    }
}