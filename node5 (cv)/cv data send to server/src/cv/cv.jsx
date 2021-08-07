import React from 'react'
import Img from '../img/nav.PNG'
import '../cv/cv.css'



function cv({prop1}) 
{
    return (
        <div>
           <div className="cvform">
            <div className="nav" style={{backgroundImage: "url(" + Img + ")"}}>      </div>
            <div className="inp">
        <h2 className="col">Basic Info : </h2>

        <div className="i">
          <h3>First Name:</h3>
          <p type="text" ></p>
        </div>

        <div className="i">
          <h3>Last Name:</h3>
          <p type="text" ></p>
        </div>

        <div className="i">
          <h3>Email:</h3>
          <p type="text" ></p>
        </div>

        <div className="i">
          <h3>Phone No:</h3>
          <p type="text" ></p>
        </div>

        <div className="i">
          <h3>House Address:</h3>
          <p type="text" ></p>
        </div>

        <h2 className="col">Work Experience : </h2>

        <div className="i">
          <h3>Company Name:</h3>
          <p type="text"  ></p>
        </div>

        <div className="i">
          <h3>Previous Position:</h3>
          <p type="text"  ></p>
        </div>

        <div className="i">
          <h3>Years of Working:</h3>
          <p type="text" ></p>
        </div>

        <h2 className="col">Education : </h2>

        <div className="i">
          <h3>School:</h3>
          <p type="text" ></p>
        </div>

        <div className="i">
          <h3>School Marks:</h3>
          <p type="text" ></p>
        </div>

        <div className="i">
          <h3>College:</h3>
          <p type="text" ></p>
        </div>

        <div className="i">
          <h3>College Marks:</h3>
          <p type="text" ></p>
        </div>

        <div className="i">
          <h3>University:</h3>
          <p type="text" ></p>
        </div>

        <div className="i">
          <h3>University GPA:</h3>
          <p type="text" ></p>
        </div>

      
        <div className="i">
          <h3>Extra Acheivments:</h3>
          <p type="text"></p>
        </div>

      </div>

      <button onClick={prop1}>Prop use</button>
    </div>

        </div>
    )
}

export default cv