import React, { useEffect, useRef } from 'react';

const STEPS = [
  {
    num: '01',
    icon: '💬',
    title: 'Consultation',
    desc: 'We begin with a deep understanding of your vision, lifestyle and requirements through personalized discovery sessions.',
  },
  {
    num: '02',
    icon: '✏️',
    title: 'Concept Design',
    desc: 'Our designers craft detailed floor plans, mood boards, and 3D visualizations to bring your dream space to life.',
  },
  {
    num: '03',
    icon: '🔨',
    title: 'Execution',
    desc: 'With precision craftsmanship and quality materials, we meticulously execute every detail of the approved design.',
  },
  {
    num: '04',
    icon: '🏠',
    title: 'Handover',
    desc: 'We deliver a fully complete, move-in ready space that exceeds your expectations — on time and within budget.',
  },
];

export default function Process() {
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
      { threshold: 0.1 }
    );

    const revealEls = sectionRef.current?.querySelectorAll('.reveal');
    revealEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="process-section" id="process" ref={sectionRef}>
      <div className="section-eyebrow reveal" style={{ justifyContent: 'center', marginBottom: 12 }}>
        <span>How We Work</span>
      </div>
      <h2 className="section-heading reveal">
        Our Design <em>Process</em>
      </h2>

      <div className="process-grid">
        {STEPS.map((step, i) => (
          <div
            className="process-step reveal"
            key={step.num}
            style={{ transitionDelay: `${i * 0.12}s` }}
            id={`process-step-${step.num}`}
          >
            <div className="process-num">{step.num}</div>
            <div className="process-icon">{step.icon}</div>
            <div className="process-title">{step.title}</div>
            <p className="process-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
