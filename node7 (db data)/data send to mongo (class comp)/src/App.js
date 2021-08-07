import React, { Component } from 'react'
import axios from 'axios'
export class App extends Component 
{
  state = {
    name:"",
    list:[]
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  handleClick=()=>{
    alert("click now")
    
    let newlist= this.state.list
    let  obj = { name :this.state.name}
    newlist.push(obj)
    
    this.setState({
      list:newlist,
    })
    // app.js on handle click  
    axios.post("http://localhost:7000/posts",obj).then((res)=>{
      console.log(res.data ,"= res.data");
    })
  }
  render() 
  {
    console.log(this.state.name, "=name");
    console.log(this.state.list, "list");

    return (
      <div>
        <h1>let build cv app </h1>
        <input type="text" placeholder="name" name="name" onChange={this.handleChange}/>

        <button onClick={this.handleClick} >Click</button>
      </div>
    )
  }
}
export default App
