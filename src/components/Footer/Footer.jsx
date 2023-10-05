import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="ft-heading">
                <h1>Let's Connect there</h1>
                <button className="ft-hire-me"><p>Hire Me</p> <img src="src\assets\arrow-up-right-svgrepo-com.svg" alt="See More" /></button>
                
            </div>
            <div className="footer-bar"></div>
        <div className="blocks">
            <div className="block-1">
                <div className="my-sam">
                    <img src="src\assets\s.png" />
                    <h2>Sam</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Fuga enim vel ipsum? Mollitia consequuntur nisi blanditiis magnam odio at quidem et, 
                </p>
                <div className="social-btn">
                    <div className="icon-bg">
                        <a href="#"><img src="src\assets\icons8-email-64.png" alt="behance"/></a>
                    </div>
                    <div className="icon-bg">
                        <a href="#"><img src="src\assets\icons8-email-64.png" alt="github"/></a>
                    </div>
                    <div className="icon-bg">
                        <a href="#"><img src="src\assets\icons8-email-64.png" alt="instagram"/></a>
                    </div>
                    <div className="icon-bg">
                        <a href="#"><img src="src\assets\icons8-email-64.png" alt="twitter"/></a>
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
                <p>+1-343-556-5996</p>
                <p>samyung05@gmail.com</p>
            </div>
            </div>
            <div className="block-4">
                <h3>Get the latest information</h3>
                <div>
                    <input type="email" placeholder="Email address" />
                    <button><img src="src\assets\arrow-up-right-svgrepo-com.svg" alt="icon-btn" /></button>
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