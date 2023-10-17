import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./hero.css";
import { Link } from 'react-router-dom';
import sam from "../../assets/sam.png"
import quote from "../../assets/quote-left-svgrepo-com.svg"
import star from "../../assets/icons8-star-64.png"

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
      <div id="home" className="hero">
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
          <img src={sam} alt="sam-yung" className="pic" />
          <div className="pic-bg"></div>
        </div>
        <div className="link-box">
        <a href="https://github.com/Samyung55">
          <button className="portfolio">Portfilio </button>
          </a>
          <a href="https://www.instagram.com/yungofficial5">
          <button className="hire-me">Hire Me</button>
          </a>
        </div>
      </div>
      <div className="hero-texts">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="quote"
        >
          <img src={quote} />
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
          350+
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
          src={star}
        />
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src={star}
        />
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src={star}
        />
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src={star}
        />
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src={star}
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
