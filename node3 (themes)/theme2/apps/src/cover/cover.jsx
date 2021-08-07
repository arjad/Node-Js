import React from 'react'
import '../cover/cover.css'
import Piz from '../imgs/pizza.png'


function cover() {
    return (
        <div className="cov">
            <div className="d1">
                <h3>HAPPY HOUR SPECIAL</h3>
                <h1>PIZZA BAR</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus ipsum semper, sit amet luctus turpis porttitor. Ut libero ante, varius quis ligula.</p>
                <button>Order Online</button>
            </div>
            <div className="d2">
                <p> 14$ only</p>
                <img src={Piz}/>
            </div>
        </div>
    )
}

export default cover
