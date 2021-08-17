import React from 'react'
import '../cover/cover.css'
import Piz from '../imgs/ok.jpg'

function cover() {
    return (
        <div className="cov">
            
            <div className="d2">
                <p> Discount offer</p>
                <img src={Piz}/>
            </div>
            <div className="d1">
                <h1>Websites </h1>
                <h3>For You Only</h3>
                <p>Lipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus ipsum semper, sit amet luctus turpis porttitor. Ut libero ante, varius quis ligula.</p>
                <button>Login </button>
            </div>
        </div>
    )
}

export default cover
