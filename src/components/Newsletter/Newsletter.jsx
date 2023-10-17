import React, {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./newsletter.css";
import { useForm, ValidationError } from '@formspree/react';
import mail from "../../assets/icons8-email-64.png"
import approved from "../../assets/icons8-approved-32.png"


const Newsletter = () => {
    
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

    const [handleSubmit] = useForm("xpzgkkna");

  const handleButtonClick = () => {
    setIsSubmitted(handleSubmit);
  };


    
    
    
  const handleBookCall = () => {
    fetch("/send-notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Notification email sent successfully!");
        } else {
          alert("Error sending notification email.");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Error sending notification email.");
      });
  };


  return (

    <div className="newsletter">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Have An Awesome Project Idea? <span> Let's Discuss</span>
      </motion.h1>

      <motion.div
        className="email-box"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.div
          className="icon-box"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            className="icon-img"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <img
              src={mail}
              alt="email-icon"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            />
          </motion.div>
        </motion.div>
        <motion.input
          type="email"
          placeholder="Enter Email Address"
          required
          value={email}
          onChange={handleEmailChange}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        {isSubmitted ? (
        <p>Thanks for joining!</p>
      ) : (
        <motion.button
          className="booking"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          onClick={handleButtonClick}
        >
          Book Call
        </motion.button>
      )}
      </motion.div>

      <motion.div
        className="achievements"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.div
          className="achieve-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <img src={approved} alt="" />
          <p>4.9/5 Average Ratings</p>
        </motion.div>
        <motion.div
          className="achieve-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <img src={approved} alt="" />
          <p>25+ Winning Awards</p>
        </motion.div>
        <motion.div
          className="achieve-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <img src={approved} alt="" />
          <p>Certified Designer & Developer</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="work-lists"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <ul>
            <li>
              <h3>Design</h3>
            </li>
            <li>
              <h3>App Design</h3>
            </li>
            <li>
              <h3>Backend</h3>
            </li>
            <li>
              <h3>Frontend</h3>
            </li>
            <li>
              <h3>Wireframe</h3>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Newsletter;
