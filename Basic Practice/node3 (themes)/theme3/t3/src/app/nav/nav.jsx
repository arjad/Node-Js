import React from 'react'
import '../nav/nav.css'
import Background from '../img/images.jpg'

function nav() {
    return (
        <div className="navbar" style={{ backgroundImage: `linear-gradient(to bottom, rgba(1, 98, 147, 0.3), rgba(2, 44, 97, 0.6)),url(${Background})` }}>

            <div className="top">
                <h2><i class="fas fa-bus"></i>Travellers</h2>
                <ul>
                    <li>Home       </li>
                    <li>Features   </li>
                    <li>About Us   </li>
                    <li>Contact Us </li>
                </ul>
            </div>
            <div className="cover">
                <h1>You can TRAVEL anywhere you want</h1>
            </div>

            
        </div>
    )
}

export default nav