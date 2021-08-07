import React, { Component } from 'react'
import axios from "axios"

export class render extends Component {

state={
    render:[]
}

buttonclick=()=>{

    alert("data get")
    axios.get("http://localhost:4000/login").then((res)=>{
        console.log(res.data);
        this.setState({
            render:res.data
        })
    })
}


    render() {
     console.log(this.state.render, "all data");

     const respone = this.state.render.map((obj,i)=>{
        return(
            <div key={i}>
                <h1>{obj.CountryName}</h1>
            </div>
        )
     })
        return (
            <div>
                <h1> Data render</h1>
                <button style={{height:"40px", width:"400px"}}  onClick={this.buttonclick}>Click </button>
                {respone}
            </div>
        )
    }
}

export default render
