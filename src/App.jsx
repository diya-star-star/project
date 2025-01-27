import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import HeartAttackForm from './pages/HeartAttackForm';
import DiabetesForm from './pages/DiabetesForm';
import CancerForm from './pages/CancerForm';
import Register from './components/Register';  // Import Register component
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />  {/* Use Register component directly */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/prediction/heart-attack" element={<HeartAttackForm />} />
        <Route path="/prediction/diabetes" element={<DiabetesForm />} />
        <Route path="/prediction/cancer" element={<CancerForm />} />
        <Route path="/login" element={<Login />} /> {/* Route for login page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
