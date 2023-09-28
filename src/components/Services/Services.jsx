import React from "react";
import "./services.css"

const Services = () => {
    return (
        <>
        <div className="service-bg">
            <h1 className="my-services">My <span className="span">Services</span></h1><br />
            <p className="lorem">Lorem Ipsum dolor sit amet, consectetur <br /> 
            adipiscing elit, sed do eiusmod tempor</p>
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
            
            <div className="circle"><div className="inner-arrow"><img src="src\assets\arrow-removebg-preview.png" /></div></div>
            
            <div className="card-2">
            <h2 className="box-head">Product Design</h2>
            <div className="card-bar"></div>

                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"><img src="src\assets\phone.png" className="phone"/>
                </div>
            
            </div>
            <div className="circle-2"><div className="inner-arrow2"><img src="src\assets\arrow-removebg-preview.png" /></div></div>


            <div className="card-3">
            <h2 className="box-head">Web Development</h2>
            <div className="card-bar"></div>

                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"><img src="src\assets\phone.png" className="phone"/>
                </div>
            
            </div>
            <div className="circle-3"><div className="inner-arrow3"><img src="src\assets\arrow-removebg-preview.png" /></div></div>
            
        </div>
            
            
            
        
        </div>
        
        
        
       
        </>
    )
}

export default Services