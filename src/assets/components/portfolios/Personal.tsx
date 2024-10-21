import React from 'react';
import personal1 from '../../styles/images/personal1.jpg';
import personal2 from '../../styles/images/personal2.jpg';
import personal3 from '../../styles/images/personal3.jpg';
import personal4 from '../../styles/images/personal1.jpg';
import personal5 from '../../styles/images/personal2.jpg';
import personal6 from '../../styles/images/personal3.jpg';
import '../../styles/portfolios/Personal.css';

const Personal: React.FC = () => {
  return (
    <div>
      <h2>Особисті Проекти!</h2>
      <div className="personal-gallery-grid">
        <img
          src={personal1}
          alt="Personal 1"
          className="grid-item grid-item-1"
        />
        <img
          src={personal2}
          alt="Personal 2"
          className="grid-item grid-item-2"
        />
        <img
          src={personal3}
          alt="Personal 3"
          className="grid-item grid-item-3"
        />
        <img
          src={personal4}
          alt="Personal 4"
          className="grid-item grid-item-4"
        />
        <img
          src={personal5}
          alt="Personal 5"
          className="grid-item grid-item-5"
        />
        <img
          src={personal6}
          alt="Personal 6"
          className="grid-item grid-item-6"
        />
      </div>
    </div>
  );
};

export default Personal;
