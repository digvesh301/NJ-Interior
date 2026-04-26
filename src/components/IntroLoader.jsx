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
        <img
          src="/images/nd_logo.png"
          alt="NIR DESIGNS Logo"
          className="intro-logo-img"
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
