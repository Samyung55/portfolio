import React from "react";
import "./services.css"
import phone from "../../assets/phone.png"
import foodimg from "../../assets/projects/food.png"
import fruitimg from "../../assets/projects/fruit-1.png"
import circlearrow from "../../assets/arrow-removebg-preview.png"

const Services = () => {
    return (
        <>
        <div id="services" className="service-bg">
            <h1 className="my-services">My <span className="span">Services</span></h1>
            <p className="lorem">I'm thrilled to showcase the range of services   I offer to meetyour unique needs.
            With passion I bring creativity, innovation, and   expertise to every project. Here's how I can help you</p>
            <div className="box"></div>
            
        <div className="service-bar"></div>

        <div className="cards">
            <div className="card-1">
            <h2 className="box-head">UI/UX Design</h2>
            <div className="card-bar"></div>

                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"><img src={phone} className="phone"/>
                </div>
            
            </div>
            <a href="https://www.behance.net/yungmdl">
            <div className="circle">
                <div className="inner-arrow">
                    <img src={circlearrow} />
                    </div>
                </div>
            </a>
            <div className="card-2">
            <h2 className="box-head">Product Design</h2>
            <div className="card-bar"></div>

                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"><img src={foodimg} className="phone"/>
                </div>
            
            </div>
            <a href="https://www.behance.net/yungmdl">
            <div className="circle-2">
                <div className="inner-arrow">
                    <img src={circlearrow} />
                    </div>
                </div>
                </a>
                
            <div className="card-3">
            <h2 className="box-head">App Development</h2>
            <div className="card-bar"></div>

                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"><img src={fruitimg} className="phone"/>
                </div>
            
            </div>
            <a href="https://github.com/Samyung55">
            <div className="circle-3">
                <div className="inner-arrow">
                    <img src={circlearrow} />
                    </div>
                </div>
            </a>
        </div>
            
            
            
        
        </div>
        
        
        
       
        </>
    )
}

export default Services