import React, { useState, useEffect, useCallback, useRef } from 'react';

const SLIDES = [
  { label: 'Residential Design',   img: '/images/slide1.png' },
  { label: 'Bedroom Design',       img: '/images/slide2.png' },
  { label: 'Modular Kitchen',      img: '/images/slide3.png' },
  { label: 'Home Office',          img: '/images/slide4.png' },
  { label: 'Luxury Bathroom',      img: '/images/slide5.png' },
  { label: 'Open Plan Living',     img: '/images/project1.png' },
  { label: 'Commercial Interior',  img: '/images/project2.png' },
  { label: 'Exterior Elevation',   img: '/images/project3.png' },
  { label: 'Kids Room Design',     img: '/images/project4.png' },
  { label: '3D Visualization',     img: '/images/project5.png' },
];

export default function Categories() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef(null);

  const go = useCallback((nextIdx) => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent((nextIdx + SLIDES.length) % SLIDES.length);
    setTimeout(() => setTransitioning(false), 600);
  }, [transitioning]);

  const prev = () => go(current - 1);
  const next = useCallback(() => go(current + 1), [current, go]);

  // Auto-advance every 5s
  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(current - 1);
      if (e.key === 'ArrowRight') go(current + 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [current, go]);

  return (
    <section className="window-slider-section" id="categories" aria-label="Our Work">

      {/* Category label above slider */}
      {/* <div className="window-slider-header">
        <span className="window-slider-eyebrow">Our Work</span>
        <h2 className="window-slider-title">{SLIDES[current].label}</h2>
      </div> */}

      {/* The "windowed" frame */}
      <div className="window-slider-frame" role="region" aria-label="Image Slider">

        {/* All images absolutely stacked — only active gets opacity 1 */}
        <div className="window-slider-img-wrap" aria-live="polite">
          {SLIDES.map((slide, idx) => (
            <img
              key={idx}
              src={slide.img}
              alt={slide.label}
              className={`window-slide-img${idx === current ? ' ws-active' : ''}`}
              loading={idx < 3 ? 'eager' : 'lazy'}
              aria-hidden={idx !== current}
            />
          ))}
        </div>

        {/* Prev arrow */}
        <button
          className="window-arrow window-arrow-prev"
          onClick={prev}
          aria-label="Previous"
        >
          &#8249;
        </button>

        {/* Next arrow */}
        <button
          className="window-arrow window-arrow-next"
          onClick={next}
          aria-label="Next"
        >
          &#8250;
        </button>

        {/* Dots */}
        <div className="window-slider-dots" role="tablist" aria-label="Slides">
          {SLIDES.map((slide, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={idx === current}
              aria-label={slide.label}
              className={`window-dot${idx === current ? ' active' : ''}`}
              onClick={() => go(idx)}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="window-slider-counter" aria-hidden="true">
          {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
        </div>

      </div>
    </section>
  );
}
