import React, { useState } from "react";
import "./mobile.css";

import s from "../../assets/s.png"

const Mobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  function openInstagram() {
    window.location.href = 'https://www.instagram.com/yungofficial5';
  }


  return (
    <div className={`nav ${menuOpen ? "menu-open" : "d"}`}>
      <div className="name"> 
          <img src={s} alt="logo" />
          <h3>Sam</h3> </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-list ${menuOpen ? "show-menu" : ""}`}>
      <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
        {menuOpen && (
          <li><button onClick={openInstagram} className="nav-button">Contact Us</button></li>
        )}
      </ul>
    </div>
  );
};

export default Mobile;
