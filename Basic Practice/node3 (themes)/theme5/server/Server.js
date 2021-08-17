//installed before
const express= require('express')
//to use api
const cors= require('cors')

// express inside onst variable
const app= express()
//making api
const data=[
    {
        img:"shirt.jpg",
        headline:"Thai Style",
        desc:"aliInterdum amet acerat commodo ut sc tempor lobortis nunc non. Mi accumsan.",
        price:"12$"
    },{
        img:"shirt.jpg",
        
        headline:"Desi Wear",
        desc:"aliInterdum amet accumsan placerat commodt nunc tempor lobortis nunc non. Mi accumsan.",
        price:"42$"
        
    },{
        img:"shirt.jpg",
        
        headline:"Jeans",
        desc:"aliInterdum amet accumsan placerm blandit nunc tempor lobortis nunc non. Mi accumsan.",
        price:"222$"
        
    },{
        img:"shirt.jpg",

        headline:"Pants",
        desc:"aliInterdum amet accjhdsisdhaliquam blandit nunc tempor lobortis nunc non. Mi accumsan.",
        price:"192$"
        
    },{
        img:"shirt.jpg",

        headline:"shirt",
        desc:"aliInterdum amet accumsaet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.",
        price:"12$"

    },{
        img:"shirt.jpg",

        headline:"2 Pieces",
        desc:"aliInterdum ametdo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.",
        price:"17$"

    },
]
//usimg cors
app.use(cors())

// on port 2000+ call back function
app.listen(4000,()=>{
    console.log("server is running for theme4");
})

//geting request and response
app.get("/",(req,res)=>{
    res.send("arjad")
})

app.get("/post",(req,res)=>{
    res.send(data)
})
