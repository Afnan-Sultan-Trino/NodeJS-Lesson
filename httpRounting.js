
//....http Routing...

// 1. We need to create http server and also npm init -y



// http Server create

const http = require('http');
const PORT = 3000;
const hostName = '127.0.0.1';

const fs=require('fs')


const server=http.createServer((req,res)=>{
    

    // if(req.url==='/'){
    //     fs.readFile("index.html",(err,data)=>{
    //         res.writeHead(200,{"content-type":"text/html"});
    //         res.write(data);
    //         res.end()
    //     })
    // }

    // else if(req.url==='/about'){
    //     fs.readFile("about.html",(err,data)=>{
    //         res.writeHead(200,{"content-type":"text/html"});
    //         res.write(data);
    //         res.end()
    //     })
    // }
    // else if(req.url==='/contact'){
    //     fs.readFile("contact.html",(err,data)=>{
    //         res.writeHead(200,{"content-type":"text/html"});
    //         res.write(data);
    //         res.end()
    //     })
    // }
    // else{
    //     fs.readFile("error.html",(err,data)=>{
    //         res.writeHead(404,{"content-type":"text/html"});
    //         res.write(data);
    //         res.end()
    //     })
    // }


    // as there are multiple same line, we can simply create a function and pass the necessary parameter 
    // parameter should be status code, fileLocation


    const handleReadFile=(status,fileLocation)=>{

        fs.readFile(fileLocation,(err,data)=>{
            res.writeHead(status,{"content-type":"text/html"});
            res.write(data);
            res.end()
        })
    }


    if(req.url==='/'){
        handleReadFile(200,"index.html")
    }
    else if(req.url==='/about'){
        handleReadFile(200,"about.html")
    }
    else if(req.url==='/contact'){
        handleReadFile(200,"contact.html")
    }
    else{
        handleReadFile(404,"error.html")
    }


})

server.listen(PORT,hostName,()=>{
    console.log(`Server is running successfully at http://${hostName}:${PORT}`);
})