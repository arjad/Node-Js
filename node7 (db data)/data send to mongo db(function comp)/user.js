const mongoose=require("mongoose")

const Schema=mongoose.Schema
const user= new Schema({

    userName:String,
    Password:String,
})

module.exports=mongoose.model("user" , user)