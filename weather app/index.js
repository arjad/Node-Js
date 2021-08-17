const h= require("http")
const fs = require("fs")
const requests = require('request');

const home_file= fs.readFileSync("home.html","UTF-8")

const replaceval = (tempval, oval) =>{
    let t = tempval.replace("{%tempval%}" , oval.main.temp)
    t = t.replace("{%tempmin%}" , oval.main.temp_min)
    t = t.replace("{%tempmax%}" , oval.main.temp_max)
    t = t.replace("{%city%}" , oval.name)
    t = t.replace("{%country%}" , oval.sys.country)


    return t;

}
// console.log(home_file);

// weather api
// https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=f00f3e484e53028ed0bc1a2bde6a086f
const server = h.createServer((req,res)=>{
    if (req.url == "/")
    {
        requests("https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=f00f3e484e53028ed0bc1a2bde6a086f")
        .on("data", (chunk)=>{

            const onparse = JSON.parse(chunk)
            const a = [onparse]
            
            const real_data = a
            .map((val)=>  replaceval(home_file,val))   //in array
            .join("");                          //in string

            res.write(real_data);
            // console.log(real_data);

        })
        .on("end",(err)=>{
            if(err) return console.log("ERROR !! connection are closed", err);

            res.end();
        })
        // res.write("response on browserr");
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("listened");
})