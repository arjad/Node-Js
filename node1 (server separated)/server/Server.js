//installed before
const express= require('express')
//to use api
const cors= require('cors')

// express inside onst variable
const app= express()

//making api
const data=[
    {
        id:"1",
        name:"ali"
    },
    {
        id:"21",
        name:"aliya"
    },
    {
        id:"11",
        name:"arjad"
    }
]
//usimg cors
app.use(cors())

// on port 2000+ call back function
app.listen(4000,()=>{
    console.log("server is running");
})

//geting request and response
app.get("/",(req,res)=>{
    res.send("arjad")
})

app.get("/post",(req,res)=>{
    res.send(data)
})
