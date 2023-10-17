import React from "react";
import hireimg from "../../assets/hire.png"
import "./hire.css"

const Hire = () => {
    return (
        <div className="hire">
            <div className="img-box">
                <img src={hireimg} className="hire-img" alt="" />
            </div>
            <div className="section-2">
                <h2 className="why">
                    Why You Should <span className="hire-span">Hire Me</span><br />
                    for Your Next Projects? 
                </h2>
                <p className="description">
                I bring a proven track record of delivering results. 
                I thrive on solving complex challenges and am constantly adapting to embrace new technologies and innovations. 
                As an effective team player and communicator, 
                I'm ready to collaborate with you to create something extraordinary. 
                Let's work together to achieve your goals.<br/>
                </p>
                <div className="achieve">
                    <div className="complete-1">
                    <h2 className="completion">120+</h2>
                    <p className="pro-completed">
                        Project Completed
                    </p>
                    </div>
                    <div className="complete-2">
                        <h2 className="completion">25+</h2>
                        <p className="industry">Industry Covered</p>
                    </div>
                </div>
                <a href="https://www.instagram.com/yungofficial5/">
                <button className="hire-btn">Hire Me</button></a>
            </div>
        </div>
    )
}

export default Hire