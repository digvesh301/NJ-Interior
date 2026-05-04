import React from 'react';

const MARQUEE_ITEMS = [
  'RESIDENTIAL DESIGN',
  'COMMERCIAL SPACES',
  'ARCHITECTURAL DESIGN',
  'INTERIOR DESIGN',
  'LANDSCAPE DESIGN'
];

export default function TextMarquee() {
  return (
    <div className="text-marquee-wrapper">
      <div className="text-marquee-track">
        {/* Render multiple sets to ensure seamless infinite scroll */}
        {[...Array(4)].map((_, groupIdx) => (
          <div key={groupIdx} className="text-marquee-group" aria-hidden={groupIdx > 0 ? "true" : "false"}>
            {MARQUEE_ITEMS.map((item, idx) => (
              <React.Fragment key={`${groupIdx}-${idx}`}>
                <span className="marquee-text">{item}</span>
                <span className="marquee-separator">◇</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
