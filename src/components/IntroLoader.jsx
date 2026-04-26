import React, { useEffect, useState } from 'react';

const LINES = ['Architecture', 'Interiors', 'Excellence'];

export default function IntroLoader({ show }) {
  const [phase, setPhase] = useState('visible'); // 'visible' | 'exiting' | 'done'
  const [lineIndex, setLineIndex] = useState(0);
  const [counterVal, setCounterVal] = useState(0);

  /* Cycling words */
  useEffect(() => {
    if (phase !== 'visible') return;
    const id = setInterval(() => setLineIndex(i => (i + 1) % LINES.length), 900);
    return () => clearInterval(id);
  }, [phase]);

  /* Counting number */
  useEffect(() => {
    if (phase !== 'visible') return;
    let v = 0;
    const id = setInterval(() => {
      v += Math.ceil(Math.random() * 9);
      if (v >= 100) { setCounterVal(100); clearInterval(id); return; }
      setCounterVal(v);
    }, 28);
    return () => clearInterval(id);
  }, [phase]);

  /* Exit trigger */
  useEffect(() => {
    if (!show && phase === 'visible') {
      setPhase('exiting');
      const t = setTimeout(() => setPhase('done'), 1400);
      return () => clearTimeout(t);
    }
  }, [show]);

  if (phase === 'done') return null;

  return (
    <div className={`intro-loader${phase === 'exiting' ? ' exit' : ''}`}>

      {/* Corner brackets */}
      <span className="intro-corner intro-corner--tl" />
      <span className="intro-corner intro-corner--tr" />
      <span className="intro-corner intro-corner--bl" />
      <span className="intro-corner intro-corner--br" />

      {/* Horizontal scan line */}
      <div className="intro-scan-line" />

      {/* Centre content */}
      <div className="intro-logo-wrap">

        {/* Logo — stamp + shimmer reveal */}
        <div className="intro-logo-glow">
          <img
            src="/images/nd_blueprint_logo.png"
            alt="NIR DESIGNS Logo"
            className="intro-logo-img"
          />
          {/* shimmer overlay */}
          <div className="intro-logo-shimmer" />
        </div>

        {/* Studio name — letter-by-letter reveal */}
        <div className="intro-studio-name">
          {'NIR'.split('').map((ch, i) => (
            <span key={i} className="intro-letter" style={{ animationDelay: `${0.55 + i * 0.08}s` }}>{ch}</span>
          ))}
          &nbsp;
          {'DESIGNS STUDIO'.split('').map((ch, i) => (
            <span key={i} className="intro-letter intro-letter--gold" style={{ animationDelay: `${0.78 + i * 0.05}s` }}>
              {ch === ' ' ? '\u00A0' : ch}
            </span>
          ))}
        </div>

        {/* Cycling word */}
        <div className="intro-cycling-wrap" aria-live="polite">
          <span key={lineIndex} className="intro-cycling-word">
            {LINES[lineIndex]}
          </span>
        </div>

        {/* Tagline */}
        <div className="intro-tagline">Architect &amp; Interior Designer</div>
      </div>

      {/* Counter */}
      {/* <div className="intro-counter-wrap">
        <span className="intro-counter-num">{String(counterVal).padStart(3, '0')}</span>
        <span className="intro-counter-pct">%</span>
      </div> */}

      {/* Progress bar */}
      <div className="intro-progress-bar">
        <div className="intro-progress-fill" />
        <div className="intro-progress-glow" />
      </div>
    </div>
  );
}
