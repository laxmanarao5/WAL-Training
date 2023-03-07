// console.log("Hello");
// let a:number; 
// let str:string="laxman"

// let state:boolean=true
// let person:object={
//     user:"laxman",
//     age:20
// }

// let skills:string[] =["Java"] //declare array
// let marks:number[]=[10,20,30]

// let test:string|number  //Union - it can accept string and number eg : roll number
// test=100;
// test="laxman"
// //test=true   boolean not acceptable

// let roll_no:(number|string)[] =["s170116",53] //Array of Union type

// let x:any  // which can store any datatype, dynamically types variable
// //integer type
// a=10;
// //a="laxman"  //results error as string is assigned to int
// console.log(a);

// let b=20;    //typescript allow to to declare variable withoud datatype

    
// /*Interfaces 



// -      Contract / Specifications
//  to create our own type interfaces will help 
 

//  */
// //Person type
//  interface Person{
//    readonly username:string,    //can read anytime ,but can be assigned once
//     age:number
//  }

//  let p1:Person={
//     username:"laxman",
//     age:20
//      //,email:"lakshmana5296@gmail.com"  //not allowed to add the property which is not defined in its Interface
//  }


// // --Interfaces can be merged
// // interface Person{
// //     mobile:number
// // }



// interface Person{
//     mobile?:number     //o/? represents ptional property 
// }

// //p1.username="laxman"   //We can't modify readonly properties
// p1.age=21    //can be modified
// p1.mobile=8367027220454544

// // console.log(p1)









//  //create student type with type keyword
//  type Student={
//     roll_no:number,
//     city:string
//  }


//  let s1:Student={
//     roll_no:34,
//     city:"hyd"  //If we not assign any property listed , will throw an error
//     //,mobile:8367027220  //not allowed to add the property which is not defined in its type

//  }





//  //Functions

//  function testFunction(a:number,b?:number,c:number=10):void    //return type
//  {   
//     console.log(a,b,c) 

//     console.log();
    
//  }

//  testFunction(100)




// interface Test{
//    a:number
//    b:number
//    sum(a:number,b:number):number
//  }

 //Instatiate interface with object
//It will not allow to add extra properties
//  let p3:Test={
//    a:10,
//    b:20,
//    sum(a:number,b:number):number
//    {
//       return a+b
//    }
//  }

//complex interface
//  interface Employee{
//    eNo:number|string,
//    username:string,
//    address:{
//       city:string,
//       pincode:number
//    },
//    skills:string[]
//  }

//  let emp:Employee={
//    eNo:113,
//    username:"laxman",
//    address:{
//       city:"polaki",
//       pincode:532429
//    },
//    skills:["react","nodejs","AWS"]
//  }

// //  console.log(emp)

// //task 3

//  interface Skill{
//    skill_name:string,
//    skill_desc:string
//  }

//  interface Student{
//    roll_no:number|string,
//    address:{
//       perm_address:{
//          city:string,
//          pincode:number
//       },
//       temp_address:{
//          city:string,
//          pincode:number
//       }
//    },
//    skills:Skill[]
//  }
 
// // let std:Student={
// //    roll_no:53,
// //    address:{
// //       perm_address:{
// //          city:"polaki",
// //          pincode:532429
// //       },
// //       temp_address:{
// //          city:"Hyd",
// //          pincode:500031
// //       }
// //    },
// //    skills:[
// //             {skill_name:"react",skill_desc:"Front-end"},
// //             {skill_name:"Nodejs",skill_desc:"Back-end"},
// //             {skill_name:"AWS",skill_desc:"Deployment"}
// //          ]
// // }


// class StudentInfo implements Student{
  
//    constructor(public roll_no:string|number,public address:{
//       perm_address:{
//          city:string,
//          pincode:number
//       },
//       temp_address:{
//          street:string,
//          city:string,
//          pincode:number
//       }
//    },public skills:Skill[]){ }
   
   
//    getInfo( )
//    {
//       return {roll_no:this.roll_no,street:this.address.temp_address.street}
//    }

// }

// let std=new StudentInfo(   53,{perm_address:{city:"hyd",pincode:500031},
//                            temp_address:{city:"hyd",pincode:500031,street:"anjaiah nagar"}},
//                            [{skill_name:"react",skill_desc:"front-end framework"}])
// console.log(std.getInfo());
// console.log(std);

// console.log(std);


 //Instatiate interface with class
//It will allow to add extra properties

// interface Test{
//    a:number,
//    sum(x:number,z:number):number
// }

// interface Test2{
//    b:number,
// }

// class TestEmp implements Test,Test2
// {
//    constructor(public a:number,public b:number){}
//    sum(x:number,z:number):number{
//       return this.a;
//    }

// }

// let testObj=new TestEmp(10,20)

// console.log(testObj);




