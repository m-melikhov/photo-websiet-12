import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/Portfolio.css';

// Імпорт зображень
import personal1 from '../styles/images/personal1.jpg';
import personal2 from '../styles/images/personal2.jpg';
import personal3 from '../styles/images/personal3.jpg';
import brand1 from '../styles/images/brand1.jpg';
import brand2 from '../styles/images/brand2.jpg';
import brand3 from '../styles/images/brand3.jpg';
import family1 from '../styles/images/family1.jpg';
import family2 from '../styles/images/family2.jpg';
import family3 from '../styles/images/family3.jpg';

interface Category {
  name: string;
  link: string;
  images: string[];
}

interface PortfolioProps {
  showImages: boolean; // Доданий прапорець
}

const categories: Category[] = [
  {
    name: 'Personal',
    link: 'personal',
    images: [personal1, personal2, personal3],
  },
  {
    name: 'For Brands',
    link: 'for-brands',
    images: [brand1, brand2, brand3],
  },
  {
    name: 'Family',
    link: 'family',
    images: [family1, family2, family3],
  },
];

const Portfolio: React.FC<PortfolioProps> = ({ showImages }) => {
  const [currentImages, setCurrentImages] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImages((prevIndices) =>
        prevIndices.map(
          (currentIndex, categoryIndex) =>
            (currentIndex + 1) % categories[categoryIndex].images.length
        )
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="portfolio"
      className="portfolio"
    >
      <h2>Моє Портфоліо</h2>
      <div className="portfolio-grid">
        {categories.map((category, index) => (
          <div
            key={category.name}
            className="portfolio-category"
          >
            <Link to={`/portfolio/${category.link}`}>
              <h3>{category.name}</h3>
              {showImages && (
                <div className="portfolio-image">
                  <img
                    src={category.images[currentImages[index]]}
                    alt={category.name}
                    className="image-placeholder"
                  />
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>
      <Outlet />
    </section>
  );
};

export default Portfolio;
