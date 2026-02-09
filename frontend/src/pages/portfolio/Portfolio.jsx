import React, { useState } from 'react';
import { portfolioItems } from '../../Mock';
import '../portfolio/Portfolio.css';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Packaging', 'Branding', 'Banners', 'Social Media'];

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="portfolio-hero-content">
            <h1>My Portfolio</h1>
            <p className="lead">
              Explore my collection of design work spanning packaging, branding, digital graphics, and more
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section">
        <div className="container">
          <div className="portfolio-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'filter-btn-active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="portfolio-gallery">
            {filteredItems.map((item) => (
              <div key={item.id} className="portfolio-gallery-item">
                <div className="portfolio-gallery-image">
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-gallery-overlay">
                    <span className="portfolio-gallery-category">{item.category}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p className="portfolio-client">Client: {item.client}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="no-results">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
