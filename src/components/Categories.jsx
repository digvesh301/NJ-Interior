import React from 'react';

// Categories marquee — uses all project images to suggest content categories
const CATEGORIES = [
  { label: 'Residential Design', img: '/images/slide1.png' },
  { label: 'Bedroom Design',     img: '/images/slide2.png' },
  { label: 'Modular Kitchen',    img: '/images/slide3.png' },
  { label: 'Home Office',        img: '/images/slide4.png' },
  { label: 'Luxury Bathroom',    img: '/images/slide5.png' },
  { label: 'Open Plan Living',   img: '/images/project1.png' },
  { label: 'Commercial Interior',img: '/images/project2.png' },
  { label: 'Exterior Elevation', img: '/images/project3.png' },
  { label: 'Kids Room Design',   img: '/images/project4.png' },
  { label: '3D Visualization',   img: '/images/project5.png' },
];

// Duplicate for seamless infinite scroll
const TRACK = [...CATEGORIES, ...CATEGORIES];

export default function Categories() {
  return (
    <section className="categories-section" id="categories">
      <p className="categories-label">Our Work Categories</p>
      <div className="marquee-wrapper">
        <div className="marquee-track" id="marquee-track">
          {TRACK.map((cat, idx) => (
            <div className="marquee-item" key={idx} id={`category-item-${idx}`}>
              <img src={cat.img} alt={cat.label} loading="lazy" />
              <div className="marquee-item-label">{cat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
