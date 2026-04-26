import React, { useState, useEffect, useRef, useCallback } from 'react';

const SLIDES = [
  {
    id: 1,
    image: '/images/slide1.png',
    label: 'Residential Design',
    title: 'The Art of Refined Living',
    subtitle: 'Luxury Living Room · Ahmedabad',
    category: 'Living Room',
  },
  {
    id: 2,
    image: '/images/slide2.png',
    label: 'Master Suite',
    title: 'Where Comfort Meets Elegance',
    subtitle: 'Master Bedroom · Minimalist Retreat',
    category: 'Bedroom',
  },
  {
    id: 3,
    image: '/images/slide3.png',
    label: 'Kitchen Design',
    title: 'Culinary Spaces, Elevated',
    subtitle: 'Modular Kitchen · Contemporary',
    category: 'Kitchen',
  },
  {
    id: 4,
    image: '/images/slide4.png',
    label: 'Home Office',
    title: 'Spaces That Inspire Work',
    subtitle: 'Work Studio · Natural Warmth',
    category: 'Office',
  },
  {
    id: 5,
    image: '/images/slide5.png',
    label: 'Luxury Bath',
    title: 'A Sanctuary of Serenity',
    subtitle: 'Master Bathroom · Spa Aesthetic',
    category: 'Bathroom',
  },
];

export default function HeroSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
  const intervalRef = useRef(null);

  const goTo = useCallback((idx) => {
    setActiveIdx((idx + SLIDES.length) % SLIDES.length);
  }, []);

  const resetInterval = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
  }, []);

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, [resetInterval]);

  const handleArrow = (dir) => {
    goTo(activeIdx + dir);
    resetInterval();
  };

  const handleDot = (idx) => {
    goTo(idx);
    resetInterval();
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-slides-container">
        {SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`hero-slide${idx === activeIdx ? ' active' : ''}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="hero-slide-img"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
            <div className="hero-overlay" />

            <div className="hero-content">
              <div className="hero-slide-label">{slide.label}</div>
              <h1 className="hero-slide-title">{slide.title}</h1>
              <p className="hero-slide-subtitle">{slide.subtitle}</p>
              <button
                className="hero-view-btn"
                onClick={scrollToPortfolio}
                id={`hero-viewbtn-${idx}`}
              >
                View Portfolio
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="hero-dots">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`hero-dot${idx === activeIdx ? ' active' : ''}`}
            onClick={() => handleDot(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            id={`hero-dot-${idx}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="hero-counter">
        <span className="hero-counter-num current">
          {String(activeIdx + 1).padStart(2, '0')}
        </span>
        <span className="hero-counter-num">/</span>
        <span className="hero-counter-num">
          {String(SLIDES.length).padStart(2, '0')}
        </span>
      </div>

      {/* Arrows */}
      <div className="hero-arrows">
        <button
          className="hero-arrow"
          onClick={() => handleArrow(-1)}
          aria-label="Previous slide"
          id="hero-prev"
        >
          ←
        </button>
        <button
          className="hero-arrow"
          onClick={() => handleArrow(1)}
          aria-label="Next slide"
          id="hero-next"
        >
          →
        </button>
      </div>
    </section>
  );
}
