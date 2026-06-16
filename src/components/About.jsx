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

        <div className="founder-card reveal">
          <div className="founder-image-wrap">
            <img 
              src="/images/IMG_3840.webp" 
              alt="Ar. Niraj Patel - Founder & Principal Architect of NIR DESIGNS STUDIO, Architect Designer & Interior Designer in Ahmedabad, Gujarat" 
              className="founder-portrait"
            />
          </div>
          <div className="founder-details">
            <span className="founder-label">Founder & Principal Architect</span>
            <h3 className="founder-name">Ar. Niraj Patel</h3>
            <p className="founder-bio">
              A visionary architect defined by precision and restraint, 
              Ar. Niraj Patel leads the studio with a commitment to 
              timeless aesthetics and quiet luxury.
            </p>
          </div>
        </div>

        <div className="about-intro reveal">
          <h2 className="about-slogan">Less, but better.</h2>
          <p className="about-tagline">Design that speaks softly, yet leaves a lasting impression.</p>
        </div>

        <p className="about-body reveal">
          NIR DESIGNS STUDIO is a design-led architectural practice defined by precision, 
          restraint, and an unwavering commitment to timeless aesthetics. With over 8 years of 
          expertise and a portfolio of 150+ carefully curated projects, we approach every 
          space with a deep understanding of proportion, materiality, and the emotional 
          resonance of architecture.
        </p>
        
        <p className="about-body reveal">
          We believe true luxury lies in simplicity. Clean lines, balanced forms, and 
          refined textures come together to create environments that feel effortless 
          yet sophisticated. Each project is a dialogue between vision and craftsmanship, 
          translating aspirations into bespoke architectural experiences that stand 
          the test of time.
        </p>

        <div className="about-vision-mission reveal">
          <div className="vm-item">
            <h4>Our Vision</h4>
            <p>To pioneer innovative, sustainable, and timeless designs that elevate the human experience in everyday living.</p>
          </div>
          <div className="vm-item">
            <h4>Our Mission</h4>
            <p>To deliver high-quality architectural solutions with precision, creativity, and an uncompromising client-first approach.</p>
          </div>
        </div>

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
          src="/images/IMG_3876.webp"
          alt="Premium luxury interior design project by NIR DESIGNS STUDIO Ahmedabad - Residential & Commercial Interior Designer in Gujarat"
          className="about-img-main"
          loading="lazy"
        />
        {/* <img
          src="/images/slide1.webp"
          alt="Interior detail"
          className="about-img-accent"
          loading="lazy"
        /> */}
      </div>
    </section>
  );
}
