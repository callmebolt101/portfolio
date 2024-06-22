import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <img src="https://via.placeholder.com/150" alt="Your Name" className="about-image" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a passionate Data Scientist and Software Engineer with a love for coding, creating, and innovating. With a strong background in data science, machine learning, and software development, I strive to solve complex problems and build efficient solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
