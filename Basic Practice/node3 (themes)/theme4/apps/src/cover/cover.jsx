import React from 'react'
import '../cover/cover.css'
import Piz from '../imgs/ok.jpg'

function cover() {
    return (
        <div className="cov">
            <div className="d1">
                <h3>Buy Anything---------------------</h3>
                <h1>Shopping</h1>
                <p>ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus ipsum semper, sit amet luctus turpis porttitor. Ut libero ante, varius quis ligula.</p>
                <button>Register </button>
            </div>
            <div className="d2">
                <p> Free Delivery</p>
                <img src={Piz}/>
            </div>
        </div>
    )
}

export default cover
