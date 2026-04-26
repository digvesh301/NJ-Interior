import React, { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealEls = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      {/* Text column */}
      <div className="about-text-col">
        <div className="section-eyebrow reveal">
          <span>Our Story</span>
        </div>
        <h2 className="section-heading reveal">
          Crafting Spaces That<br />
          <em>Tell Your Story</em>
        </h2>
        <p className="about-body reveal">
          NIR DESIGNS [ND] is a premier interior design studio based in Ahmedabad, Gujarat. 
          Founded by Niraj Patel, we specialize in transforming residential and commercial spaces 
          into timeless works of art — where functionality meets refined aesthetics.
        </p>
        <p className="about-body reveal">
          From concept to completion, every project is guided by our philosophy of thoughtful 
          design — understanding how people live, work, and feel in their spaces. We bring 
          ideas to life through meticulous 3D visualization, high-quality material selection, 
          and seamless project execution.
        </p>

        <div className="about-stats reveal">
          <div className="stat-item">
            <div className="stat-num">150+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">8+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Image column */}
      <div className="about-image-col reveal-right">
        <img
          src="/images/project1.png"
          alt="NIR DESIGNS signature project"
          className="about-img-main"
          loading="lazy"
        />
        <img
          src="/images/slide1.png"
          alt="Interior detail"
          className="about-img-accent"
          loading="lazy"
        />
      </div>
    </section>
  );
}
