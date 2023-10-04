import React from "react";
import "./newsletter.css"

const Newsletter = () => {
    return (
        <div className="newsletter">
            <h1>Have An Awesome Project Idea?  
                <span> Let's Discuss</span>
            </h1>

            <div className="email-box">
                <div className="icon-box">
                    <div className="icon-img">
                    <img src="src\assets\icons8-email-64.png" alt="email-icon"/>
                    </div>
                </div>
                <input type="email" placeholder="Enter Email Address" required />
                <button className="booking">Book Call</button>
            </div>
            <div className="achievements">
                <div className="achieve-1">
                    <img src="" alt="" />
                    <p>4.9/5 Average Ratings</p>
                </div>
                <div className="achieve-1">
                    <img src="" alt="" />
                    <p>25+ Winning Awards</p>
                </div>
                <div className="achieve-1">
                    <img src="" alt="" />
                    <p>Certified Designer & Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter