import React from 'react';
import About from '../components/About';


export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="page-hero-overlay" />
        <img src="/images/project1.png" alt="About NIR DESIGNS" className="page-hero-img" />
        <div className="page-hero-content">
          <div className="page-hero-eyebrow">Our Story</div>
          <h1 className="page-hero-title">About NIR DESIGNS</h1>
          <p className="page-hero-sub">Architecture &amp; Interior Design Studio · Ahmedabad</p>
        </div>
      </div>
      <About />

    </div>
  );
}
