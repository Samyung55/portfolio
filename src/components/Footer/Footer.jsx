import React, {useState} from "react";
import s from "../../assets/s.png"
import arrowUp from "../../assets/arrow-up-right-svgrepo-com.svg"
import twitter from "../../assets/socials/icons8-twitter.png"
import instagram from "../../assets/socials/icons8-instagram.png"
import behance from "../../assets/socials/icons8-behance-32.png"
import github from "../../assets/socials/icons8-github-64.png" 
import sendimg from "../../assets/socials/icons8-send-48.png" 
import "./footer.css"

const Footer = () => {
    const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
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
  function openInstagram() {
    window.location.href = 'https://www.instagram.com/yungofficial5';
  }

    return (
        <div className="footer">
            <div className="ft-heading">
                <h1>Let's Connect there</h1>
                <button onClick={openInstagram} className="ft-hire-me"><p>Hire Me</p> <img src={arrowUp} alt="See More" /></button>
                
            </div>
            <div className="footer-bar"></div>
        <div className="blocks">
            <div className="block-1">
                <div className="my-sam">
                    <img src={s} />
                    <h2>Sam</h2>
                </div>
                <p>I'm dedicated to delivering excellence in every project. Your satisfaction is my priority. Don't hesitate to reach out and experience top-notch service. Let's turn your ideas into reality!
                </p>
                <div className="social-btn">
                    <div className="icon-bg">
                        <a href="https://www.behance.net/yungmdl"><img src={behance} alt="behance"/></a>
                    </div>
                    <div className="icon-bg">
                        <a href="https://github.com/Samyung55"><img src={github} alt="github"/></a>
                    </div>
                    <div className="icon-bg">
                        <a href="https://www.instagram.com/yungofficial5/"><img src={instagram} alt="instagram"/></a>
                    </div>
                    <div className="icon-bg">
                        <a href="#"><img src={twitter} alt="twitter"/></a>
                    </div>
                </div>
            </div>
            <div className="blocks-2">
            <div className="block-2">
                <h3>Navigation</h3>
                <div className="page-nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Resume</a></li>
                        <li><a href="#">Project</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="block-3">
                <h3>Contact</h3>
                <p>+1-731-474-1192 (Whatsapp)</p>
                <p>samyung05@gmail.com</p>
            </div>
            </div>
            <div className="block-4">
                <h3>Get the latest information</h3>
                <div>
                    <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={handleEmailChange}
                    />
                    <button onClick={handleSubscribe}>
                    <img src={sendimg} alt="icon-btn" />
                    </button>
                </div>
        </div>
            </div>
            <div className="bottom-bar">
                    <div className="footer-bar"></div>
                    <div className="copyrights">
                        <p>Copyright &copy; 2023 <span> Sam. </span> All Rights Reserved</p>
                        <p className="terms">User Terms & Conditions | Privacy Policy</p>
                    </div>
                </div>
            </div>
    )
}

export default Footer