var express = require('express')
var cookieParser= require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({secret: "It is started"}));

app.get('/', function(req,res){
    if(req.session.page_views){
       req.session.page_views++;
       res.send("This is your"+ req.session.page_views + "visit");
    }else{
        req.session.page_views = 1;
        res.send("This is your first time!");
     }
})



app.listen(8080)