

// Built-in Module os,path



console.log(__dirname)   // Will give root directory name
console.log(__filename)     // Will give current file name

//.... path module....//

const path=require("path")

const extensionName=path.extname("index.html")
console.log(extensionName)    // give the extension name ".html"

const joinName= path.join(__dirname + "/views")   // join() will add URL
console.log(joinName)                           //With the directory name, it will add the string "views"

const joinName1= path.join(__dirname + "/../views")
console.log(joinName1)                         //With the /../, it will go back to root folder and then add this string "views"
