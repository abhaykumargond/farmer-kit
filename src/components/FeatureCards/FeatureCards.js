// src/components/FeatureCards/FeatureCards.js
import React from 'react';
import './FeatureCards.css';

const FeatureCards = () => {
  return (
    <section className="feature-cards">
      <div className="card">
        <h3>Weather Forecasting</h3>
        <p>Get accurate weather forecasts to plan your farming activities.</p>
      </div>
      <div className="card">
        <h3>Market Prices</h3>
        <p>Stay updated with the latest market prices for your crops.</p>
      </div>
      <div className="card">
        <h3>AI Assistance</h3>
        <p>Leverage AI to optimize your farming practices.</p>
      </div>
    </section>
  );
};

export default FeatureCards;