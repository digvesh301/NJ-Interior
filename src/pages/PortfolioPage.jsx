import React from 'react';
import Portfolio from '../components/Portfolio';

export default function PortfolioPage() {
  return (
    <div className="page-wrapper">
      {/* <div className="page-hero">
        <div className="page-hero-overlay" />
        <img src="/images/slide1.png" alt="Portfolio" className="page-hero-img" />
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">Our Work</div>
          <h1 className="page-hero-title">Portfolio</h1>
          <p className="page-hero-sub">Explore our curated collection of residential &amp; commercial projects</p>
        </div>
      </div> */}
      <Portfolio />
    </div>
  );
}
