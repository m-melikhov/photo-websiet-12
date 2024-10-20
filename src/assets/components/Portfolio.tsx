// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link } from 'react-router-dom';
import '../styles/Portfolio.css';
import axios from 'axios';

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

const categories: Category[] = [
  {
    name: 'Personal',
    link: '/personal',
    images: [personal1, personal2, personal3],
  },
  {
    name: 'For Brands',
    link: '/for-brands',
    images: [brand1, brand2, brand3],
  },
  {
    name: 'Family',
    link: '/family',
    images: [family1, family2, family3],
  },
];

interface PortfolioItem {
  id: number;
  title: string;
  image: {
    url: string;
  };
}

const Portfolio: React.FC = () => {
  const [currentImages, setCurrentImages] = useState<number[]>([0, 0, 0]);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get('http://localhost:1337/portfolio');
        setPortfolio(response.data);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      }
    };
    fetchPortfolio();
  }, []);

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
            <h3>{category.name}</h3>
            <Link to={category.link}>
              <div className="portfolio-image">
                <img
                  src={category.images[currentImages[index]]}
                  alt={category.name}
                  className="image-placeholder"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="portfolio-external">
        <h3>Додаткові Проекти</h3>
        {portfolio.map((item) => (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <img
              src={item.image.url}
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
