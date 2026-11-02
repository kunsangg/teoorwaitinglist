import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header id="h-hero">
      {/* Centered Graphic Heading Logo with Intro Animation */}
      <div className="heading intro-hero-heading">
        <svg viewBox="0 0 506 210" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text
            x="50%"
            y="68%"
            textAnchor="middle"
            dominantBaseline="central"
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

      {/* Mask Split Content with Staggered Intro Animation */}
      <div className="mask">
        <div className="bottom-l intro-hero-left">
          <h1>Kunsang Dorjay</h1>
          <p>
            <a href="mailto:kunsang@teeor.com" target="_blank" rel="noreferrer">
              kunsang@teeor.com
            </a>
          </p>
          <h2 className="f-5">
            Next-Gen
            <br />
            Taxation
            <br />
            2026
          </h2>
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
