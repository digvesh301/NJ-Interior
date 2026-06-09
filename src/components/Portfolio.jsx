import React, { useState, useEffect, useRef } from 'react';

const PROJECTS = [
  {
    id: 'p-ankurbhai',
    title: 'Ankurbhai Residence',
    client: 'Ankurbhai',
    category: 'Residential',
    cover: '/images/ankurbhai/IMG_6587.webp',
    images: [
      '/images/ankurbhai/IMG_6587.webp'
    ],
    desc: 'An elegant residential interior focusing on spacious layouts, customized storage solutions, and a modern aesthetic.',
  },
  {
    id: 'p-chintanbhai',
    title: 'Chintanbhai Residence',
    client: 'Chintanbhai',
    category: 'Residential',
    cover: '/images/chintanbhai/IMG_6034.webp',
    images: [
      '/images/chintanbhai/IMG_6034.webp',
      '/images/chintanbhai/IMG_6035.webp'
    ],
    desc: 'A premium residential interior designed to offer high comfort, with warm lighting features and elegant wooden wall details.',
  },
  {
    id: 'p-jayeshbhai',
    title: 'Jayeshbhai Residence',
    client: 'Jayeshbhai',
    category: '3D Visualization',
    cover: '/images/jayeshbhai/Nir_desig_3D (1).webp',
    images: [
      '/images/jayeshbhai/Nir_desig_3D (1).webp',
      '/images/jayeshbhai/Nir_desig_3D (2).webp'
    ],
    desc: 'A stunning photorealistic 3D visualization depicting contemporary home interiors with custom cabinetry and layout design.',
  },
  {
    id: 'p-baijubhai',
    title: 'Baijubhai Residence',
    client: 'Baijubhai',
    category: '3D Visualization',
    cover: '/images/baijubhai/Baijubhai-3D (1).webp',
    images: [
      '/images/baijubhai/Baijubhai-3D (1).webp',
      '/images/baijubhai/Baijubhai-3D (2).webp',
      '/images/baijubhai/Baijubhai-3D (3).webp'
    ],
    desc: 'A high-end 3D visualization showcase of modern living and dining spaces, created to help realize the dream home vision.',
  },
  {
    id: 'p-munnabhai',
    title: 'Munnabhai Residence',
    client: 'Munnabhai',
    category: 'Residential',
    cover: '/images/munnabhai/E8DCE522-9043-43BF-8DC2-45AD2E0AB174.webp',
    images: [
      '/images/munnabhai/E8DCE522-9043-43BF-8DC2-45AD2E0AB174.webp',
      '/images/munnabhai/IMG_6434.webp'
    ],
    desc: 'Exquisite modern residential interior project, featuring customized wardrobes, elegant details, and cozy lighting.',
  },
  {
    id: 'p-sureshbhai',
    title: 'Sureshbhai Residence',
    client: 'Sureshbhai',
    category: '3D Visualization',
    cover: '/images/sureshbhai/SURESHBHAI_3D  (1).webp',
    images: [
      '/images/sureshbhai/SURESHBHAI_3D  (1).webp',
      '/images/sureshbhai/SURESHBHAI_3D  (2).webp'
    ],
    desc: 'Bespoke 3D visual concepts for a contemporary home interior space showing elegant layout options.',
  },
  {
    id: 'p-hiteshbhai-patel',
    title: 'Hiteshbhai Patel Residence',
    client: 'Hiteshbhai Patel',
    category: '3D Visualization',
    cover: '/images/hiteshbhai-patel/HITESHBHAI PATEL_3D (1).webp',
    images: [
      '/images/hiteshbhai-patel/HITESHBHAI PATEL_3D (1).webp',
      '/images/hiteshbhai-patel/HITESHBHAI PATEL_3D (2).webp'
    ],
    desc: 'A gorgeous 3D bedroom visualization highlighting customized wood panelling, lighting fixtures, and texture layouts.',
  },
  {
    id: 'p-gaurangbhai',
    title: 'Gaurang Residence',
    client: 'Gaurangbhai',
    category: 'Residential',
    cover: '/images/gaurangbhai/C094538F-ED48-4B23-A2D6-B1A0BB81D470.webp',
    images: [
      '/images/gaurangbhai/C094538F-ED48-4B23-A2D6-B1A0BB81D470.webp'
    ],
    desc: 'A sophisticated residential project designed with modern layouts, high-end materials, and comfortable furniture arrangements.',
  },
  {
    id: 'p-hiteshbhai',
    title: 'Hitesh Residence',
    client: 'Hiteshbhai',
    category: 'Residential',
    cover: '/images/hiteshbhai/30CA75C7-E296-4EF9-A4F6-7C92DADCEB07.webp',
    images: [
      '/images/hiteshbhai/30CA75C7-E296-4EF9-A4F6-7C92DADCEB07.webp',
      '/images/hiteshbhai/3F4B0D65-F967-4BDC-9C8C-4E39A9D30E6B.webp',
      '/images/hiteshbhai/B3177192-A404-48C8-9CF7-B35F00FF2502.webp'
    ],
    desc: 'A gorgeous modern residential space featuring premium wood cabinetry, refined details, and a welcoming feel.',
  },
  {
    id: 'p-maulikbhai',
    title: 'Maulik Residence',
    client: 'Maulikbhai',
    category: 'Residential',
    cover: '/images/maulikbhai/IMG_6880.webp',
    images: [
      '/images/maulikbhai/IMG_6880.webp',
      '/images/maulikbhai/IMG_6881.webp',
      '/images/maulikbhai/IMG_6882.webp',
      '/images/maulikbhai/IMG_6883.webp',
      '/images/maulikbhai/IMG_6890.webp',
      '/images/maulikbhai/IMG_6891.webp',
      '/images/maulikbhai/IMG_6892.webp',
      '/images/maulikbhai/IMG_6897.webp',
      '/images/maulikbhai/IMG_6898.webp',
      '/images/maulikbhai/IMG_6900.webp',
      '/images/maulikbhai/IMG_6901.webp',
      '/images/maulikbhai/IMG_6902.webp'
    ],
    desc: 'An extensive residential design showcasing premium wood panels, bespoke furniture layouts, and curated home staging.',
  },
  {
    id: 'p-navgeevan-school',
    title: 'Navgeevan School',
    client: 'Navgeevan School',
    category: 'Commercial',
    cover: '/images/navgeevan-school/IMG_8622.webp',
    images: [
      '/images/navgeevan-school/IMG_8622.webp',
      '/images/navgeevan-school/IMG_8622(1).webp',
      '/images/navgeevan-school/IMG_8623.webp',
      '/images/navgeevan-school/IMG_8624.webp'
    ],
    desc: 'A modern, vibrant commercial interior designed for educational environments, utilizing lively colors and practical spaces.',
  },
  {
    id: 'p-niravbhai',
    title: 'Nirav Residence',
    client: 'Niravbhai',
    category: 'Residential',
    cover: '/images/niravbhai/0e207fb1-e97d-42f8-ab47-353bdd86e175.webp',
    images: [
      '/images/niravbhai/0e207fb1-e97d-42f8-ab47-353bdd86e175.webp',
      '/images/niravbhai/1bd282a3-721a-4fe7-bbde-9f22f7c26b5c.webp',
      '/images/niravbhai/1c0533fc-cb8a-43c5-8af1-69ad2774025d.webp',
      '/images/niravbhai/20f8b9b9-744d-4a36-af2a-6465cef7aa94.webp',
      '/images/niravbhai/2267c447-0c58-40ee-8292-461bf08bd897.webp',
      '/images/niravbhai/4598451f-db49-4485-9bee-a635cfd74255.webp',
      '/images/niravbhai/5836a76e-56cf-40ac-b647-97bd380f5896.webp',
      '/images/niravbhai/895ad1a3-b5ef-42a3-ba83-d0ed34794226.webp',
      '/images/niravbhai/b32376c3-8438-4b9e-85e6-524819cb88d4.webp',
      '/images/niravbhai/b7464980-324f-463e-ab9c-b27d8e883770.webp',
      '/images/niravbhai/be2fffe1-1110-4467-97de-ff075bf8ef6a.webp',
      '/images/niravbhai/d72973e1-2a69-491d-83ed-894f22459093.webp'
    ],
    desc: 'A beautiful luxury residential space highlighting premium paneling, custom sliding wardrobes, and modern styling.',
  },
  {
    id: 'p-pragneshbhai',
    title: 'Pragnesh Residence',
    client: 'Pragneshbhai',
    category: 'Residential',
    cover: '/images/pragneshbhai/25164EED-1529-40B9-A534-9C623AE56C09.webp',
    images: [
      '/images/pragneshbhai/25164EED-1529-40B9-A534-9C623AE56C09.webp',
      '/images/pragneshbhai/4C0E3A53-9551-4C2B-9731-6C0C01171E39.webp',
      '/images/pragneshbhai/70B08D42-E345-4AF7-951C-BB90D594CFD7.webp',
      '/images/pragneshbhai/A07E8F6E-83E7-409E-9930-FA52E8295B92.webp',
      '/images/pragneshbhai/B9AEDE40-E554-4D62-8743-E5F40E83C791.webp',
      '/images/pragneshbhai/EDBFF6ED-7F9D-44AF-A101-39D7E4A1B50F.webp'
    ],
    desc: 'Elegant residential interiors utilizing premium wood textures, functional styling, and ambient lighting.',
  },
  {
    id: 'p-virajbhai',
    title: 'Viraj Residence',
    client: 'Virajbhai',
    category: 'Residential',
    cover: '/images/virajbhai/8BDCF3BB-E5E6-403F-8BC9-BFDB2FE04F54.webp',
    images: [
      '/images/virajbhai/8BDCF3BB-E5E6-403F-8BC9-BFDB2FE04F54.webp',
      '/images/virajbhai/8EC99CB8-98C1-47D5-B345-5DE5DE666163.webp',
      '/images/virajbhai/IMG_7611.webp',
      '/images/virajbhai/IMG_7612.webp'
    ],
    desc: 'A modern residential interior project, showing premium wall decor, comfortable furnishing, and modern colors.',
  },
  {
    id: 'p-arvindbhai',
    title: 'Arvind Residence',
    client: 'Arvindbhai',
    category: 'Residential',
    cover: '/images/arvindbhai/IMG_6982.webp',
    images: [
      '/images/arvindbhai/IMG_6982.webp',
      '/images/arvindbhai/IMG_6983.webp'
    ],
    desc: 'A modern residential project with high-quality interior finishes, elegant lighting, and clean lines.',
  },
  {
    id: 'p-chiragbhai',
    title: 'Chirag Residence',
    client: 'Chiragbhai',
    category: 'Residential',
    cover: '/images/chiragbhai/IMG_3825.webp',
    images: [
      '/images/chiragbhai/IMG_3825.webp',
      '/images/chiragbhai/IMG_3826.webp',
      '/images/chiragbhai/IMG_3827.webp',
      '/images/chiragbhai/IMG_3828.webp',
      '/images/chiragbhai/IMG_8664.webp'
    ],
    desc: 'An exquisite residential interior highlighting premium textures, warm wooden panels, and bespoke furnishings.',
  },
  {
    id: 'p-dipbhai',
    title: 'Dipbhai Residence',
    client: 'Dipbhai',
    category: 'Residential',
    cover: '/images/dipbhai/IMG_9885.webp',
    images: [
      '/images/dipbhai/IMG_9885.webp',
      '/images/dipbhai/IMG_9886.webp'
    ],
    desc: 'An elegant home layout focusing on custom cabinetry, sleek modular elements, and an open, airy ambience.',
  },
  {
    id: 'p-dixitbhai',
    title: 'Dixit Residence',
    client: 'Dixitbhai',
    category: 'Residential',
    cover: '/images/dixitbhai/IMG_8050.webp',
    images: [
      '/images/dixitbhai/IMG_8050.webp',
      '/images/dixitbhai/IMG_8051.webp'
    ],
    desc: 'A beautifully lit modern apartment with clean aesthetics, premium false ceiling details, and warm colors.',
  },
  {
    id: 'p-dr-kamlesh',
    title: 'Dr. Kamlesh Residence',
    client: 'Dr. Kamlesh',
    category: 'Bedroom',
    cover: '/images/dr-kamlesh/bedroom-1-1_231109_205925_1.webp',
    images: [
      '/images/dr-kamlesh/bedroom-1-1_231109_205925_1.webp',
      '/images/dr-kamlesh/Picsart_23-11-09_21-04-13-100.webp'
    ],
    desc: 'A gorgeous high-end bedroom interior utilizing custom wall paneling, elegant gold trims, and state-of-the-art lighting.',
  },
  {
    id: 'p1',
    title: 'The Prestige Villa',
    client: 'Nitin Patel',
    category: 'Residential',
    cover: '/images/project1.png',
    images: ['/images/project1.png', '/images/slide1.png', '/images/slide2.png', '/images/slide5.png'],
    desc: 'A luxury residential villa featuring an open-plan living and dining concept with warm wood accents, cove lighting, and panoramic city views.',
  },
  {
    id: 'p2',
    title: 'Skyline Office Hub',
    client: 'Aditya Mehta',
    category: 'Commercial',
    cover: '/images/project2.png',
    images: ['/images/project2.png', '/images/slide4.png'],
    desc: 'A modern corporate workspace designed for productivity and collaboration, featuring glass partitions and ergonomic workstations.',
  },
  {
    id: 'p3',
    title: 'The White Villa',
    client: 'Sanjay Shah',
    category: 'Architecture',
    cover: '/images/project3.png',
    images: ['/images/project3.png', '/images/slide1.png', '/images/slide3.png'],
    desc: 'A contemporary villa exterior featuring a white facade, large-format glazing, and thoughtfully landscaped surroundings.',
  },
  {
    id: 'p4',
    title: "Elara's Wonderland",
    client: 'Kavita Joshi',
    category: 'Children\'s Room',
    cover: '/images/project4.png',
    images: ['/images/project4.png', '/images/slide2.png'],
    desc: 'A delightful children\'s bedroom blending elegant pastel tones with practical study and play zones — designed to grow with the child.',
  },
  {
    id: 'p5',
    title: 'Midnight Loft',
    client: 'Rohan Sharma',
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
            {/* <h2 className="section-heading reveal">
              Featured <em>Portfolio</em>
            </h2> */}

          </div>
          {/* <a
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
          </a> */}
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
                  <div className="portfolio-card-client">Client: {project.client}</div>
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
                <div className="modal-cat">
                  {activeProject.category} <span style={{ opacity: 0.3, margin: '0 10px' }}>|</span> Client: {activeProject.client}
                </div>
                {/* <h2 className="modal-title">{activeProject.title}</h2> */}
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
