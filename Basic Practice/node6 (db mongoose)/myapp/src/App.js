import React,{useState} from 'react'
import './App.css'
import axios from 'axios'
function App() {

  const [userName, setUser] = useState("");
  const handleChange1 = (e) => {
      setUser(e.target.value)
  }
  console.log(userName);

  // password
  const [Password, setpas] = useState("");
  const handleChange2 = (e) => {
      setpas(e.target.value)
  }
  console.log(Password);
  // button function
  // const [main__obj, setMain__obj] = useState([]);
  const obj = ({
    Password:"123",
    userName:"Ali Ahmad"
  })
  const handleClick=()=>{
    
    alert("Send Data")
    // let NewArr=main__obj
        // let obj = {userName:userName,Password:Password}
        // NewArr.push(obj)
        // setMain__obj(NewArr)

        axios.post("http://localhost:9000/login",obj).then((res)=>{
          // console.log();
          console.log(res.data,)
      })
    }
    // console.log(main__obj);
  


  return (
    <div className="App">

<h1>MongoDB DataBase</h1>



<input placeholder="UserName" onChange={handleChange1}></input>
<input placeholder="Password" onChange={handleChange2}></input>
<button onClick={handleClick}>Click Me</button>


    </div>
  );
}

export default App;
