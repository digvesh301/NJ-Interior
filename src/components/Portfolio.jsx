import React, { useState, useEffect, useRef } from 'react';

const PROJECTS = [
  {
    id: 'p1',
    title: 'The Prestige Villa',
    category: 'Residential',
    cover: '/images/project1.png',
    images: ['/images/project1.png', '/images/slide1.png', '/images/slide2.png', '/images/slide5.png'],
    desc: 'A luxury residential villa featuring an open-plan living and dining concept with warm wood accents, cove lighting, and panoramic city views.',
  },
  {
    id: 'p2',
    title: 'Skyline Office Hub',
    category: 'Commercial',
    cover: '/images/project2.png',
    images: ['/images/project2.png', '/images/slide4.png'],
    desc: 'A modern corporate workspace designed for productivity and collaboration, featuring glass partitions and ergonomic workstations.',
  },
  {
    id: 'p3',
    title: 'The White Villa',
    category: 'Architecture',
    cover: '/images/project3.png',
    images: ['/images/project3.png', '/images/slide1.png', '/images/slide3.png'],
    desc: 'A contemporary villa exterior featuring a white facade, large-format glazing, and thoughtfully landscaped surroundings.',
  },
  {
    id: 'p4',
    title: "Elara's Wonderland",
    category: 'Children\'s Room',
    cover: '/images/project4.png',
    images: ['/images/project4.png', '/images/slide2.png'],
    desc: 'A delightful children\'s bedroom blending elegant pastel tones with practical study and play zones — designed to grow with the child.',
  },
  {
    id: 'p5',
    title: 'Midnight Loft',
    category: '3D Visualization',
    cover: '/images/project5.png',
    images: ['/images/project5.png', '/images/slide1.png', '/images/slide5.png'],
    desc: 'A dramatic photorealistic 3D render of a luxury loft, showcasing the power of our visualization services to pre-approve your dream design.',
  },
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);
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
      { threshold: 0.08 }
    );

    sectionRef.current?.querySelectorAll('.reveal, .reveal-left').forEach((el) =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('modal-open', !!activeProject);
  }, [activeProject]);

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) setActiveProject(null);
  };

  return (
    <>
      <section className="portfolio-section" id="portfolio" ref={sectionRef}>
        <div className="portfolio-header">
          <div>
            <div className="section-eyebrow reveal">
              <span>Our Projects</span>
            </div>
            <h2 className="section-heading reveal">
              Featured <em>Portfolio</em>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/nir_designs_nd"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              borderBottom: '1px solid var(--gold)',
              paddingBottom: 2,
            }}
            id="portfolio-ig-link"
          >
            View on Instagram ↗
          </a>
        </div>

        <div className="portfolio-grid" id="portfolio-grid">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className="portfolio-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
              onClick={() => setActiveProject(project)}
              id={`portfolio-card-${project.id}`}
            >
              <div className="portfolio-card-label">{project.category}</div>
              <img
                src={project.cover}
                alt={project.title}
                className="portfolio-card-img"
                loading="lazy"
              />
              <div className="portfolio-card-overlay">
                <div className="portfolio-card-info">
                  <div className="portfolio-card-cat">{project.category}</div>
                  <div className="portfolio-card-title">{project.title}</div>
                  <div className="portfolio-card-action">View Project →</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {activeProject && (
        <div
          className="modal-backdrop open"
          onClick={handleBackdropClick}
          id="project-modal"
        >
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title-area">
                <div className="modal-cat">{activeProject.category}</div>
                <h2 className="modal-title">{activeProject.title}</h2>
                {activeProject.desc && (
                  <p
                    style={{
                      marginTop: 12,
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.5)',
                      maxWidth: 560,
                      lineHeight: 1.7,
                    }}
                  >
                    {activeProject.desc}
                  </p>
                )}
              </div>
              <button
                className="modal-close"
                onClick={() => setActiveProject(null)}
                aria-label="Close project gallery"
                id="modal-close-btn"
              >
                ✕
              </button>
            </div>

            <div className="modal-images-grid">
              {activeProject.images.map((img, idx) => (
                <div className="modal-img-wrap" key={idx}>
                  <img
                    src={img}
                    alt={`${activeProject.title} — view ${idx + 1}`}
                    className="modal-img"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
