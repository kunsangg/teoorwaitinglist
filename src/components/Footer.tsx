import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="a-footer">
      <ul>
        <li>
          <p style={{ margin: 0 }}>All Rights Reserved © 2026</p>
        </li>
        <li>
          <a href="#h-hero">Teoor Technologies</a>
        </li>
        <li>
          <button onClick={scrollToTop}>↑ Back to top</button>
        </li>
      </ul>
    </footer>
  );
};
