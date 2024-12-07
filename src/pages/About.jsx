import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
function About() {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <div
        className="hero-section text-center text-light py-5"
        style={{
          backgroundColor: '#0077b6',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="display-4 fw-bold">About Predetect</h1>
        <p className="lead mt-3">
          Empowering early diagnosis of critical diseases for a healthier future.
        </p>
      </div>

      {/* About Section */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold">Our Mission</h2>
            <p className="mt-3">
              At Predetect, our mission is to revolutionize the healthcare landscape by empowering individuals with early diagnostic tools for critical diseases like cancer, diabetes, COPD, and heart disease. We aim to bridge the gap between healthcare awareness and accessibility by creating an easy-to-use platform that encourages users to take proactive steps toward their health.

              We believe that knowledge is the first step toward prevention, and early detection saves lives. By offering advanced prediction capabilities, our platform enables users to identify potential risks based on their inputs and promotes timely medical consultations. Our goal is to foster a culture of health-conscious living where people are equipped with the right information at the right time to make informed decisions.

              Through innovative technology, robust security measures, and a user-centric approach, we are committed to ensuring that every individual has access to tools that empower them to take control of their well-being. Together, we aspire to build a future where no life is lost to preventable diseases due to lack of awareness or delayed intervention.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="mission.jpg"
              alt="Mission Illustration"
              className="img-fluid rounded"
              style={{ width: '100vw', height: '700px' }}
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">What Makes Predetect Unique</h2>
        <div className="row text-center">
          <div className="col-md-3">
            <div className="card p-3 border-0 shadow">
              <div className="card-body">
                <h5 className="card-title">Early Prediction</h5>
                <p className="card-text">
                  Helps in early detection of critical diseases for timely action.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 " >
            <div className="card p-3 border-0 shadow">
              <div className="card-body" >
                <h5 className="card-title">User-Friendly Interface</h5>
                <p className="card-text">
                  Intuitive and accessible design for users of all ages.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 border-0 shadow">
              <div className="card-body">
                <h5 className="card-title">Multiple Diseases</h5>
                <p className="card-text">
                  Supports predictions for cancer, diabetes, COPD, and heart attacks.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 border-0 shadow">
              <div className="card-body">
                <h5 className="card-title">Secure</h5>
                <p className="card-text">
                  Ensures your personal health data is safe and confidential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">Meet the Team</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card border-0">
              <img
                src="ca.jpg"
                className="card-img-top rounded-circle mx-auto mt-3"
                alt="Team Member 1"
                style={{ width: '120px', height: '120px' }}
              />
              <div className="card-body">
                <h5 className="card-title">Member 1</h5>
                <p className="card-text">Frontend Developer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0">
              <img
                src="hero.jpg"
                className="card-img-top rounded-circle mx-auto mt-3"
                alt="Team Member 2"
                style={{ width: '120px', height: '120px' }}
              />
              <div className="card-body">
                <h5 className="card-title">Member 2</h5>
                <p className="card-text">Backend Developer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0">
              <img
                src="mission.jpg"
                className="card-img-top rounded-circle mx-auto mt-3"
                alt="Team Member 3"
                style={{ width: '120px', height: '120px' }}
              />
              <div className="card-body">
                <h5 className="card-title">Member 3</h5>
                <p className="card-text">Data Scientist</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
