const express = require('express')
const cors = require('cors')

const app= express()
app.use(cors())

const data=[
    {
        date:"20",
        month:"january",
        year:"2021",
        place:"natiya gali",
        country:"pakistan",
        available:"sold",
    },
    {
        date:"30",
        month:"august",
        year:"2021",
        place:"Laal Qila",
        country:"pakistan",
        available:" not sold",
    },
    {
        date:"11",
        month:"December",
        year:"2021",
        place:"Big Mandir",
        country:"India",
        available:"sold",
    },
    {
        date:"22",
        month:"march",
        year:"2021",
        place:"ilfele tover",
        country:"Paris",
        available:"Avalaible",
    },
    {
        date:"20",
        month:"january",
        year:"2021",
        place:"natiya gali",
        country:"pakistan",
        available:"sold",
    },
    {
        date:"14",
        month:"january",
        year:"2021",
        place:"natiya gali",
        country:"pakistan",
        available:"sold",
    },
    
]

app.get("/",(req,res)=>{
    res.send(data)

})

app.listen(4000,()=>{
    console.log("server run for t3");
})