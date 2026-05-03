import React, { useState } from 'react';



const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  city: '',
  budget: '',
  message: '',
};

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

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
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSuccess(true);
      setForm(INITIAL_FORM);
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 3000);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-modal-overlay">
      <div className="contact-modal-content">
        <button className="contact-modal-close" onClick={onClose}>×</button>
        
        {success ? (
          <div className="form-success" style={{ padding: '40px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>✓</div>
            Thank you for reaching out!
            <p>We'll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <h3 className="form-title" style={{ marginBottom: 20 }}>Get In Touch</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email Address *</label>
                <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>City</label>
                <input name="city" type="text" placeholder="Your city" value={form.city} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label>Approximate Budget</label>
              <input name="budget" type="text" placeholder="e.g. ₹10–15 Lakhs" value={form.budget} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Tell us about your project</label>
              <textarea name="message" placeholder="e.g. We want to design our new 3BHK apartment. We love modern, minimalist styles with wood accents and warm lighting." value={form.message} onChange={handleChange} />
            </div>
            {error && <p style={{ color: '#f87171', fontSize: '0.8rem', marginBottom: 10 }}>⚠ {error}</p>}
            <button type="submit" className="form-submit-btn" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send Enquiry'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
