import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home',      id: 'hero' },
    { label: 'About',     id: 'about' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact',   id: 'contact' },
  ];

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : 'at-top'}`} id="site-header">
        {/* Logo */}
        <div className="nav-logo" onClick={() => scrollTo('hero')} id="nav-logo">
          <img src="/images/nd_logo.png" alt="NIR DESIGNS" className="nav-logo-img" />
          <div className="nav-logo-text">
            <span className="nav-logo-name">NIR DESIGNS</span>
            <span className="nav-logo-sub">Architecture & Interior Designer</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="site-nav" id="site-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="nav-link"
              onClick={() => scrollTo(link.id)}
              id={`nav-${link.id}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          id="nav-hamburger"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile Nav */}
      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} id="mobile-nav">
        {navLinks.map((link) => (
          <button
            key={link.id}
            className="nav-link"
            onClick={() => scrollTo(link.id)}
          >
            {link.label}
          </button>
        ))}
        <a
          href="https://www.instagram.com/nir_designs_nd"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
          style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem' }}
        >
          @nir_designs_nd
        </a>
      </nav>
    </>
  );
}
