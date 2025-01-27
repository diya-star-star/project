import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Hero() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register"); // Navigate to the registration page
  };

  return (
    <section
      className="hero-section position-relative text-center"
      style={{
        backgroundImage: 'url("img/heroo.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="hero-content text-center d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="hero-title display-4 fw-bold text-white">
          Start Your Healthy Lifestyle with Predetect
        </h1>
        <p className="hero-subtitle lead text-white fw-medium">
          Predict and prevent health risks like cancer, diabetes, COPD, and heart attack.
        </p>
        <Button
          variant="primary"
          className="mt-3 px-4 py-2"
          onClick={handleRegisterClick} // This triggers the navigation
        >
          Register Now
        </Button>
      </div>
    </section>
  );
}

export default Hero;
