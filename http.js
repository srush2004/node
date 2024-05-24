const http = require('http')
const server = http.createServer((req,res)  =>{
 const url = req.url
 if (url == '/'){
    res.writeHead(200, {'content-type':'text/html'})
    res.end('<h1>Welcome to the BarterX</h1>')
 }
    else if  (url == '/product') {
        res.writeHead(200, {'content-type':'text/html'})
        res.end('<h1>Here are the products up for Sale in BarterX</h1>')
    }
    else if  (url == '/login') {
        res.writeHead(200, {'content-type':'text/html'})
        res.end('<h1>Login to the BarterX</h1>')
    }
    else if  (url == '/sign up') {
        res.writeHead(200, {'content-type':'text/html'})
        res.end('<h1>Sign up to the BarterX</h1>')
    }
    else if  (url == '/profile') {
        res.writeHead(200, {'content-type':'text/html'})
        res.end('<h1>Trader Profile</h1>')
    }
    else if  (url == '/cart') {
        res.writeHead(200, {'content-type':'text/html'})
        res.end('<h1>Your Shopping Cart is here</h1>')
    }
    else if  (url == '/checkout') {
        res.writeHead(200, {'content-type':'text/html'})
        res.end('<h1>Lets start shipping</h1>')
    }
    else if  (url == '/orders') {
        res.writeHead(200, {'content-type':'text/html'})
        res.end('<h1>Your Orders are here</h1>')
    }
    else if  (url == '/categories') {
        res.writeHead(200, {'content-type':'text/html'})
        res.end('<h1>Browse Categories</h1>')
    }
    else if  (url == '/chat') {
        res.writeHead(200, {'content-type':'text/html'})
        res.end('<h1> Your Chat with fellow Traders</h1>')
    }
    else if  (url == '/contract') {
        res.writeHead(200, {'content-type':'text/html'})
        res.end('<h1>Contact Us at</h1>')
    }
    else if  (url == '/about') {
        res.writeHead(200, {'content-type':'text/html'})
        res.end('<h1>The modern approach to trading our commodities</h1>')
    }
    else {
        res.writeHead(404, {'content-type':'text/html'})
        res.end(`<h1>Page Not Found</h1>
                <a href='/'>back home<a>`)
    }
 })
 server.listen(8081)

 // fs , append ,input='log.txt',value: datetostring, timetostring