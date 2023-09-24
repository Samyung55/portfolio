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
        </div>
         <div className="hero-texts">
         <h2 className="quote">"</h2>
         <p className="para">Sam's exceptional product design <br /> ensured our website success.<br />
             Highly recommended!
         </p>
         <h2 className="serve">450+</h2>
         <p className="para-2">Client Served
         </p>
     </div>
     </>
    )
}

export default Hero