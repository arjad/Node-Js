import axios from 'axios';
import React ,{useState} from 'react'

function Form() 
{
  // ```````name
  const [Name,setName]=useState();
  const handleSubmit1=(e)=>{
    setName(e.target.value)
  }
  console.log(Name);

  // ```````pasword
  const [Password,setPassword]=useState();
  const handleSubmit2=(e)=>{
    setPassword(e.target.value)
  }
  console.log(Password);


  const [main__obj,setMain_obj]=useState([]);
  const handleClick=()=>{
    console.log("handling (click me )")
    let NewArr=main__obj;
    let obj={Name:Name,Password:Password}
    console.log(obj,"= obj is")

    NewArr.push(obj)
    setMain_obj(NewArr,"new array")
  }
  console.log( main__obj,"main obj == ");


  const handleSubmit=()=>{
    console.log("==============handling submit====")
    
    axios.post("http://localhost:2000/login", main__obj).then((res)=>{
      console.log(res.data,"res");
    })

  }

  return (
    <div>
      <input type="text" placeholder="userNmae" onChange={handleSubmit1}></input>
      <input type="text" placeholder="pasword" onChange={handleSubmit2}></input>
      
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleSubmit}>Submit</button>
    
    </div>
  )
}
export default Form
