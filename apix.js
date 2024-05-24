const express = require('express')
const app = express()
const {products} = require('./data.js')
app.get('/', (req,res)=>{
    const newProduct = products.map((product)=>{
        const{id,name,image}=product
        return{id,name,image}
    })
    res.json(newProduct)
})

/*app.get('/api/product/1',(req,res)=>{
    const uniqueProduct = products.filter((product)=> product.id === 1)
    res.json(uniqueProduct)
})*/
app.listen(8080)
app.get('/product/1',(req,res)=>{
    const uniqueProduct = products.filter((product)=>
    product.id === 1)
    res.json(uniqueProduct)
})
app.get('products', (req,res)=>{res.send(`<h1>link</h1>
                                    <a href='/products/1'>link</a>`)})
app.get('/products/1', (req,res)=>{
    const uniqueProduct =products.filter((product)=>
    product.id === 1)
    res.json(uniqueProduct)
})