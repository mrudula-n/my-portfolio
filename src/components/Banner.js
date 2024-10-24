// src/components/Banner.js
import React from 'react';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-left">
        <div className="image-container">
          <img src={require('../images/Mrudula.jpg')} alt="Mrudula" className="banner-image" />
          <div className="border-circle"></div>
        </div>
      </div>
      <div className="banner-right">
        <div className="description-card">
          <p className="intro">Hi there, I'm</p>
          <h1>Sai Mrudula Nomula</h1>
          <p className="description">An aspiring frontend developer with a passion for creating modern and efficient web applications.</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
