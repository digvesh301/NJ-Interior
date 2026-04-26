import React, { useState, useRef, useEffect } from 'react';

// ⚠️ Replace SHEET_URL with your actual Google Apps Script Web App URL
const SHEET_URL = 'https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_ID/exec';

const PROJECT_TYPES = [
  'Select Project Type',
  'Residential Interior Design',
  'Commercial Interior Design',
  'Modular Kitchen',
  'Bedroom Design',
  'Home Office',
  'Exterior / Elevation',
  '3D Visualization',
  'Full Home Renovation',
  'Other',
];

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  city: '',
  projectType: '',
  budget: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      setError('Please fill in your name, email and phone number.');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const params = new URLSearchParams({
        ...form,
        timestamp: new Date().toISOString(),
      });

      await fetch(`${SHEET_URL}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors',
      });

      setSuccess(true);
      setForm(INITIAL_FORM);
    } catch (err) {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      {/* Info column */}
      <div className="contact-info">
        <div className="section-eyebrow reveal">
          <span>Get In Touch</span>
        </div>
        <h2 className="section-heading reveal">
          Let's Create Something<br />
          <em>Extraordinary</em>
        </h2>
        <p className="about-body reveal">
          Ready to transform your space? Share your vision with us and we'll craft a
          personalized design experience tailored to your lifestyle and budget.
        </p>

        <div className="contact-details reveal">
          <div className="contact-detail-item">
            <div className="contact-detail-icon">📍</div>
            <div className="contact-detail-text">
              <strong>Studio Location</strong>
              Ahmedabad, Gujarat, India
            </div>
          </div>
          <div className="contact-detail-item">
            <div className="contact-detail-icon">📸</div>
            <div className="contact-detail-text">
              <strong>Instagram</strong>
              <a
                href="https://www.instagram.com/nir_designs_nd"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--gold-light)' }}
                id="contact-ig-link"
              >
                @nir_designs_nd
              </a>
            </div>
          </div>
          <div className="contact-detail-item">
            <div className="contact-detail-icon">🏛️</div>
            <div className="contact-detail-text">
              <strong>Services</strong>
              Residential · Commercial · 3D Visualization · Turnkey Execution
            </div>
          </div>
        </div>

        <div className="social-links reveal">
          <a
            href="https://www.instagram.com/nir_designs_nd"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram"
            id="contact-social-ig"
          >
            IG
          </a>
          <a
            href="https://www.instagram.com/patelniraj_nd"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram - Niraj Patel"
            id="contact-social-ig2"
            style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}
          >
            ND
          </a>
        </div>
      </div>

      {/* Form column */}
      <div className="contact-form-wrap reveal-right">
        {success ? (
          <div className="form-success">
            <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>✓</div>
            Thank you for reaching out!
            <p>We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} id="contact-form" noValidate>
            <h3 className="form-title">Start Your Project</h3>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Full Name *</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-phone">Phone Number *</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-email">Email Address *</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-city">City</label>
                <input
                  id="contact-city"
                  name="city"
                  type="text"
                  placeholder="Your city"
                  value={form.city}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-projectType">Project Type</label>
              <select
                id="contact-projectType"
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
              >
                {PROJECT_TYPES.map((t) => (
                  <option key={t} value={t === PROJECT_TYPES[0] ? '' : t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="contact-budget">Approximate Budget</label>
              <input
                id="contact-budget"
                name="budget"
                type="text"
                placeholder="e.g. ₹10–15 Lakhs"
                value={form.budget}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Tell us about your project</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Describe your space, style preferences, and any specific requirements..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            {error && (
              <p
                style={{
                  color: '#f87171',
                  fontSize: '0.78rem',
                  marginBottom: 16,
                  letterSpacing: '0.04em',
                }}
              >
                ⚠ {error}
              </p>
            )}

            <button
              type="submit"
              className="form-submit-btn"
              disabled={submitting}
              id="contact-submit-btn"
            >
              {submitting ? 'Sending...' : 'Send Enquiry'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
