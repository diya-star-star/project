import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import DiseaseSection from '../components/DiseaseSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <DiseaseSection />
      <Footer />
    </div>
  );
}

export default Home;
