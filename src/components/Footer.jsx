import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="site-footer">
      <div className="footer-logo">
        <img src="/images/nd_logo_dark.svg" alt="NIR DESIGNS" style={{ width: 44, height: 46, objectFit: 'contain' }} />
        <span className="footer-logo-name">NIR DESIGNS</span>
      </div>

      <p className="footer-copy">
        © {year} NIR DESIGNS [ND] · All Rights Reserved · Ahmedabad
      </p>

      <a
        href="https://www.instagram.com/nir_designs_nd"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-ig"
        id="footer-ig"
      >
        <span style={{ fontSize: '1rem' }}>📸</span>
        @nir_designs_nd
      </a>
    </footer>
  );
}
