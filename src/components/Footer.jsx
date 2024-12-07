import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row text-center">
          {/* Column 1: Logo and About */}
          <div className="col-md-3 d-flex flex-column align-items-center">
            <h5>
              <span style={{ color: "#0077b6" }}>PRE</span>
              <span style={{ color: "white" }}>detect</span>
            </h5>
            <p className="text-center">
              Our website helps you predict four major diseases: Cancer, Diabetes, COPD, and Heart Attack. Take control of your health with simple and effective tools.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="col-md-3 d-flex flex-column align-items-center">
            <h5 style={{color:'#0077b6'}}>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
              <li>
                <a href="/prediction" className="text-light text-decoration-none">
                  Prediction
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="col-md-3 d-flex flex-column align-items-center">
            <h5 style={{color:'#0077b6'}}>Contact Us</h5>
            <p className="mb-1">Email: ADS@predetect.com</p>
            <p className="mb-1">Phone: +977 98000000000</p>
            <p>Address: PatanDhoka,Patan, Lalitpur</p>
          </div>

          {/* Column 4: Follow Us */}
          <div className="col-md-3 d-flex flex-column align-items-center">
            <h5 style={{color:'#0077b6'}}>Follow Us</h5>
            <a href="https://facebook.com" className="text-light text-decoration-none mb-1">
              <i className="bi bi-facebook me-2"></i>Facebook
            </a>
            <a href="https://twitter.com" className="text-light text-decoration-none mb-1">
              <i className="bi bi-twitter me-2"></i>Twitter
            </a>
            <a href="https://instagram.com" className="text-light text-decoration-none">
              <i className="bi bi-instagram me-2"></i>Instagram
            </a>
          </div>
        </div>
        <hr className="bg-light" />
        <p className="text-center mb-0">© 2024 PREdetect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
