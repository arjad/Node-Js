import React from 'react'
// import '../nav/nav.css'
// import logo from '../imgs/logo.jpg'
import '../cover/cover.css'

function Cover()
{
    return <div className="vid_div">
        
    <video className="vid" id="videobcg" preload="auto" autoplay="true" loop="loop" muted="muted"volume="0">
     <source src="http://ak3.picdn.net/shutterstock/videos/4207399/preview/stock-footage-man-hands-typing-on-a-computer-keyboard.mp4" type="video/mp4"/>
     <source src="movie.webm" type="video/webm"/>
          Sorry, your browser does not support HTML5 video.
    </video>

    <h1>Full Motion</h1>
    <p>
        <p>jdias duads dysafdf ysa dyas dtyuas tdysat dyuas tyduast yud sayud sya dtyasu dtyus </p>
        <p>isdus dsiudd uasdy saudy askjd aisdas duas suid yusai dyuasi dyuas dyuasy duia didfudi f usd y</p>
        <p>uais jkskdisa duasyduisa yduijdisa uuds dysagd yas dysaus dyduadsi sy dsay dd gsyuddewkn mewn</p>
        <p>fuefhf iuefh ewhdi owhd uydyu dgy dytas dhy duas dyusia ydduais dyuas </p>
    </p>
    <button className="utton" >Get Started</button>
    </div>;
}
export default Cover