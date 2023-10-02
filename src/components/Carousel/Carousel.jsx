import React, { useState, useEffect } from "react";
import "./carousel.css";

const Carousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const currentProject = projects[currentIndex];

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
    <div className="carousel">
      <div className="heading">
        <h2 className="look-at">Let's Have a Look at my <span className="folio">Portfolio</span></h2>
        <button className="see-more"><p>See More</p> <img src="src\assets\arrow-up-right-svgrepo-com.svg" alt="See More" /></button>
      </div>
      <div className="carousel-box">
        <button className="carousel-btn" onClick={prevSlide}><img src="src\assets\arrow-sm-left-svgrepo-com.svg" alt="Previous" /></button>
        
        <div className="carousel-container">
          <div className="slide">
            <img src={currentProject.images[0]} alt={`Slide ${currentIndex}`} />
          </div>
          <div className="slide">
            <img src={currentProject.images[1]} alt={`Slide ${currentIndex + 1}`} />
          </div>
        </div>
         <button className="carousel-btn-2" onClick={nextSlide}><img src="src\assets\arrow-sm-right-svgrepo-com.svg" alt="Next" /></button>
       
      </div>
      <div className="project-info">
        <div className="tags">
          <h3>{currentProject.tags[0]}</h3>
          <h3>{currentProject.tags[1]}</h3>
          <h3>{currentProject.tags[2]}</h3>
        </div>
        <div className="project-title">
          {currentProject.name}
        </div>
        <p className="project-description">
          {currentProject.description}
        </p>
      </div>
      <div className="mobile-btn">
      {isMobile && ( // Render buttons only on mobile
          <div className="carousel-btn-3" onClick={prevSlide}><img src="src\assets\arrow-sm-left-svgrepo-com.svg" alt="Next" /></div>
        )}
         {isMobile && ( // Render buttons only on mobile
          <div className="carousel-btn-4" onClick={nextSlide}><img src="src\assets\arrow-sm-right-svgrepo-com.svg" alt="Next" /></div>
        )}
        </div>
    </div>
  );
};

export default Carousel;
