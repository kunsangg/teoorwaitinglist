import React from 'react';

export const BioSection: React.FC = () => {
  return (
    <section id="s-bio" style={{ width: '100%', padding: '8vw 6.25vw', boxSizing: 'border-box', borderTop: '1px solid #dbe3e5' }}>
      <div style={{ marginBottom: '4vw' }}>
        <span style={{ fontSize: '1.05vw', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.75, fontWeight: 500 }}>
          About Teeor · The Company & Vision
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', gap: '6vw' }}>
        {/* Left Column: Big Statement & Founder */}
        <div>
          <h2 style={{ fontFamily: "'Monument Grotesk', -apple-system, sans-serif", fontSize: '3.6vw', lineHeight: 1.05, fontWeight: 500, letterSpacing: '-0.04em', margin: '0 0 3vw 0', textTransform: 'uppercase' }}>
            The simplicity
            <br />
            of next-generation
            <br />
            taxation.
          </h2>

          <div style={{ borderLeft: '2px solid #100f0f', paddingLeft: '1.8vw', margin: '2vw 0 4vw 0' }}>
            <p style={{ fontSize: '1.4vw', lineHeight: 1.45, fontStyle: 'italic', margin: 0, color: '#1a1a1a' }}>
              “The tax department already uses automated tools to find mismatches. CA firms still fix them by hand in spreadsheets. That gap is the business.”
            </p>
            <div style={{ marginTop: '1vw', fontSize: '0.95vw', textTransform: 'uppercase', letterSpacing: '0.04em', opacity: 0.7 }}>
              — Saksham Pradhan, Founder
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2vw', marginTop: '3vw' }}>
            <div>
              <div style={{ fontSize: '2.4vw', fontWeight: 600, letterSpacing: '-0.03em' }}>1.67 Cr</div>
              <div style={{ fontSize: '0.85vw', opacity: 0.7, textTransform: 'uppercase' }}>Active GST Taxpayers in India</div>
            </div>
            <div>
              <div style={{ fontSize: '2.4vw', fontWeight: 600, letterSpacing: '-0.03em' }}>1.6 Lakh</div>
              <div style={{ fontSize: '0.85vw', opacity: 0.7, textTransform: 'uppercase' }}>Practicing CA Certificate Holders</div>
            </div>
            <div>
              <div style={{ fontSize: '2.4vw', fontWeight: 600, letterSpacing: '-0.03em' }}>176</div>
              <div style={{ fontSize: '0.85vw', opacity: 0.7, textTransform: 'uppercase' }}>VAT / GST Jurisdictions Worldwide</div>
            </div>
            <div>
              <div style={{ fontSize: '2.4vw', fontWeight: 600, letterSpacing: '-0.03em' }}>₹2,140 Cr</div>
              <div style={{ fontSize: '0.85vw', opacity: 0.7, textTransform: 'uppercase' }}>India CA GST Service SAM</div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative Story */}
        <div style={{ fontSize: '1.25vw', lineHeight: 1.6, color: '#2b2b2b' }}>
          <p style={{ marginTop: 0, marginBottom: '2vw' }}>
            Every month, Indian businesses must prove that their claimed Input Tax Credit (ITC) matches what their suppliers reported on the GST portal. When numbers don’t line up, provisional credit is blocked, interest is levied, and automated scrutiny notices arrive.
          </p>

          <p style={{ marginBottom: '2vw' }}>
            Today, this burden falls on Chartered Accountants and their article trainees. They spend millions of hours cross-referencing messy Tally and Zoho Excel exports against GSTR-2B data line by line. A typo in an invoice number or a three-day date shift breaks traditional formulas, causing endless late-night deadline crunches.
          </p>

          <p style={{ marginBottom: '2vw' }}>
            <strong>Our Wedge:</strong> We sell directly to CA firms, not individual SMEs. One CA firm serves 50 to 500 businesses, immediately unlocking high-volume adoption. Article trainees are our internal champions because Teeor eliminates the lowest-margin grinding work.
          </p>

          <p style={{ marginBottom: '2vw' }}>
            <strong>Trust & Safety First:</strong> Tax data is sacred. Teeor is built on a strict <em>human-in-the-loop</em> model. Nothing is ever filed or submitted to tax authorities without explicit CA partner approval. All processing is housed in secure Indian cloud regions compliant with the Digital Personal Data Protection Act.
          </p>

          <p style={{ marginBottom: '0' }}>
            <strong>Global Expansion:</strong> We win the Indian market first as our beachhead, then carry the same core matching engine with plug-in rules packs across Indonesia (Coretax), Malaysia, the Gulf, and the European Union.
          </p>
        </div>
      </div>
    </section>
  );
};
