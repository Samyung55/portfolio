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
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
            </div>
        </div>
        </div>
       
        </>
    )
}

export default Services