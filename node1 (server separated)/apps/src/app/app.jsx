import React, { Component } from 'react'
import axios from "axios"

export class app extends Component {
 
  state=
  {
    data:[],
  }
  componentDidMount(){

    axios.get('http://localhost:4000/post').then((res)=>{
      console.log(res.data ,  " file");
     
      this.setState({
        data:res.data
      })
    })
  }
  render() {
   console.log(this.state,"res");
   const respone =this.state.data.map((obj,i)=>{
     return (
      <div>
       <h4>{obj.name}   {obj.id}</h4>
      </div>
     )
   })
     
    return (
      <div>
        <h1>Node js Api Data Rendering </h1>
        {respone}
      </div>
    )
  }
}

export default app