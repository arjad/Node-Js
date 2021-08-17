const express=require('express');
const bodyParser = require('body-parser')
const cors = require("cors")
const mongoose= require("mongoose")
const User=require("./user.js")
const app=express()


app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// conect database
mongoose.connect("mongodb+srv://Ali:123@cluster0.c6ifg.mongodb.net/<dbname>?retryWrites=true&w=majority").then(()=>{
    console.log("mongodb connected ");
})

app.get('/login', (req,res)=>{
    // res.send({key:"Value"})

    User.find().then((data)=>{
        console.log(data);
        res.send(data)
    })

})

app.post("/posts",(req,res)=>{
    console.log(req.body);
    console.log("Data Successfull Send Server and Mongodb");
    var user=new User(req.body)
    user.save()
})
app.listen(4000,()=>{
    console.log("Server Running");
})