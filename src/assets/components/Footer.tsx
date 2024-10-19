import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </div>
      <p>&copy; 2024 My Photography Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
