import React from "react";
import "./desktop.css"
import s from "../../assets/s.png"

const Desktop = () => {
  
  function openInstagram() {
    window.location.href = 'https://www.instagram.com/yungofficial5';
  }

    return (
      <div className="nav-desktop">
          <div className="naming">
          <img src={s} alt="logo" />
          <h3>Sam</h3>
          </div>
          <ul className="nav-listing">
            <li><a href="#">Home</a></li>
            <li><a href="#work">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        <button onClick={openInstagram} className="nav-button-desk">Resume</button>
      </div>
    );
  }
  


export default Desktop;
