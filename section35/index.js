const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }))

app.get('/tacos',(req,res)=>{
    res.send("/get,tacos sending response")
})

app.listen(3000,()=>{
    console.log("listening to 3000 ")
})

app.post('/tacos',(req,res)=>{

    console.log(req.body)
res.send("post/,tacos sending response")
})