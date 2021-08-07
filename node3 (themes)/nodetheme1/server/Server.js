//installed before
const express= require('express')
//to use api
const cors= require('cors')

// express inside onst variable
const app= express()

//making api
const data=[
    {
        img:"pic01.jpg",
        headline:"Nascetur nunc varius commodo",
        desc:"aliInterdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.",
        btn:"watch"
    },{
        img:"pic02.jpg",
        headline:"Nascetur nunc varius commodo",
        desc:"aliInterdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.",
        btn:"watch"
    },{
        img:"pic03.jpg",
        headline:"Nascetur nunc varius commodo",
        desc:"aliInterdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.",
        btn:"watch"
    },{
        img:"pic04.jpg",
        headline:"Nascetur nunc varius commodo",
        desc:"aliInterdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.",
        btn:"watch"
    },{
        img:"pic05.jpg",
        headline:"Nascetur nunc varius commodo",
        desc:"aliInterdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.",
        btn:"watch"
    },{
        img:"pic06.jpg",
        headline:"Nascetur nunc varius commodo",
        desc:"aliInterdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.",
        btn:"watch"
    },
]
//usimg cors
app.use(cors())

// on port 2000+ call back function
app.listen(4000,()=>{
    console.log("server is running for theme");
})

//geting request and response
app.get("/",(req,res)=>{
    res.send("arjad")
})

app.get("/post",(req,res)=>{
    res.send(data)
})
