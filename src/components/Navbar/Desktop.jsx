import React from "react";
import "./desktop.css"

const Desktop = () => {
  
    return (
      <div className="nav-desktop">
          <div className="naming">
          <img src="src\assets\s.png" alt="logo" />
          <h3>Sam</h3>
          </div>
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
