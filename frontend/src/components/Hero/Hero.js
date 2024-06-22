import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2>Abhishek Srikumar</h2>
        <p>Code. Create. Innovate.</p>
      </div>
      <img src="https://via.placeholder.com/600" alt="Your Name" className="hero-image" />
    </section>
  );
}

export default Hero;
