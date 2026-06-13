import React from 'react';
import Portfolio from '../components/Portfolio';
import SEOHead from '../components/SEOHead';

export default function PortfolioPage() {
  return (
    <div className="page-wrapper">
      <SEOHead
        title="Portfolio | Luxury Residential & Commercial Interior Design Projects | NIR DESIGNS STUDIO Ahmedabad"
        description="Explore 150+ stunning interior design projects by NIR DESIGNS STUDIO Ahmedabad. View our portfolio of luxury residential interiors, commercial spaces, modular kitchens, 3D visualizations, bedroom designs, and more across Gujarat."
        keywords="interior design portfolio Ahmedabad, residential interior projects, commercial interior design projects, luxury home interiors Gujarat, modular kitchen portfolio, 3D visualization projects, bedroom design Ahmedabad, living room design portfolio, NIR DESIGNS STUDIO projects, best interior design work Ahmedabad"
        path="/portfolio"
      />
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
