import React, { useState } from "react";
import "./carousel.css"

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1))
    }

    const nextIndex = (currentIndex + 1) % items.length;


    return (
        <div className="carousel">
            <div className="heading">
                <h2 className="look-at">Let's Have a Look at my <br /><span className="folio">Portfolio</span></h2>
                <button className="see-more"><p>See More</p> <img src="src\assets\arrow-up-right-svgrepo-com.svg" /></button>
            </div>
            <div className="carousel-box">
            <button className="carousel-btn" onClick={prevSlide}><img src="src\assets\arrow-sm-left-svgrepo-com.svg" /></button> 
            <div className="carousel-container">
                <div className="slide">
                    <img src={items[currentIndex]} alt={`Slide ${currentIndex}`} />
                </div>
                <div className="slide">
                    <img src={items[nextIndex]} alt={`Slide ${nextIndex}`} />
                </div>
            </div>
            <button className="carousel-btn-2" onClick={nextSlide}><img src="src\assets\arrow-sm-right-svgrepo-com.svg" /></button>
            </div>

            
        </div>
    )
}

export default Carousel