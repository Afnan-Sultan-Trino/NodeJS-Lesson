
// Built-in Module "http"

// Reason for creating server is : We can directly see a web page from server, not depending on Browser

//.....http module......//


// 1. createServer()

const http=require("http");
// http.createServer((req,res)=>{                // passing two parameter req(request),res(response)
//     res.end("Hello, I am your First Server")  // res.end() will show the response that will be provide by server
// }).listen(3000);                              // listen will give the Port number where it will be shown

// after enter from terminal, it will take time but, we can search to "localhost:3000", and we will see the output





// for alternative way, 

// const myServer= http.createServer((req,res)=>{                
//     res.end("Hello, I am your First Server")  
// });

// myServer.listen(3000,()=>{
//     console.log("Server is running successfully at localhost:3000") // Now we can see at the terminal, this text is written
// })                                                                   // and localhost:3000 will show the output


// We can also give port name, hostname

const port=3000;
const hostName="127.0.0.1"

const myServer= http.createServer((req,res)=>{                
    res.end("<h1>Hello, I am your First Server<h1>")  // We can also use html tag here
});

myServer.listen(port,hostName,()=>{
    console.log(`Server is running successfully at http://${hostName}:${port}`) 
})    

