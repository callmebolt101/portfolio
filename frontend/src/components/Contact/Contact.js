import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="contact-card">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
          <h3>Address</h3>
          <p>9005 Fort Hamilton Parkway, New York</p>
        </div>
        <div className="contact-card">
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <h3>Phone</h3>
          <p>+1 518 930-6530</p>
        </div>
        <div className="contact-card">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <h3>Email</h3>
          <p><a href="mailto:info@themewagon.com">as17913@nyu.edu</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
