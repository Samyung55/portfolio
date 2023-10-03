import React from "react";
import "./testimonial.css"

const Testimonial = () => {
    return (
        <div className="testimonials">
        <div className="test-head">
            <h1 className="testimonial">
                Testimonials that Speak to <span className="result">My Results</span> 
            </h1>
            <p className="test-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                eligendi, molestias itaque, vel nihil aliquid aspernatur
                corrupti incidunt id doloremque est vitae consectetur?
            </p>
        </div>
        <div className="test-array">
            <div className="stars">
                <img src="src\assets\icons8-star-64.png"></img>
                <img src="src\assets\icons8-star-64.png"></img>
                <img src="src\assets\icons8-star-64.png"></img>
                <img src="src\assets\icons8-star-64.png"></img>
                <img src="src\assets\icons8-star-64.png"></img>
                <h3>5.0</h3>
            </div>
            <div className="test-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Reprehenderit unde veritatis libero dolorem provident iure distinctio, 
                excepturi ipsa hic aut quidem minima ut at. 
                Nesciunt dolor officia iste ea vero.
            </div>
            <div className="client-info">
                <div className="client-img">
                    <img src=""></img>
                </div>
                <div className="client-name">
                    <h3>Henry, Arthur</h3>
                    <p>CEO, Food Express</p>
                </div>
                <div className="quote">
                    <img src="src\assets\icons8-quote-32.png"></img>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Testimonial