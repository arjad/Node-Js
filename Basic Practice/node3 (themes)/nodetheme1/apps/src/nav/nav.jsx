import React from 'react'
import '../nav/nav.css'
import logo from '../imgs/logo.jpg'

function Nav()
{
    return <div className="navbar">
        
         <h3>    Full Motion Private Company</h3>
        <img className="logo" src={logo}></img>
        
    </div>;
}
export default Nav