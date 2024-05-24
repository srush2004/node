const fs  =require('fs')
fs.appendFile('hi.txt', 'hello', (req, res)=>{
    console.log("error")
})