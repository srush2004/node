const express = require('express')
const app = express()
const product = require('./data.js')
app.all('/',(req,res)=>{
    res.send(`<h1>Hom e Page</h1>
            <a href = "/product">Go To Products</a>`)
})
app.get('/product',(req,res)=>{
    res.json(product)
})
app.listen(8081)