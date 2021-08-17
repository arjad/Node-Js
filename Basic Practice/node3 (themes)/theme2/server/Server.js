//installed before
const express= require('express')
//to use api
const cors= require('cors')

// express inside onst variable
const app= express()
//making api
const data=[
    {
        img:"pizza.png",
        headline:"Thai Combo",
        desc:"aliInterdum amet acerat commodo ut sc tempor lobortis nunc non. Mi accumsan.",
        price:"12$"
    },{
        img:"pizza.png",
        headline:"Mozzarella Pizza",
        desc:"aliInterdum amet accumsan placerat commodt nunc tempor lobortis nunc non. Mi accumsan.",
        price:"12$"
        
    },{
        img:"pizza.png",
        
        headline:"Cheese Pizza",
        desc:"aliInterdum amet accumsan placerm blandit nunc tempor lobortis nunc non. Mi accumsan.",
        price:"12$"
        
    },{
        img:"pizza.png",
        
        headline:"NoCheese Pizza",
        desc:"aliInterdum amet accjhdsisdhaliquam blandit nunc tempor lobortis nunc non. Mi accumsan.",
        price:"12$"
        
    },{
        img:"pizza.png",
        
        headline:"Veg Pizza",
        desc:"aliInterdum amet accumsaet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.",
        price:"12$"

    },{
        img:"pizza.png",
        
        headline:"Tikaa Pizza",
        desc:"aliInterdum ametdo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.",
        price:"12$"

    },
]
//usimg cors
app.use(cors())

// on port 2000+ call back function
app.listen(4000,()=>{
    console.log("server is running for theme2");
})

//geting request and response
app.get("/",(req,res)=>{
    res.send("arjad")
})

app.get("/post",(req,res)=>{
    res.send(data)
})
