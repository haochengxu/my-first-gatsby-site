import React from 'react'
import Link from "gatsby-link"
import '../css/index.css'
export default () => 

<div className="body-container">
  <div className="top">
    <span id="social">
      <h1>徐浩程</h1>
    </span>
  </div>
   <p className="slogan" style={{color: `#0B409C`}}>Life is too short to worry about anything.</p>
   {/* <img src="http://lorempixel.com/400/300/" /> */}
   <br />
   <div className="link">
    <Link to="/posts/listing">Blog</Link>
    <br />
    <Link to="/projects/counter">Project</Link>
   </div>
</div>