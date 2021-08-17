import React, { Component } from 'react'
import axios from "axios"
import Nav from '../nav/nav'
import Cover from '../cover/cover'
import Body from '../body/body'
import '../app/app.css'
import Foot from '../foot/foot'

export class app extends Component {
 
  state=
  {
    data:[], //empty array
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
   const response =this.state.data.map((obj,i)=>{
     return (
      <div className="card">
        <img src={`/img/${obj.img}`}></img>
       <h3>{obj.headline} </h3>
       <p>{obj.desc}</p>
       <button> {obj.btn} </button>
      </div>
     )
   })
    return (
      <div>
        <Nav/>
        <Cover/>
        <div className="card_d">

        {response}
        </div>

        <Foot/>
      </div>
    )
  }
}

export default app