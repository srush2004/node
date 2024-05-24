const express = require('express');
const app = express();
app.get('/', (req,res)=>{
    res.json([{Name:'Srushti Patel'},{Age:19}])
})

app.listen(8081)