import React, { useEffect, useState } from 'react';

export default function IntroLoader({ show }) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    if (!show) {
      setExit(true);
    }
  }, [show]);

  if (!show && !exit) return null;

  return (
    <div className={`intro-loader${exit ? ' exit' : ''}`}>
      <div className="intro-logo-wrap">
        {/* Use the transparent dark-mode SVG — no filter needed */}
        <img
          src="/images/nd_logo_dark.svg"
          alt="NIR DESIGNS Logo"
          style={{ width: 140, height: 148, objectFit: 'contain' }}
        />
        <div className="intro-studio-name">
          NIR <span>DESIGNS</span>
        </div>
        <div className="intro-tagline">Interior Design Studio · Ahmedabad</div>
      </div>
      <div className="intro-progress-bar">
        <div className="intro-progress-fill" />
      </div>
    </div>
  );
}
