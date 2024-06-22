import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Recent Projects</h2>
      <div className="projects-category">
        <h3>Data Science and ML</h3>
        <div className="projects-grid">
          <img src="https://via.placeholder.com/300" alt="Project 1" className="project-image" />
          <img src="https://via.placeholder.com/300" alt="Project 2" className="project-image" />
          <img src="https://via.placeholder.com/300" alt="Project 3" className="project-image" />
        </div>
      </div>
      <div className="projects-category">
        <h3>Software Development</h3>
        <div className="projects-grid">
          <img src="https://via.placeholder.com/300" alt="Project 4" className="project-image" />
          <img src="https://via.placeholder.com/300" alt="Project 5" className="project-image" />
          <img src="https://via.placeholder.com/300" alt="Project 6" className="project-image" />
        </div>
      </div>
    </section>
  );
}

export default Projects;
