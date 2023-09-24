import React, { useState } from "react";
import "./mobile.css";

const Mobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`nav ${menuOpen ? "menu-open" : "d"}`}>
      <div className="name"> 
          <img src="src\assets\s.png" alt="logo" />
          <h3>Sam</h3> </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-list ${menuOpen ? "show-menu" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Blogs</a></li>
        {menuOpen && (
          <li><button className="nav-button">Contact Us</button></li>
        )}
      </ul>
    </div>
  );
};

export default Mobile;
