import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" id="site-footer">

      {/* ── Top decorative line ── */}
      <div className="footer-top-bar">
        <div className="footer-top-line" />
      </div>

      {/* ── Brand Block – centered ── */}
      <div className="footer-brand">
        <div className="footer-brand-logo">
          <img src="/images/nd_blueprint_logo.png" alt="NIR DESIGNS" />
        </div>
        <h2 className="footer-brand-name">NIR <span>DESIGNS STUDIO</span></h2>
        <p className="footer-brand-sub">Architecture &amp; Interior Designer</p>

        {/* Social row */}
        <div className="footer-socials">
          <a
            href="https://wa.me/919898274832"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn footer-social-btn--wa"
            id="footer-whatsapp"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.551 4.099 1.515 5.824L.057 23.272a.5.5 0 0 0 .614.644l5.596-1.468A11.951 11.951 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.92 0-3.718-.5-5.28-1.375l-.38-.217-3.924 1.03 1.044-3.812-.234-.392A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          <a
            href="https://www.instagram.com/nir_designs_nd"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-btn footer-social-btn--ig"
            id="footer-instagram"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </div>

      {/* ── Contact info strip ── */}
      <div className="footer-contact-strip">

        <a href="tel:+919898274832" className="footer-contact-item" id="footer-phone">
          <span className="footer-contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.4 2 2 0 0 1 3.58 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.92-1.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 15z" />
            </svg>
          </span>
          <span className="footer-contact-text">+91 98982 74832</span>
        </a>

        <div className="footer-contact-sep" />

        <a href="mailto:nirdesignstudio9898@gmail.com" className="footer-contact-item" id="footer-email">
          <span className="footer-contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </span>
          <span className="footer-contact-text">nirdesignstudio9898@gmail.com</span>
        </a>

        <div className="footer-contact-sep" />

        <a
          href="https://www.google.com/maps/place/Nir+design+studio/@23.1119865,72.5465111,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-contact-item"
          id="footer-address"
        >
          <span className="footer-contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </span>
          <span className="footer-contact-text">B-655, Money Plant High Street, Jagatpur Road, Ahmedabad</span>
        </a>

      </div>

      {/* ── Bottom copyright bar ── */}
      {/* <div className="footer-bottom">
        <span className="footer-copy">© {year} Nir Designs Studio. All rights reserved.</span>
        <span className="footer-copy-dot">·</span>
        <span className="footer-copy">Crafted with precision &amp; passion.</span>
      </div> */}

    </footer>
  );
}
