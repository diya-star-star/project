import React, { useState } from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap'; // Import Alert for error messages

function Hero() {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [username, setUsername] = useState(''); // State for the username input
  const [email, setEmail] = useState(''); // State for the email input
  const [password, setPassword] = useState(''); // State for the password input
  const [confirmPassword, setConfirmPassword] = useState(''); // State for the confirm password input
  const [error, setError] = useState(''); // State for error messages

  const handleRegisterClick = () => {
    setShowModal(true); // Show the modal when the register button is clicked
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
    setError(''); // Reset error message when modal is closed
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate inputs
    if (!username) {
      setError('Username cannot be empty.');
      return;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Clear error message and proceed with registration logic
    setError('');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Close modal after submission
    setShowModal(false);
  };

  return (
    <section
      className="hero-section position-relative text-center"
      style={{
        backgroundImage: 'url("img/heroo.jpg")', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
     <div className="hero-content text-center d-flex flex-column justify-content-center align-items-center vh-100 ">
  <h1 className="hero-title display-4 fw-bold text-white">
    Start Your Healthy Lifestyle with Predetect
  </h1>
  <p className="hero-subtitle lead text-white fw-medium ">
    Predict and prevent health risks like cancer, diabetes, COPD, and heart attack.
  </p>
  <Button 
    variant="primary" 
    className="mt-3 px-4 py-2"
    onClick={handleRegisterClick}
  >
    Register Now
  </Button>
</div>


      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Modal.Header closeButton>
          <Modal.Title id="modal-title">Register</Modal.Title>
        </Modal.Header>
        <Modal.Body id="modal-description">
          {/* Display error message if validation fails */}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Update username state
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} // Update confirm password state
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Hero;
