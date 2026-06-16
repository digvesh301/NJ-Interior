import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
  }, [menuOpen]);

  // Close menu and scroll to top on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home',      path: '/' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About',     path: '/about' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact',   path: '/contact' },
  ];

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : 'at-top'}`} id="site-header">
        {/* Logo */}
        <div
          className="nav-logo"
          onClick={() => navigate('/')}
          id="nav-logo"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && navigate('/')}
        >
          <img src="/images/nd_blueprint_logo.webp" alt="NIR DESIGNS STUDIO - Architect Designer & Interior Designer in Ahmedabad, Gujarat" className="nav-logo-img" />
          <div className="nav-logo-text">
            <span className="nav-logo-name">NIR DESIGNS STUDIO</span>
            <span className="nav-logo-sub">Architecture &amp; Interior Designer</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="site-nav" id="site-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              id={`nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </NavLink>
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
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/'}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </NavLink>
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
