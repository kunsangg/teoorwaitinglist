import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header id="h-hero">
      {/* Left Column: Leadership & Vision */}
      <div className="bottom-l intro-hero-left">
        <div className="hero-member">
          <h1>Kunsang Dorjay</h1>
          <p>
            <a href="mailto:kunsang@teeor.com" target="_blank" rel="noreferrer">
              kunsang@teeor.com
            </a>
          </p>
        </div>
        <div className="hero-member">
          <h1>Ayush Khati</h1>
          <p className="hero-role">Chief Technology Officer</p>
        </div>
        <h2 className="f-5">
          Next-Gen
          <br />
          Taxation
          <br />
          2026
        </h2>
      </div>

      {/* Right Column: Brand Wordmark above Description (Non-Overlapping Flex) */}
      <div className="hero-right-col">
        <div className="heading intro-hero-heading">
          <svg viewBox="0 0 460 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text
              x="460"
              y="102"
              textAnchor="end"
              fill="#100f0f"
              fontFamily="'Monument Grotesk', -apple-system, sans-serif"
              fontWeight="500"
              fontSize="140"
              letterSpacing="-0.07em"
            >
              teeor
            </text>
          </svg>
        </div>

        <div className="bottom-r intro-hero-right">
          <h3 className="f-7">
            <div className="line">
              <div>(teeor)</div>
            </div>
          </h3>
          <p>
            AI agents that do the GST reconciliation
            <br />
            and notice work for accounting firms.
            <br />
            India first, then Southeast Asia and beyond.
          </p>
        </div>
      </div>
    </header>
  );
};
