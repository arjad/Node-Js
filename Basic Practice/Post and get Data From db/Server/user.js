const mongoose=require('mongoose');

const Schema=mongoose.Schema
const user=new Schema({

    Date__Enquriy:String,
    Visit__Organiser:String,
    Organisation__school:String,
    Address:String, 
    CityName:String,
    Zip__code:String,
    CountryName:String,
    Conatct__telephone:String,
    Emergency__telephone:String,
    Email:String,
    How_did_you_hear_About_us:String,
    Education__update:String,
    Preferred__date1:String,
    Preferred__date2:String,
    Preferred__date3:String,
    PreferredDeparture__duration:String,

})

module.exports=mongoose.model("user", user)