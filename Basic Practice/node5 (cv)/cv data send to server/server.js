const express = require("express")
const cors= require("cors")
const  bodyParser = require('body-parser')
const app= express()
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send({key:"value"})
})

app.post("/login",(req,res)=>{
    console.log(req.body);
    res.send({key:"CV Data send"})
})

app.listen(2000, ()=>{
    console.log('CV server started');
})

