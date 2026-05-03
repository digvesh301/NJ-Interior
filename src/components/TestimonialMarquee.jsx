import React from 'react';

const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card">
    <div className="testimonial-card-glow" />

    <div className="testimonial-card-content">
      {/* Client Header */}
      <div className="testimonial-card-header">
        <div className="testimonial-avatar-wrapper">
          <div className="testimonial-avatar">
            {testimonial.name.charAt(0)}
          </div>
          <div className="testimonial-verified">
            &#10003;
          </div>
        </div>

        <div className="testimonial-info">
          <h4 className="testimonial-name">{testimonial.name}</h4>
          <div className="testimonial-meta">
            <span className="testimonial-role">{testimonial.role}</span>
            <div className="testimonial-dot" />
            <span className="testimonial-status">Verified</span>
          </div>
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="testimonial-body">
        <div className="testimonial-stars">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`testimonial-star ${i < testimonial.rating ? 'active' : ''}`}>
              &#9733;
            </span>
          ))}
        </div>
        <h5 className="testimonial-title">{testimonial.title || "Exceptional Design"}</h5>
        <p className="testimonial-text">
          "{testimonial.text}"
        </p>
      </div>

      {/* Footer Metadata */}
      <div className="testimonial-footer">
        <span className="testimonial-date">{testimonial.date || "October 2025"}</span>
        <div className="testimonial-source">
          Source: Google <div className="testimonial-dot" /> Reviews
        </div>
      </div>
    </div>
  </div>
);

const VerticalColumn = ({ testimonials, duration, reverse = false }) => {
  return (
    <div className="testimonial-column-wrapper">
      <div
        className={`testimonial-column ${reverse ? "reverse" : ""}`}
        style={{ "--duration": `${duration}s` }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div key={`${t.name}-${i}`} className="testimonial-card-wrapper">
            <TestimonialCard testimonial={t} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function TestimonialMarquee({ testimonials }) {
  const col1 = [...testimonials];
  const col2 = [...testimonials].reverse();
  const col3 = [...testimonials.slice(2), ...testimonials.slice(0, 2)];

  return (
    <section className="testimonial-section">
      <div className="testimonial-bg-pattern" />

      <div className="testimonial-container">
        {/* Desktop Grid Layout */}
        <div className="testimonial-desktop-grid">
          <div className="testimonial-fade-top" />
          <div className="testimonial-fade-bottom" />

          <VerticalColumn testimonials={col1} duration={45} />
          <VerticalColumn testimonials={col2} duration={55} reverse />
          <VerticalColumn testimonials={col3} duration={50} />
        </div>

        {/* Mobile Scroller Layout */}
        <div className="testimonial-mobile-scroller">
          <div
            className="testimonial-horizontal-track"
            style={{ "--duration": "40s" }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={`mob-${i}`} className="testimonial-mobile-card">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
          <div className="testimonial-fade-left" />
          <div className="testimonial-fade-right" />
        </div>
      </div>
    </section>
  );
}
