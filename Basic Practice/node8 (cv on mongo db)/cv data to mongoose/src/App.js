import React,{useState} from 'react'
import './app.css'
import axios from 'axios'

function App() {

  //username sending 
  const [userName, setUser] = useState("");
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

  // email sending
  const [email, setemail] = useState("");
  const handleChange3 = (e) => {
      setemail(e.target.value)
  }
  console.log(email);

  const [sch, setsch] = useState("");
  const handleChange4 = (e) => {
      setsch(e.target.value)
  }
  console.log(sch);
  const [schm, setschm] = useState("");
  const handleChange5 = (e) => {
      setschm(e.target.value)
  }
  console.log(schm);
  const [col, setcol] = useState("");
  const handleChange6 = (e) => {
      setcol(e.target.value)
  }
  console.log(col);
  const [colm, setcolm] = useState("");
  const handleChange7 = (e) => {
      setcolm(e.target.value)
  }
  console.log(colm);

  const [uni, setuni] = useState("");
  const handleChange8 = (e) => {
      setuni(e.target.value)
  }
  console.log(uni);
  const [unim, setunim] = useState("");
  const handleChange9 = (e) => {
      setunim(e.target.value)
  }
  console.log(unim);

  // button function
  const [main__obj, setMain__obj] = useState([]);
  const handleClick=()=>{
    alert("Send Data")
     let NewArr=main__obj
     let obj = {userName:userName,Password:Password,email:email,sch:sch,schm:schm,col:col,colm:colm,uni:uni,unim:unim}
     NewArr.push(obj)
     setMain__obj(NewArr)

      axios.post("http://localhost:9000/login",obj).then((res)=>{
          console.log(res.data)
      })
    }
    console.log(main__obj);
    // console.log("main obj =")


    ///getting login posts
    
    // axios.get('http://localhost:9000/login').then((res)=>{
    //   // console.log("res.dadta apip= ");
    //   console.log(res.data);   // our whole api
    // })




  return (
    <div className="app">
      <h1>CV Maker (data go to mongo DB)</h1>

      <h3>Full Name:</h3>
      <input placeholder="UserName" onChange={handleChange1}></input>
      <h3>Password:</h3>
      <input placeholder="Password" onChange={handleChange2}></input>
      <h3>Email:</h3>
      <input placeholder="email" onChange={handleChange3}></input>
      <h3>School Name:</h3>
      <input placeholder="school name" onChange={handleChange4}></input>
      <h3>School Grades:</h3>
      <input placeholder="school grades" onChange={handleChange5}></input>
      <h3>College Name:</h3>
      <input placeholder="col name" onChange={handleChange6}></input>
      <h3>Collge Grades:</h3>
      <input placeholder="col grades" onChange={handleChange7}></input>
      <h3>UNI Name:</h3>
      <input placeholder="uni name" onChange={handleChange8}></input>
      <h3>Uni Grades:</h3>
      <input placeholder="uni grades" onChange={handleChange9}></input>

      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
export default App;