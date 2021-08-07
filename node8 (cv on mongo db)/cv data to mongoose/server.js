const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser')
const mongoose=require("mongoose")
const app = express()
var User= require("./user.js")

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// conect database
mongoose.connect("mongodb+srv://arjad:123@cluster0.fywve.mongodb.net/login?retryWrites=true&w=majority").then(()=>{
   console.log("db connected");
})

// Send RESPONSE
app.get("/",(req, res)=>{
    res.send({key:"Value"})
} )
;
// Server post
app.post("/login",(req,res)=>{
    console.log(req.body);
    // res.send({key:"successfull Send Data"})

    var user=new User(req.body)
    user.save().then((resp)=> {
        res.json(resp)
    })
})

app.listen(9000,()=>{
    console.log("server is running for mongo db");
})
