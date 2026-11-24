import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeLocation, setActiveLocation] = useState<string | null>('india');
  const sectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    partnerName: '',
    firmName: '',
    email: '',
    whatsapp: '',
    clientCount: '25-100',
    software: 'Tally Prime',
    agreeTerms: true
  });

  // Honeypot field for basic spam protection
  const [honeypot, setHoneypot] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.whatsapp) return;
    if (isSubmitting) return; // prevent double-submit

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/ca-firm-pilot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          partnerName: formData.partnerName,
          firmName: formData.firmName,
          email: formData.email,
          whatsapp: formData.whatsapp,
          clientCount: formData.clientCount,
          software: formData.software,
          agreeTerms: formData.agreeTerms,
          _honeypot: honeypot,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || 'Something went wrong. Please try again.');
      }

      // Only celebrate on real success
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 }
      });

      setSubmitted(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="s-contact" ref={sectionRef}>
      <div className="head reveal-up">
        <h2 className="f-8">Contact & Pilot</h2>
      </div>

      {/* Adjusted Responsive "GET IN TOUCH" Heading */}
      <div className="heading reveal-up">
        <h2 className="contact-display-title">
          Get in touch
        </h2>
      </div>

      <div className="quote reveal-up">
        <div>
          <h3 className="f-4">
            Reconciliation is only
            <br />
            half the battle.
            <br />
            Resolution is where
            <br />
            firms win.
          </h3>
        </div>
        <p className="f-8" style={{ opacity: 0.75, maxWidth: '520px', marginTop: '1vw' }}>
          Teoor helps CA firms reconcile GSTR-2B against Purchase Registers and close resulting exceptions — with clear ownership, vendor follow-ups, and reviewable evidence across all clients.
        </p>
      </div>

      {/* Regional Locations (India & Indonesia) */}
      <div className="locations reveal-up">
        <div
          className={`location ${activeLocation === 'india' ? 'is-active' : ''}`}
          onClick={() => setActiveLocation(activeLocation === 'india' ? null : 'india')}
        >
          <p className="f-8">India — HQ</p>
          <ul>
            <li>Kunsang Dorjay · Founder</li>
            <li>Ayush Khati · CTO</li>
            <li>Darjeeling, West Bengal</li>
            <li>
              <a href="mailto:kunsang@teoor.com" onClick={(e) => e.stopPropagation()}>
                kunsang@teoor.com
              </a>
            </li>
            <li>
              <a href="tel:+918250341785" onClick={(e) => e.stopPropagation()}>
                +91 82503 41785
              </a>
            </li>
          </ul>
        </div>

        <div
          className={`location ${activeLocation === 'indonesia' ? 'is-active' : ''}`}
          onClick={() => setActiveLocation(activeLocation === 'indonesia' ? null : 'indonesia')}
        >
          <p className="f-8">Indonesia — SEA</p>
          <ul>
            <li>Luthfi</li>
            <li>Jakarta, Indonesia</li>
            <li>
              <a href="mailto:luthfi@teoor.com" onClick={(e) => e.stopPropagation()}>
                luthfi@teoor.com
              </a>
            </li>
            <li>
              <a href="tel:+6287834568586" onClick={(e) => e.stopPropagation()}>
                +62 87834568586
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Claude Startups Inspired Separated Pilot Box Section */}
      <div className="claude-pilot-section reveal-up">
        <div className="claude-pilot-grid">
          {/* Left Context Column */}
          <div className="claude-pilot-left">
            <h3 className="claude-pilot-heading">
              Apply for CA Close Pilot
            </h3>
            <p className="claude-pilot-sub">
              Run one monthly Purchase Register vs GSTR-2B cycle for up to 5 client GST registrations with file validation, exception resolution, and reviewer controls.
            </p>

            <div className="claude-pilot-features">
              <div className="feature-item">
                <span className="dot" />
                <span>Source-neutral: Ingests Tally, Zoho & custom Excel dumps with zero migration</span>
              </div>
              <div className="feature-item">
                <span className="dot" />
                <span>100% Human-in-the-loop: Explainable matches, maker-checker sign-offs</span>
              </div>
              <div className="feature-item">
                <span className="dot" />
                <span>Enterprise trust: Complete tenant isolation and DPDP Act compliance</span>
              </div>
            </div>
          </div>

          {/* Right Separated Box Container */}
          <div className="claude-pilot-box">
            {submitted ? (
              <div className="submitted-view">
                <div className="check-badge">✓</div>
                <h4 className="f-5" style={{ color: '#ffffff', margin: '0 0 12px 0' }}>
                  Pilot Application Reserved
                </h4>
                <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: 1.6, margin: '0 0 20px 0' }}>
                  Thank you, <strong>{formData.partnerName || 'Partner'}</strong>. We have allocated Priority Slot #TE-104 for <strong>{formData.firmName || 'your firm'}</strong>.
                </p>
                <div className="whatsapp-notice">
                  Founder Kunsang Dorjay will reach out via WhatsApp at <strong>{formData.whatsapp}</strong> within 24 hours to schedule discovery and workflow walkthrough.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="claude-form">
                {/* Honeypot field — hidden from humans, traps bots */}
                <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                  <label htmlFor="company_url">Company URL</label>
                  <input
                    type="text"
                    id="company_url"
                    name="company_url"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                {error && (
                  <div style={{
                    background: 'rgba(239,68,68,0.12)',
                    border: '1px solid rgba(239,68,68,0.3)',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    marginBottom: '16px',
                    color: '#fca5a5',
                    fontSize: '14px',
                    lineHeight: 1.5,
                  }}>
                    {error}
                  </div>
                )}

                <div className="form-row">
                  <div className="input-group">
                    <label className="field-label">Partner name *</label>
                    <input
                      type="text"
                      required
                      placeholder="CA Rajesh Singhania"
                      className="claude-input"
                      value={formData.partnerName}
                      onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
                    />
                  </div>
                  <div className="input-group">
                    <label className="field-label">Firm name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Singhania & Associates"
                      className="claude-input"
                      value={formData.firmName}
                      onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <label className="field-label">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="partner@firm.com"
                      className="claude-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="input-group">
                    <label className="field-label">WhatsApp number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="claude-input"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <label className="field-label">Total GST clients *</label>
                    <select
                      className="claude-select"
                      value={formData.clientCount}
                      onChange={(e) => setFormData({ ...formData, clientCount: e.target.value })}
                    >
                      <option value="1-25">1 – 25 Clients</option>
                      <option value="25-100">25 – 100 Clients (Recommended)</option>
                      <option value="100-300">100 – 300 Clients</option>
                      <option value="300+">300+ Clients</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label className="field-label">Primary accounting tool *</label>
                    <select
                      className="claude-select"
                      value={formData.software}
                      onChange={(e) => setFormData({ ...formData, software: e.target.value })}
                    >
                      <option value="Tally Prime">Tally Prime / ERP 9</option>
                      <option value="Zoho Books">Zoho Books</option>
                      <option value="Busy Accounting">Busy Accounting</option>
                      <option value="Excel Spreadsheets">Excel Spreadsheets</option>
                    </select>
                  </div>
                </div>

                <div className="checkbox-row">
                  <input
                    type="checkbox"
                    id="pilot-agree"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    required
                  />
                  <label htmlFor="pilot-agree">
                    I agree to participate in Teoor's structured monthly close pilot for up to 5 GST registrations. *
                  </label>
                </div>

                <button type="submit" className="claude-submit-btn" disabled={isSubmitting} style={isSubmitting ? { opacity: 0.7, cursor: 'not-allowed' } : {}}>
                  <span>{isSubmitting ? 'Submitting…' : 'Apply for the pilot'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
