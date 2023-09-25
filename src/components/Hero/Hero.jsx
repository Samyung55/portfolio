import React from "react";
import "./hero.css"

const Hero = () => {
    return (
        <>
        <div className="hero">
            <h2 className="greeting">Hello!</h2>
            <h1>I'm <span className="sam">Sam,</span><br />Full Stack Developer</h1>
            <div className="">
            <img src="src\assets\sam.png" alt="sam-yung" className="pic" />
            <div className="pic-bg"></div>
            </div>
            <div className="link-box">
            <button className="portfolio">Portfilio </button>
            <button className="hire-me">Hire Me</button>
            </div>
        </div>
         <div className="hero-texts">
         <h2 className="quote">
            <img src="src\assets\quote-left-svgrepo-com.svg" />
         </h2>
         <p className="para">Sam's exceptional product design <br /> ensured our website success.<br />
             Highly recommended!
         </p>
         <h2 className="serve">450+</h2>
         <p className="para-2">Client Served
         </p>
     </div>
     <div className="hero-texts-2">
         
            <img src="src\assets\icons8-star-64.png" />
            <img src="src\assets\icons8-star-64.png" />
            <img src="src\assets\icons8-star-64.png" />
            <img src="src\assets\icons8-star-64.png" />
            <img src="src\assets\icons8-star-64.png" />
         <h2 className="serve-2">5 Years</h2>
         <p className="para-3">Experts
         </p>
         <div className="bar"></div>
     </div>
    
     </>
    )
}

export default Hero