import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="site-footer">
      <div className="footer-logo">
        <img src="/images/main_logo.jpeg" alt="NIR DESIGNS" style={{ width: 44, height: 46, objectFit: 'contain' }} />
        <span className="footer-logo-name">NIR DESIGNS</span>
      </div>

      <p className="footer-copy">
        © {year} NIR DESIGNS STUDIO [ND] · All Rights Reserved · Ahmedabad
      </p>

	  <a href="https://www.google.com/maps/place/Nir+design+studio/@23.1119865,72.5465111,17z"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-ig"
        id="footer-ig" >
        <span style={{ fontSize: '1rem' }}>📍</span>
                 B-655, Money Plant High Street, Jagatpur Road, Ahmedabad
      </a>
    </footer>
  );
}
