class Product{
    constructor(private _number:number,private _name:string,private _brand:string,private _MRP:number){}
    //getter for number
    get number() { return this._number}
    //getter for name
    get name(){ return this._name}
    //getter for brand
    get brand(){return this._brand}
    //getter for MRP
    get MRP(){return this._MRP}
    //setter for number
    set number(number){this._number=number}
    //setter for name
    set name(name){this._name=name}
    //setter for brand
    set brand(brand){this._brand=brand}
    //setter for MRP
    set MRP(MRP){this._MRP=MRP}
    //method to get final price
    finalPrice( disc:number):number{return this._MRP-((disc/100)*this._MRP)}
    
}

//creating objects

let s23:Product=new Product(1,"s23","samsung",90000)

let s3Ultra:Product=new Product(1,"s23 Ultra","samsung",125000)

let oneplus11:Product=new Product(1,"11","Oneplus",55000)

let oneplus11t:Product=new Product(1,"11t","Oneplus",35000)

//invoking setter for MRP
s23.MRP=100000

//calling final price method
console.log(s23.finalPrice(20));

