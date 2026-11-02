import React from 'react';

export const BioSection: React.FC = () => {
  return (
    <section id="s-bio">
      <div style={{ marginBottom: '24px' }}>
        <span style={{ fontSize: 'clamp(12px, 0.95vw, 15px)', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.75, fontWeight: 500 }}>
          About Teeor · The Company & Vision
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '48px', alignItems: 'start' }}>
        {/* Left Column: Big Statement & Founder */}
        <div>
          <h2 style={{ fontFamily: "var(--font-family)", fontSize: 'clamp(32px, 3.6vw, 56px)', lineHeight: 1.05, fontWeight: 500, letterSpacing: '-0.04em', margin: '0 0 32px 0', textTransform: 'uppercase' }}>
            The simplicity
            <br />
            of next-generation
            <br />
            taxation.
          </h2>

          <div style={{ borderLeft: '2px solid #100f0f', paddingLeft: '20px', margin: '24px 0 40px 0' }}>
            <p style={{ fontSize: 'clamp(16px, 1.35vw, 21px)', lineHeight: 1.45, fontStyle: 'italic', margin: 0, color: '#1a1a1a' }}>
              “The tax department already uses automated tools to find mismatches. CA firms still fix them by hand in spreadsheets. That gap is the business.”
            </p>
            <div style={{ marginTop: '12px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.04em', opacity: 0.7 }}>
              — Kunsang Dorjay, Founder
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginTop: '36px' }}>
            <div>
              <div style={{ fontSize: 'clamp(24px, 2.4vw, 36px)', fontWeight: 600, letterSpacing: '-0.03em' }}>1.67 Cr</div>
              <div style={{ fontSize: '12px', opacity: 0.7, textTransform: 'uppercase', marginTop: '4px' }}>Active GST Taxpayers in India</div>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(24px, 2.4vw, 36px)', fontWeight: 600, letterSpacing: '-0.03em' }}>1.6 Lakh</div>
              <div style={{ fontSize: '12px', opacity: 0.7, textTransform: 'uppercase', marginTop: '4px' }}>Practicing CA Certificate Holders</div>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(24px, 2.4vw, 36px)', fontWeight: 600, letterSpacing: '-0.03em' }}>176</div>
              <div style={{ fontSize: '12px', opacity: 0.7, textTransform: 'uppercase', marginTop: '4px' }}>VAT / GST Jurisdictions Worldwide</div>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(24px, 2.4vw, 36px)', fontWeight: 600, letterSpacing: '-0.03em' }}>₹2,140 Cr</div>
              <div style={{ fontSize: '12px', opacity: 0.7, textTransform: 'uppercase', marginTop: '4px' }}>India CA GST Service SAM</div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative Story */}
        <div style={{ fontSize: 'clamp(15px, 1.25vw, 18px)', lineHeight: 1.65, color: '#2b2b2b' }}>
          <p style={{ marginTop: 0, marginBottom: '24px' }}>
            Every month, Indian businesses must prove that their claimed Input Tax Credit (ITC) matches what their suppliers reported on the GST portal. When numbers don’t line up, provisional credit is blocked, interest is levied, and automated scrutiny notices arrive.
          </p>

          <p style={{ marginBottom: '24px' }}>
            Today, this burden falls on Chartered Accountants and their article trainees. They spend millions of hours cross-referencing messy Tally and Zoho Excel exports against GSTR-2B data line by line. A typo in an invoice number or a three-day date shift breaks traditional formulas, causing endless late-night deadline crunches.
          </p>

          <p style={{ marginBottom: '24px' }}>
            <strong>Our Wedge:</strong> We sell directly to CA firms, not individual SMEs. One CA firm serves 50 to 500 businesses, immediately unlocking high-volume adoption. Article trainees are our internal champions because Teeor eliminates the lowest-margin grinding work.
          </p>

          <p style={{ marginBottom: '24px' }}>
            <strong>Trust & Safety First:</strong> Tax data is sacred. Teeor is built on a strict <em>human-in-the-loop</em> model. Nothing is ever filed or submitted to tax authorities without explicit CA partner approval. All processing is housed in secure Indian cloud regions compliant with the Digital Personal Data Protection Act.
          </p>

          <p style={{ marginBottom: '0' }}>
            <strong>Global Expansion:</strong> We win the Indian market first as our beachhead (led by Kunsang Dorjay), then carry the same core matching engine with plug-in rules packs into Indonesia's mandatory Coretax e-invoicing rollout (led by Luthfi in Jakarta), and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};
