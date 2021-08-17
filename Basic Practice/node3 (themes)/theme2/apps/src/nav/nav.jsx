import React from 'react'
import '../nav/nav.css'
import Logo from '../imgs/logo2.png'

function Nav()
{
    return <div className="navbar">
        
        <div className="p1">
            <img className="logo" src={Logo}></img>
            <h3 className="tittle">DinerM4</h3>
         </div>
        <div className="p2">
            <ul className="list">
                <li>Home</li>
                <li>Features</li>
                <li>Live Demo</li>
                <li><button>Buy Now</button></li>
            </ul>
        </div>
    </div>;
}
export default Nav