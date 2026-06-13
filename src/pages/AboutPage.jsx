import React from 'react';
import About from '../components/About';
import TextMarquee from '../components/TextMarquee';
import SEOHead from '../components/SEOHead';

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <SEOHead
        title="About NIR DESIGNS STUDIO | Ar. Niraj Patel | Best Architect & Interior Designer Ahmedabad | 8+ Years | 150+ Projects"
        description="Learn about NIR DESIGNS STUDIO, Ahmedabad's premier architecture & interior design studio founded by Ar. Niraj Patel. 8+ years of experience, 150+ residential & commercial projects completed with 100% client satisfaction across Gujarat. Our vision, mission, and design philosophy."
        keywords="about NIR DESIGNS STUDIO, Niraj Patel architect Ahmedabad, interior designer Ahmedabad profile, best architect Gujarat, interior design company Ahmedabad, architecture firm Gujarat, Ar. Niraj Patel, interior design experience, residential projects Ahmedabad, commercial interior designer"
        path="/about"
      />
      <div style={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 80px)',
        minHeight: '300px',
        overflow: 'hidden',
      }}>
        <img
          src="/images/about_hero.webp"
          alt="NIR DESIGNS STUDIO - Best Interior Design & Architecture Studio in Ahmedabad, Gujarat"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            display: 'block',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.65) 100%)',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '0 6vw 48px', zIndex: 2,
        }}>
          <div className="page-hero-eyebrow">Our Story</div>
          <h1 className="page-hero-title">NIR <span>DESIGNS STUDIO</span></h1>
          <p className="page-hero-sub">Architecture &amp; Interior Designer</p>
        </div>
      </div>
      <TextMarquee />
      <About />
    </div>
  );
}