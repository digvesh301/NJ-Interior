import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="site-footer">

      {/* Top gold divider line */}
      <div className="footer-top-line" />

      <div className="footer-inner">

        {/* Col 1 — Logo + tagline */}
        <div className="footer-col footer-col--brand">
          <div className="footer-logo">
            <img
              src="/images/nd_blueprint_logo.png"
              alt="NIR DESIGNS"
            />
          </div>
          <p className="footer-brand-name">NIR <span>DESIGNS</span></p>
          <p className="footer-brand-tagline">Architect &amp; Interior Designer</p>
        </div>

        {/* Col 2 — Address */}
        <div className="footer-col footer-col--address">
          <h4 className="footer-col-heading">Address</h4>
          <a
            href="https://www.google.com/maps/place/Nir+design+studio/@23.1119865,72.5465111,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-address-link"
          >
            <span className="footer-address-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </span>
            <span>
              B-655, Money Plant High Street,<br />
              Jagatpur Road,<br />
              Ahmedabad, Gujarat
            </span>
          </a>
        </div>

        {/* Col 3 — Contact */}
        <div className="footer-col footer-col--contact">
          <h4 className="footer-col-heading">Contact</h4>

          <a href="mailto:nirdesignstudio@gmail.com" className="footer-contact-link" id="footer-email">
            <span className="footer-contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
            </span>
            nirdesignstudio@gmail.com
          </a>

          <a href="tel:+919876543210" className="footer-contact-link" id="footer-phone">
            <span className="footer-contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.4 2 2 0 0 1 3.58 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.92-1.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 15z"/>
              </svg>
            </span>
            +91 98765 43210
          </a>
        </div>

      </div>

      {/* Bottom bar */}
      {/* <div className="footer-bottom">
        <span className="footer-copy">© {year} Nir Designs Studio. All rights reserved.</span>
        <span className="footer-bottom-divider">·</span>
        <span className="footer-copy">Crafted with precision &amp; passion.</span>
      </div> */}

    </footer>
  );
}
