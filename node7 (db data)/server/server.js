const express=require("express")
const cors = require('cors')
const app= express()
const bodyParser = require('body-parser')
const mongose= require("mongoose")
const User= require("./user")
app.use(cors())

mongose.connect("mongodb+srv://arjad:123@cluster0.fywve.mongodb.net/login?retryWrites=true&w=majority").then((res=>{
    console.log("mongoose connected");
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send({ value:"success (get)"})
})

// post data on server.js
app.post('/posts',(req,res)=>{
    res.send({key:"success (post)"});
    
    var user=new User(req.body)
    user.save();
})
app.listen(7000,()=>{
    console.log("server is runing on port 7000");  
})