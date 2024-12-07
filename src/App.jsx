import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

import Contact from './pages/Contact';
import HeartAttackForm from './pages/HeartAttackForm';
import DiabetesForm from './pages/DiabetesForm';
import CancerForm from './pages/CancerForm';

function App() {
  return (
    <BrowserRouter>  {/* Use BrowserRouter only */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       
        <Route path="/contact" element={<Contact />} />
        <Route path="/prediction/heart-attack" element={<HeartAttackForm />} />
        <Route path="/prediction/diabetes" element={<DiabetesForm/>}/>
        <Route path="/prediction/cancer" element={<CancerForm/>}/>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
