// class Student{
//     private username:string
//     private email:string
//     mobile:number

//     constructor(username:string,email:string,mobile:number)
//     {
//         this.username=username
//         this.email=email
//         this.mobile=mobile
//     }

// }
// class Student{
//     static test:number=10;  //static member
//     constructor(private _username:string,private _email:string,public _mobile:number){}  //Parameter properties
//     //When we write access modifiers before parameters of constructors then parameters becomes properties of class and initialized on object creation
//     getData(){           //method
//         return [this._username,this._email,this._mobile]
//     }
//     //getter for username
//     get username(){
//         return this._username+" - result from getter"
//     }
//     //setter for username
//     set username(newUsername){
//         this._username=newUsername
//     }
// }


// let std1:Student=new Student("laxman","laxman@gmail.com",836702720)


// console.log(std1.getData())
// console.log(std1.username)
// std1.username="NTR"
// console.log(std1.username)

//to run we need to specify target like es5 or higher using tsc --target es5 classes.ts
// console.log(Student.test)

// console.log(std1.mobile)

