import React from "react";
import "./desktop.css"

const Desktop = () => {
  
    return (
      <div className="nav-desktop">
        
        <div class="image-container">
        <img src="src\assets\s.png" alt="logo" />
          </div>
          <div className="naming">
          Sam</div>
          <ul className="nav-listing">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        <button className="nav-button-desk">Contact</button>
      </div>
    );
  }
  


export default Desktop;
