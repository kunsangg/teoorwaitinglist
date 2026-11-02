import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="a-footer" style={{ borderTop: '1px solid #dbe3e5', padding: '3vw 6.25vw', width: '100%', boxSizing: 'border-box' }}>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <li>
          <p style={{ margin: 0, fontSize: '0.95vw', opacity: 0.7 }}>
            All Rights Reserved © 2026 · Teeor Technologies
          </p>
        </li>
        <li>
          <span style={{ fontSize: '0.95vw', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Next-Gen Tax Agent Engine
          </span>
        </li>
        <li>
          <button
            onClick={scrollToTop}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1vw',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3vw',
              color: '#100f0f',
              padding: '0.5vw'
            }}
          >
            <span>Top</span>
            <ArrowUp size={16} />
          </button>
        </li>
      </ul>
    </footer>
  );
};
