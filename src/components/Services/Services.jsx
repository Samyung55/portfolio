import React from "react";
import "./services.css"

const Services = () => {
    return (
        <>
        <div className="service-bg">
            <h1 className="my-services">My <span className="span">Services</span></h1><br />
            <p className="lorem">I'm thrilled to showcase the range of services   I offer to meet <br />your unique needs.
            With passion I bring creativity, innovation, <br />and   expertise to every project. Here's how I can help you</p>
            <div className="box"></div>
            
        <div className="service-bar"></div>
        <div className="cards">
            <div className="card-1">
            <h2 className="box-head">UI/UX Design</h2>
            <div className="card-bar"></div>

                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"><img src="src\assets\phone.png" className="phone"/>
                </div>
            
            </div>
            
            <div className="circle">
                <div className="inner-arrow">
                    <img src="src\assets\arrow-removebg-preview.png" />
                    </div>
                </div>
            
            <div className="card-2">
            <h2 className="box-head">Product Design</h2>
            <div className="card-bar"></div>

                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"><img src="src\assets\phone.png" className="phone"/>
                </div>
            
            </div>
            <div className="circle-2">
                <div className="inner-arrow">
                    <img src="src\assets\arrow-removebg-preview.png" />
                    </div>
                </div>


            <div className="card-3">
            <h2 className="box-head">Web Development</h2>
            <div className="card-bar"></div>

                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"><img src="src\assets\phone.png" className="phone"/>
                </div>
            
            </div>
            <div className="circle-3">
                <div className="inner-arrow">
                    <img src="src\assets\arrow-removebg-preview.png" />
                    </div>
                </div>
            
        </div>
            
            
            
        
        </div>
        
        
        
       
        </>
    )
}

export default Services