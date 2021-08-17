const mongoose=require("mongoose")

const Schema=mongoose.Schema
const user= new Schema({

    userName:String,
    Password:String,
    email:String,
    sch:String,
    schm:String,
    col:String,
    colm:String,
    uni:String,
    unim:String,
})

module.exports=mongoose.model("user" , user)
