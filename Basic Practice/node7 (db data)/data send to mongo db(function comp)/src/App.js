import React,{useState} from 'react'

function App() 
{
    //username sending 
    const [userName, setUser] = useState("");
    const [render, setrender] = useState([])
    const handleChange1 = (e) => {
          setUser(e.target.value)
      }
      console.log(userName);
    
      // password sending
      const [Password, setpas] = useState("");
      const handleChange2 = (e) => {
            setpas(e.target.value)
        }
        console.log(Password);
      
        // button function
        const [main__obj, setMain__obj] = useState([]);
  const obj = ({
    Password:"123",
    userName:"Ali Ahmad"
  })
  const handleClick=()=>{
      alert("Send Data")
       let NewArr=main__obj
       let obj = {userName:userName,Password:Password}
       NewArr.push(obj)
       setMain__obj(NewArr)
  
        axios.post("http://localhost:9000/posts",obj).then((res)=>{
            console.log(res.data)
          })
        }
        console.log("main obj =",main__obj);
    
        ///////////   get    //////////////
        axios.get('http://localhost:9000/login').then((res)=>{
            console.log("res.data= ",res.data);   // our whole api   
             let qiza = res.data;  
             setrender(qiza) 
          console.log(render,"qiza");
      
          })
      
      
      const respone = render.map((obj,i)=>{
           return ( console.log(respone)
           )
        })
        
        
          return (
          
              <div className="App">
          
                <input placeholder="UserName" onChange={handleChange1}></input>
                <input placeholder="Password" onChange={handleChange2}></input>
          
                <button onClick={handleClick}>Click Me</button>
              {respone}
          
              </div>
            );
          }
          export default App;
         