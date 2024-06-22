import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="brand">
        <h1>DevFolio</h1>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li><a href="#home"><FontAwesomeIcon icon={faHome} /> Home</a></li>
          <li><a href="#about"><FontAwesomeIcon icon={faUser} /> About</a></li>
          <li><a href="#projects"><FontAwesomeIcon icon={faProjectDiagram} /> Projects</a></li>
          <li><a href="#contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
