const express = require('express')
const app = express()
app.get('/', (req,res)=> {res.send(`<h1>Home Page</h1>
                                  <a href="/about">about</a>`)})
app.get('/about', (req,res)=> {res.send(`<h1>About Page</h1>
                            <a href="/">Home page</a>`)})                                
app.get('*', (req,res)=> {res.send(`<h1> Pages Don't Exist</h1>
                                <a href="/">Home page</a>
                                <a href="/about">about</a>
                                <a href="/">Home page</a>`)})                           
app.get('*', (req, res=>{res.send("Not Found")}))
app.listen(8080)                                 

// http://localhost:8080