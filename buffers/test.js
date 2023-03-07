let buff=Buffer.from("abcd")     //create buffer and store data in binary format

console.log(buff)    //  <Buffer 61 62 63 64>   - stores in binary format but print in hexadecimal format
console.log(buff.toString())


//import file module
const fs=require("fs")


//reading file normally
const readFileNormally=()=>{
    //
    fs.readFile("./sample.txt",(err,data)=>{
        if(err) console.log(err)
        else console.log(data.toString());
    })
}

//read streams from API
const getDataFromApi=async()=>{
    //create write strem
    let writeStream=fs.createWriteStream("./data.txt")
    //fetch data from API
    let res=await fetch("https://jsonplaceholder.typicode.com/posts")
    //collecting data stream
    let dataStream=res.body
    //iterating through data stream
    for await (chunk of dataStream){
        //writing each chunk to file
        writeStream.write(Buffer.from(chunk).toString())
    }
}
getDataFromApi()


//read streams from local files
const readFileWithStream=()=>{
    let count=0
    let readStream =fs.createReadStream("./laxman.exe")
    let writeStream=fs.createWriteStream("./data.txt")

    readStream.addListener("data",(chunk)=>{
        count=count+1
        // writeStream.write(chunk)
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log("*********************************************************************")
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log()
        // console.log(chunk.toString().length)
    })
    console.log(count);
}


// readFileNormally()
// readFileWithStream()