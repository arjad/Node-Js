import React from 'react'
import '../nav/nav.css'
import Logo from '../imgs/logo2.png'

function Nav()
{
    return <div className="navbar">
        
        <div className="p1">
            <img className="logo" src={Logo}></img>
            <h3 className="tittle">Web app</h3>
         </div>
        <div className="p2">
            <ul className="list">
            <li><button>Login</button></li>
            <li><button>Signup</button></li>

                <li>Group</li>
                <li>Fans</li>
                <li>Demo</li>
                <li>Info</li>
                <li>About Us</li>

            </ul>
        </div>
    </div>;
}
export default Nav