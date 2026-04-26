import React, { useEffect, useState } from 'react';

export default function IntroLoader({ show }) {
  const [phase, setPhase] = useState('visible'); // 'visible' | 'exiting' | 'done'

  useEffect(() => {
    if (!show && phase === 'visible') {
      // Start the exit slide-up animation
      setPhase('exiting');
      // Remove from DOM only AFTER animation completes (0.9s anim + 0.2s delay = ~1.2s)
      const doneTimer = setTimeout(() => setPhase('done'), 1200);
      return () => clearTimeout(doneTimer);
    }
  }, [show]);

  // Fully removed from DOM — no flicker, no blank frame
  if (phase === 'done') return null;

  return (
    <div className={`intro-loader${phase === 'exiting' ? ' exit' : ''}`}>
      <div className="intro-logo-wrap">
        <img
          src="/images/main_logo.jpeg"
          alt="NIR DESIGNS Logo"
          style={{ width: 140, height: 148, objectFit: 'contain' }}
        />
        <div className="intro-studio-name">
          NIR <span>DESIGNS STUDIO</span>
        </div>
        <div className="intro-tagline">Interior Design Studio · Ahmedabad</div>
      </div>
      <div className="intro-progress-bar">
        <div className="intro-progress-fill" />
      </div>
    </div>
  );
}
