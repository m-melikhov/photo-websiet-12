import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="about"
    >
      <div className="about-content">
        <img
          src="portrait.jpg"
          alt="Photographer"
          className="about-portrait"
        />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m a professional photographer with over 10 years of experience
            capturing life’s most precious moments. My work spans across
            portraits, weddings, and events.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
