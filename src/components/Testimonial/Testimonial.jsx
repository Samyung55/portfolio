import React, { useState, useEffect } from "react";
import "./testimonial.css"

const Testimonial = ({ clients }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === clients.length - 1 ? 0 : prevIndex + 1));
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? clients.length - 1 : prevIndex - 1));
    };
  
    const currentClient = clients[currentIndex];

    useEffect(() => {
      // Check if the screen width is less than or equal to 767px (typical mobile width)
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 767);
      };
  
      // Listen for window resize events
      window.addEventListener("resize", handleResize);
  
      // Initial check on component mount
      handleResize();
  
      // Cleanup the event listener
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

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
            {currentClient.starimg}
                <h3>{currentClient.stars}</h3>
            </div>
            <div className="test-para">
                {currentClient.comment}
            </div>
            <div className="client-info">
                <div className="client-img">
                    <img src="src\assets\clients\henry.png"></img>
                </div>
                <div className="client-name">
                    <h3>{currentClient.name}</h3>
                    <p>{currentClient.company}</p>
                </div>
                <div className="quote">
                    <img src="src\assets\icons8-quote-32.png"></img>
                </div>
            </div>
        </div>
        <div className="test-buttons">
        <button className="test-btn" onClick={prevSlide}><img src="src\assets\arrow-sm-left-svgrepo-com.svg" alt="Previous" /></button>
        <button className="test-btn-2" onClick={nextSlide}><img src="src\assets\arrow-sm-right-svgrepo-com.svg" alt="Next" /></button>
        </div>
    </div>
    )
}

export default Testimonial 