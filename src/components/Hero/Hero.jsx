import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./hero.css";

const Hero = () => {
  const jobTitles = [
    'Full Stack Developer',
    'Senior Visual Designer',
    'Product Designer'
    // Add more job titles here
  ];
  const [currentIndex, setCurrentIndex] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 5000); // Change the duration as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="hero">
      <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="greeting"
        >
          Hello!
        </motion.h2>
        <h1>
          I'm <span className="sam">Sam,</span> <br />
          <AnimatePresence mode="wait">
            <motion.span
              key={jobTitles[currentIndex]}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20, transition: { duration: 1.5 } }}
              transition={{ type: 'spring', damping: 10, stiffness: 70 }}
            >
              {jobTitles[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </h1>

        <div className="">
          <img src="src\assets\sam.png" alt="sam-yung" className="pic" />
          <div className="pic-bg"></div>
        </div>
        <div className="link-box">
          <button className="portfolio">Portfilio </button>
          <button className="hire-me">Hire Me</button>
        </div>
      </div>
      <div className="hero-texts">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="quote"
        >
          <img src="src\assets\quote-left-svgrepo-com.svg" />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="para"
        >
          Sam's exceptional product design <br /> ensured our website success. <br />
          Highly recommended!
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="serve"
        >
          450+
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="para-2"
        >
          Client Served
        </motion.p>
      </div>
      <div className="hero-texts-2">
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src="src\assets\icons8-star-64.png"
        />
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src="src\assets\icons8-star-64.png"
        />
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src="src\assets\icons8-star-64.png"
        />
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src="src\assets\icons8-star-64.png"
        />
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src="src\assets\icons8-star-64.png"
        />
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="serve-2"
        >
          5 Years
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="para-3"
        >
          Experts
        </motion.p>
        <div className="bar"></div>
      </div>
    </>
  );
};

export default Hero;
