import React from "react";
import "./desktop.css"

const Desktop = () => {
  return (
    <div className="nav">
      <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Blogs</a></li>
        <li><button className="nav-button">Contact Us</button></li>
      </ul>
    </div>
  );
};

export default Desktop;
