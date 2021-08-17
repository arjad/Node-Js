import axios from 'axios';
import React ,{useState} from 'react'
import '../src/Form.css'
import Img from '../src/img/nav.PNG'
import CV from "../src/cv/cv";
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

function Form() 
{
  // ```````name
  const [Fname,setFname]=useState();
  const handleSubmit1=(e)=>{

    setFname(e.target.value)
  }
  console.log(Fname);

  const [Lname,setLname]=useState();
  const handleSubmit2=(e)=>{

    setLname(e.target.value)
  }
  console.log(Lname);

  const [email,setemail]=useState();
  const handleSubmit3=(e)=>{

    setemail(e.target.value)
  }
  console.log(email);
  const [phone,setphone]=useState();
  const handleSubmit4=(e)=>{

    setphone(e.target.value)
  }
  console.log(phone);
  const [add,setadd]=useState();
  const handleSubmit5=(e)=>{

    setadd(e.target.value)
  }
  console.log(add);
  const [comp,setcomp]=useState();
  const handleSubmit6=(e)=>{

    setcomp(e.target.value)
  }
  console.log(comp);
  const [pos,setpos]=useState();
  const handleSubmit7=(e)=>{

    setpos(e.target.value)
  }
  console.log(pos);
  const [year,setyear]=useState();
  const handleSubmit8=(e)=>{

    setyear(e.target.value)
  }
  console.log(year);
  const [sch,setsch]=useState();
  const handleSubmit9=(e)=>{

    setsch(e.target.value)
  }
  console.log(sch);
  const [schmarks,setschmarks]=useState();
  const handleSubmit10=(e)=>{

    setschmarks(e.target.value)
  }
  console.log(schmarks);

  const [col,setLcol]=useState();
  const handleSubmit11=(e)=>{

    setsch(e.target.value)
  }
  console.log(col);

  const [colmarks,setcolmarks]=useState();
  const handleSubmit12=(e)=>{

    setcolmarks(e.target.value)
  }
  console.log(colmarks);

  const [uni,setuni]=useState();
  const handleSubmit13=(e)=>{

    setsch(e.target.value)
  }
  console.log(uni);

  const [unimarks,setunimarks]=useState();
  const handleSubmit14=(e)=>{

    setunimarks(e.target.value)
  }
  console.log(unimarks);

  const [ach,setach]=useState();
  const handleSubmit15=(e)=>{
    setach(e.target.value)
  }
  console.log(ach);


///////////////////////////////
  const [main__obj,setMain_obj]=useState([]);
  const handleClick=()=>{
    alert("click")
    let NewArr=main__obj;
    let obj={fname:Fname,lname:Lname,email:email,phone:phone,add:add,comp:comp,pos:pos,year:year,sch:sch,schmarks:schmarks,col:col,colmarks:colmarks,uni:uni,unimarks:unimarks,ach:ach}
    NewArr.push(obj)
    setMain_obj(NewArr)
  }
  console.log(main__obj);
  const handleSubmit=()=>{
    alert("submit")
    axios.post("http://localhost:2000/login", main__obj).then((res)=>{
      console.log(res.data);
    })
  }
  ////////show cv////
  const show=()=>{
    alert("show CV with proop")

    const response=main__obj.map((obj,i)=>{
      return (
        <div>
          {obj.Fname}
        </div>
      )
    })
    
    
  }

  return (
    <div className="forms">
      <div className="nav" style={{backgroundImage: "url(" + Img + ")"}}>      </div>
      <div className="inp">
        <h2 className="col">Basic Info : </h2>

        <div className="i">
          <h3>First Name:</h3>
          <input type="text" onChange={handleSubmit1}></input>
        </div>

        <div className="i">
          <h3>Last Name:</h3>
          <input type="text" onChange={handleSubmit2}></input>
        </div>

        <div className="i">
          <h3>Email:</h3>
          <input type="text" onChange={handleSubmit3}></input>
        </div>

        <div className="i">
          <h3>Phone No:</h3>
          <input type="text" onChange={handleSubmit4}></input>
        </div>

        <div className="i">
          <h3>House Address:</h3>
          <input type="text" onChange={handleSubmit5}></input>
        </div>

        <h2 className="col">Work Experience : </h2>

        <div className="i">
          <h3>Company Name:</h3>
          <input type="text" onChange={handleSubmit6}></input>
        </div>

        <div className="i">
          <h3>Previous Position:</h3>
          <input type="text" onChange={handleSubmit7}></input>
        </div>

        <div className="i">
          <h3>Years of Working:</h3>
          <input type="text" onChange={handleSubmit8}></input>
        </div>

        <h2 className="col">Education : </h2>

        <div className="i">
          <h3>School:</h3>
          <input type="text" onChange={handleSubmit9}></input>
        </div>

        <div className="i">
          <h3>School Marks:</h3>
          <input type="text"  onChange={handleSubmit10}></input>
        </div>

        <div className="i">
          <h3>College:</h3>
          <input type="text" onChange={handleSubmit11}></input>
        </div>

        <div className="i">
          <h3>College Marks:</h3>
          <input type="text" onChange={handleSubmit12}></input>
        </div>

        <div className="i">
          <h3>University:</h3>
          <input type="text" onChange={handleSubmit13}></input>
        </div>

        <div className="i">
          <h3>University GPA:</h3>
          <input type="text" onChange={handleSubmit14}></input>
        </div>

      
        <div className="i">
          <h3>Extra Acheivments:</h3>
          <input type="text" onChange={handleSubmit15}></input>
        </div>



        <button onClick={handleClick}>Click me</button>
        <button onClick={handleSubmit}>Submit</button>
        <Link to="/yourcv">
          <button onClick={show}>Display</button>
        </Link>

      </div>
      {/* <CV prop1={show}/> */}
      <Router>
        <Route path="/yourcv" exact component={CV}/>
      </Router>
    </div>
  )
}
export default Form
