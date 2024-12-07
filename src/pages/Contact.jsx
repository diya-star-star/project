import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      {/* Include the Header Component */}
      <Header />

      {/* Contact Section using Flexbox */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          {/* Contact Information - First Column */}
          <div className="contact-info w-100 w-md-45 mb-4 mb-md-0 d-flex align-items-center" style={{marginLeft:'3vw'}}>
            <div>
              <h4 className="mb-4">Our Contact Information</h4>
              <ul className="list-unstyled">
                <li>
                  <strong>Email:</strong> contact@predetect.com
                </li>
                <li>
                  <strong>Phone:</strong> +977 9800000000
                </li>
                <li>
                  <strong>Address:</strong> PatanDhoka, Patan, Lalitpur
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form - Second Column */}
          <div className="contact-form w-100 w-md-45">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Include the Footer Component */}
      <Footer />
    </div>
  );
}

export default Contact;
