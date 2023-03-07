
//import EventEmmiter class
const EventEmmiter=require("events")


//create own event
let myEvent=new EventEmmiter()


//add event listener
myEvent.on("hello",(message)=>{        //we can use addListener or on
    console.log("Hello event called", message)
})


//we emit method to call any event
myEvent.emit("hello","by laxman")