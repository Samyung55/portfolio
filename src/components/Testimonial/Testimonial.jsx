import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./testimonial.css"

const Testimonial = ({ clients }) => {
    const [prevIndex, setPrevIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [nextIndex, setNextIndex] = useState(2);
    const [isMobile, setIsMobile] = useState(false);
  
    const nextSlide = () => {
      setPrevIndex((prevIndex) => (prevIndex === clients.length - 1 ? 0 : prevIndex + 1));
      setCurrentIndex((prevIndex) => (prevIndex === clients.length - 1 ? 0 : prevIndex + 1));
      setNextIndex((prevIndex) => (prevIndex === clients.length - 1 ? 0 : prevIndex + 1));
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? clients.length - 1 : prevIndex - 1));
      setPrevIndex((prevIndex) => (prevIndex === 0 ? clients.length - 1 : prevIndex - 1));
      setNextIndex((prevIndex) => (prevIndex === 0 ? clients.length - 1 : prevIndex - 1));
    };
  
    const prevClient = clients[prevIndex];
    const currentClient = clients[currentIndex];
    const nextClient = clients[nextIndex];

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
      <motion.h1
        className="testimonial"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Testimonials that Speak to <span className="result">My Results</span>
      </motion.h1>
      <motion.p
        className="test-p"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        Read what my clients have to say about their experiences working with me. 
        Their words speak to the quality, 
        innovation, and dedication I bring to every development project. 
      </motion.p>
    </div>
        <div className="testing-array">
        
        <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: isMobile ? 0 : -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: isMobile ? 0 : -50, opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
        <div className="test-array-1">
            <div className="stars">
            {prevClient.starimg}
                <h3>{prevClient.stars}</h3>
            </div>
            <div className="test-para">
                {prevClient.comment}
            </div>
            <div className="client-info">
                <div className="client-img">
                    {prevClient.clientimg}
                </div>
                <div className="client-name">
                    <h3>{prevClient.name}</h3>
                    <p>{prevClient.company}</p>
                </div>
                <div className="test-quote">
                    <img src="src\assets\icons8-quote-32.png"></img>
                </div>
            </div>
        </div>
        </motion.div>
        </AnimatePresence>
        
        <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: isMobile ? 0 : 20, opacity: 0.3 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: isMobile ? 0 : -20, opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
        <div className="test-array-2">
            <div className="stars">
            {currentClient.starimg}
                <h3>{currentClient.stars}</h3>
            </div>
            <div className="test-para">
                {currentClient.comment}
            </div>
            <div className="client-info">
                <div className="client-img">
                    {currentClient.clientimg}
                </div>
                <div className="client-name">
                    <h3>{currentClient.name}</h3>
                    <p>{currentClient.company}</p>
                </div>
                <div className="test-quote">
                    <img src="src\assets\icons8-quote-32.png"></img>
                </div>
            </div>
        </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
  <motion.div
    key={prevIndex}
    initial={{ x: isMobile ? 0 : 200, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: isMobile ? 0 : 20, opacity: 0 }}
    transition={{ duration: 0.7 }}
  >
        <div className="test-array-3">
            <div className="stars">
            {nextClient.starimg}
                <h3>{nextClient.stars}</h3>
            </div>
            <div className="test-para">
                {nextClient.comment}
            </div>
            <div className="client-info">
                <div className="client-img">
                    {nextClient.clientimg}
                </div>
                <div className="client-name">
                    <h3>{nextClient.name}</h3>
                    <p>{nextClient.company}</p>
                </div>
                <div className="test-quote">
                    <img src="src\assets\icons8-quote-32.png"></img>
                </div>
            </div>
        </div>
        </motion.div>
        </AnimatePresence>
        </div>
        <div className="test-buttons">
        <motion.button 
        className="test-btn"
        onClick={prevSlide}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}><img src="src\assets\arrow-sm-left-svgrepo-com.svg" alt="Previous" /></motion.button>
        <motion.button className="test-btn-2" onClick={nextSlide}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        ><img src="src\assets\arrow-sm-right-svgrepo-com.svg" alt="Next" /></motion.button>
        </div>
    </div>
    )
}

export default Testimonial 


        
