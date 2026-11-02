import React from 'react';

export const BioSection: React.FC = () => {
  return (
    <section id="s-bio">
      <div className="head">
        <h2 className="f-8">Bio / Mission</h2>
      </div>

      <div className="bio-grid">
        {/* Left Column */}
        <div>
          <h2 className="f-4">
            The simplicity
            <br />
            of next-generation
            <br />
            taxation.
          </h2>

          <div className="quote-box">
            <p className="f-6" style={{ fontStyle: 'italic', margin: 0 }}>
              “The tax department already uses automated tools to find mismatches. CA firms still fix them by hand in spreadsheets. That gap is the business.”
            </p>
            <div style={{ marginTop: '1.2vw', fontSize: '0.9vw', textTransform: 'uppercase', letterSpacing: '0.04em', opacity: 0.7 }}>
              — Kunsang Dorjay, Founder
            </div>
          </div>

          <div className="stats-row">
            <div className="stat-item">
              <strong>1.67 Cr</strong>
              <span>Active GST Taxpayers</span>
            </div>
            <div className="stat-item">
              <strong>1.6 Lakh</strong>
              <span>Practicing CAs</span>
            </div>
            <div className="stat-item">
              <strong>176</strong>
              <span>VAT / GST Countries</span>
            </div>
            <div className="stat-item">
              <strong>₹2,140 Cr</strong>
              <span>CA Compliance SAM</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative */}
        <div className="narrative">
          <p>
            India's tax department now uses automated analytics to scan returns and automatically trigger scrutiny notices whenever a business's claimed Input Tax Credit diverges from GSTR-2B. Provisional credit is gone — every mismatch now costs real money in frozen working capital, interest, and penalties.
          </p>

          <p>
            The grinding work of preventing and answering these notices falls squarely on CA firms. Today, article trainees spend hundreds of hours cross-referencing messy Tally and Zoho Excel exports line by line. Typos in invoice numbers or date shifts break the match.
          </p>

          <p>
            <strong>Our Wedge:</strong> We sell to CA firms, not directly to small businesses. One firm brings 50 to 500 business clients onto Teeor at once. Article trainees are our internal champions because we eliminate late-night deadline grinds.
          </p>

          <p>
            <strong>Trust & Safety:</strong> Tax data is sacred. Teeor is built on a strict human-in-the-loop model: nothing is ever filed or sent to the department without explicit CA partner approval.
          </p>

          <p style={{ marginBottom: 0 }}>
            <strong>Global Expansion:</strong> India is our beachhead. Next, our universal engine with plug-in rules expands into Indonesia's mandatory Coretax e-invoicing rollout (led on the ground in Jakarta by Luthfi), Malaysia, and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};
