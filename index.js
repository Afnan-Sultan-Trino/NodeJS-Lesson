
// 2. Learning fs(file-system) module

const { writeFile } = require('fs')

// At first, we have to require the file system using require()

const fs=require('fs');


//.........writeFile()...........//

fs.writeFile('demo.txt',"This is simple Text",function(err){  //here, writeFile('file_name',"file_content",callback function)
    if(err){
        console.log(err)
    }
    else{
        console.log("Successful")  // As demo.txt file doesn't exist, so at first, it will create a file with this name, also insert the content there
    }  // We can see the file has been created on the left-side, so, it will print successful
})


fs.writeFile('demo.txt',"This is Afnan Sultan",function(err){ 
    if(err){
        console.log(err)
    }
    else{
        console.log("Successful")  // Now, as the demo.txt file is already created, it will overwrite the content
    }   // So, in previous it was "This is simple Text", it will change to -> "This is Afnan Sultan"
})


//.......appendFile()....//

fs.appendFile('demo.txt',"I am 23 years old",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Successful")  // Now, as the demo.txt file is already created, it will append/add the content 
    }  // So, in previous, it was "This is Afnan Sultan", Now it will be ->"This is Afnan SultanI am 23 years old"
})


//.......readFile()......//

fs.readFile('demo.txt','utf-8',(err,data)=>{  // Here, utf-8 used for converting raw binary data to human readable string
    if(err){
        console.log(err)
    }
    else{
        console.log(data) // It will print the data/content of the file demo.txt
    }
})


//.......rename()......//

fs.rename('demo.txt','New.txt',(err)=>{  // It will rename demo.txt -> New.txt 
    if(err){
        console.log(err)
    }
    else{
        console.log("Successful")
    }
})


fs.writeFile('delete.txt',"This is for Delete Text",function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("Successful") 
    } 
})


//.......unlink() for Delete......//

fs.unlink('delete.txt',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Delete Successful")  // It will delete the file 'delete.txt'
    }
})

//.......Exists()......//

fs.exists('New.txt',(result)=>{
    if(result){
        console.log("File is Found")  // it will find whether 'New.txt' exist or not
    }
    else{
        console.log("Not Found") 
    }
})


fs.exists('Demo2.txt',(result)=>{
    if(result){
        console.log("File is Found")  // it will find whether 'Demo2.txt' exist or not
    }
    else{
        console.log("Not Found") // As doesn't exist, so not found
    }
})

