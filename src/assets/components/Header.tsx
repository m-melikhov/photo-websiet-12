import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/portfolio">Портфоліо</Link>
        <Link to="/about">Про мене</Link>
        <Link to="/contact">Контакти</Link>
      </nav>
      <div className="header-content">
        <Link to="/">
          <h1>Welcome to My Photography Portfolio</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
