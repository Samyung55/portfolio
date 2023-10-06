import React from "react";
import "./hire.css"

const Hire = () => {
    return (
        <div className="hire">
            <div className="img-box">
                <img src="src\assets\hire.png" className="hire-img" alt="" />
            </div>
            <div className="section-2">
                <h2 className="why">
                    Why You Should <span className="hire-span">Hire Me</span><br />
                    for Your Next Projects? 
                </h2>
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                    eligendi, molestias itaque, vel nihil aliquid aspernatur <br/>
                    corrupti incidunt id doloremque est vitae consectetur?<br/>
                </p>
                <div className="achieve">
                    <div className="complete-1">
                    <h2 className="completion">600+</h2>
                    <p className="pro-completed">
                        Project Completed
                    </p>
                    </div>
                    <div className="complete-2">
                        <h2 className="completion">50+</h2>
                        <p className="industry">Industy Covered</p>
                    </div>
                </div>
                <button className="hire-btn">Hire Me</button>
            </div>
        </div>
    )
}

export default Hire