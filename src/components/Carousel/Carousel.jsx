import React, { useState } from "react";
import "./carousel.css"

const Carousel = ({ project }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === project.length - 1 ? 0 : prevIndex + 1));
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? project.length - 1 : prevIndex - 1))
    }

    const nextIndex = (currentIndex + 1) % project.length;


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
                    <img src={project.images[currentIndex]} alt={`Slide ${currentIndex}`} />
                </div>
                <div className="slide">
                    <img src={project.images[nextIndex]} alt={`Slide ${nextIndex}`} />
                </div>
            </div>
            <button className="carousel-btn-2" onClick={nextSlide}><img src="src\assets\arrow-sm-right-svgrepo-com.svg" /></button>
            </div>
            <div className="project-info">
            <div className="tags">
                <h3>UI/UX Design</h3>
                <h3>Landing Page</h3>
                <h3>Wireframe</h3>
            </div>
            <div className="project-title">
                Food Express - Food Delivery Solution
            </div>
            <p className="project-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Consequuntur quis officia modi expedita soluta repellat, 
                possimus provident eum animi 
                necessitatibus nostrum amet non vitae, molestias velit eligendi ab ipsum sint.
            </p>
            </div>
        </div>
    )
}

export default Carousel