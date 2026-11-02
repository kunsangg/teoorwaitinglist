import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header id="h-hero" className="hero-container">
      {/* Massive Top Wordmark */}
      <div className="hero-wordmark">
        <h1>TEEOR</h1>
      </div>

      {/* Split Bottom Content */}
      <div className="hero-split">
        <div className="hero-left">
          <div className="founder-tag">Kunsang Dorjay · Founder</div>
          <div className="founder-mail">
            <a href="mailto:kunsang@teeor.com">kunsang@teeor.com</a>
          </div>
          <div className="hero-display-sub">
            TAX AGENTS
            <br />
            FOR CA FIRMS
            <br />
            2026
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-pill">
            <svg
              className="spinning-star"
              viewBox="0 0 7 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.18 3.42L6.06 2.82L5.62 1.46L3.74 2.12V0H2.28V2.1L0.42 1.46L0 2.82L1.86 3.42L0.62 5.14L1.78 5.94L3.02 4.12L4.26 5.96L5.4 5.16L4.18 3.42Z"
                fill="currentColor"
              />
            </svg>
            <span>(teeor)</span>
          </div>
          <div className="hero-body-desc">
            Teeor builds AI agents that do the most repetitive, high-risk GST
            reconciliation and scrutiny notice work for accounting firms.
            <br />
            <br />
            India first, then Southeast Asia and beyond.
          </div>
        </div>
      </div>
    </header>
  );
};
