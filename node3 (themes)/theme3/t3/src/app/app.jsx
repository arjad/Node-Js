import React, { Component } from 'react'
import axios from "axios"
import Nav from '../app/nav/nav'
import '../app/app.css'

export class app extends Component {
 
  state=
  {
    data:[], //empty array
  } 
  componentDidMount(){

    axios.get('http://localhost:4000/').then((res)=>{
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
          <h1>{obj.date}</h1>
          <h3>{obj.month}</h3>
          <h4>{obj.year}</h4>

          <p>{obj.place}</p>
          <pre><i class="fas fa-map-marker-alt"></i>{obj.country}</pre>
          <button><i class="far fa-check-circle"></i>{obj.available}</button>
          
      </div>
     )
   })
    return (
      <div className="grand">
        <Nav/>
        <h1>Our Best Trips</h1>
        {response}

      </div>
    )
  }
}

export default app