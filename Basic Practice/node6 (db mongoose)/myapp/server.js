const express = require("express")
const cors = require('cors')
const mongoose = require("mongoose")
const app= express();
app.use(cors())

//connect database
mongoose.connect("mongodb+srv://arjad:123@cluster0.fywve.mongodb.net/login?retryWrites=true&w=majority").then(()=>{
    console.log("db connecteds");
});

app.post('/',(req,res)=>{
    console.log(req.body)
    console.log("posts");
})

app.listen(9000, ()=>{
    console.log("DB server is running");
})






