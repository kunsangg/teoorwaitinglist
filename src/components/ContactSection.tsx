import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { FIRM_LOCATIONS } from '../data/capabilities';
import { CheckCircle2, Sparkles, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firmName: '',
    partnerName: '',
    role: 'CA Firm Partner',
    clientCount: '25-100',
    software: 'Tally Prime',
    whatsapp: '',
    email: ''
  });

  const getEstimatedHours = (count: string) => {
    switch (count) {
      case '1-25':
        return { hours: 35, savings: '₹ 2.8 Lakhs' };
      case '25-100':
        return { hours: 160, savings: '₹ 14.5 Lakhs' };
      case '100-300':
        return { hours: 480, savings: '₹ 42.0 Lakhs' };
      case '300+':
        return { hours: 950, savings: '₹ 85.0+ Lakhs' };
      default:
        return { hours: 160, savings: '₹ 14.5 Lakhs' };
    }
  };

  const currentRoi = getEstimatedHours(formData.clientCount);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.whatsapp) return;

    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  return (
    <section id="s-contact">
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: 'clamp(12px, 0.95vw, 15px)', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.75, fontWeight: 500, margin: 0 }}>
          Pilot Access & Inquiries (30-Day Free Trial)
        </h2>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontFamily: "var(--font-family)", fontSize: 'clamp(44px, 9vw, 130px)', lineHeight: 0.88, fontWeight: 500, letterSpacing: '-0.05em', margin: 0, textTransform: 'uppercase' }}>
          Get in touch
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', marginBottom: '64px', alignItems: 'start' }}>
        <div>
          <h3 style={{ fontFamily: "var(--font-family)", fontSize: 'clamp(24px, 2.8vw, 42px)', lineHeight: 1.1, fontWeight: 500, letterSpacing: '-0.03em', textTransform: 'uppercase', margin: '0 0 24px 0' }}>
            We're onboarding
            <br />
            10 pilot CA firms
            <br />
            this month.
          </h3>
          <p style={{ fontSize: 'clamp(14px, 1.2vw, 18px)', lineHeight: 1.6, color: '#333333' }}>
            Pilot firms receive 30 days of full reconciliation and notice defense for up to 10 clients for free. We test on your real data, prove time saved, and provide dedicated WhatsApp support.
          </p>

          <div style={{ marginTop: '32px', padding: '20px', background: 'rgba(5, 150, 105, 0.06)', borderLeft: '3px solid #059669', borderRadius: '0 4px 4px 0' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#065f46', marginBottom: '6px' }}>
              Why CA Firms Choose Teeor
            </div>
            <div style={{ fontSize: '14px', color: '#1e293b', lineHeight: 1.5 }}>
              • Zero setup: ingests Tally & Excel dumps directly<br />
              • Human-in-the-loop: Nothing filed without CA sign-off<br />
              • Recovers blocked client ITC before the 20th cutoff
            </div>
          </div>
        </div>

        {/* Interactive Pilot Registration Form */}
        <div className="waitlist-card">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '32px 16px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                <CheckCircle2 size={32} />
              </div>
              <h3 style={{ fontFamily: "var(--font-family)", fontSize: '24px', margin: '0 0 12px 0' }}>
                Pilot Application Reserved
              </h3>
              <p style={{ fontSize: '16px', color: '#4b5563', maxWidth: '420px', margin: '0 auto 24px auto' }}>
                Thank you, <strong>{formData.partnerName || 'Partner'}</strong>. We have allocated Priority Slot #TE-104 for <strong>{formData.firmName || 'your firm'}</strong>.
              </p>
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '14px 20px', borderRadius: '6px', display: 'inline-block', fontSize: '14px', color: '#334155' }}>
                Our founding team will reach out via WhatsApp at <strong>{formData.whatsapp}</strong> within 24 hours.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', color: '#059669' }}>
                <Sparkles size={18} />
                <span style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Reserve Early Pilot Access · 10 Clients Free
                </span>
              </div>

              <div className="waitlist-form-grid">
                <div className="form-group">
                  <label className="form-label">Firm / Practice Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Singhania & Associates"
                    className="form-input"
                    value={formData.firmName}
                    onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CA Rajesh Singhania"
                    className="form-input"
                    value={formData.partnerName}
                    onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Role</label>
                  <select
                    className="form-select"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  >
                    <option value="CA Firm Partner">CA Firm Partner / Owner</option>
                    <option value="Article Trainee">Article Trainee / Tax Senior</option>
                    <option value="In-House Tax Lead">In-House Tax & Finance Lead</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Total GST Clients</label>
                  <select
                    className="form-select"
                    value={formData.clientCount}
                    onChange={(e) => setFormData({ ...formData, clientCount: e.target.value })}
                  >
                    <option value="1-25">1 – 25 Clients</option>
                    <option value="25-100">25 – 100 Clients (Recommended)</option>
                    <option value="100-300">100 – 300 Clients</option>
                    <option value="300+">300+ Clients (Enterprise)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Primary Accounting Tool</label>
                  <select
                    className="form-select"
                    value={formData.software}
                    onChange={(e) => setFormData({ ...formData, software: e.target.value })}
                  >
                    <option value="Tally Prime">Tally Prime / ERP 9</option>
                    <option value="Zoho Books">Zoho Books</option>
                    <option value="Busy Accounting">Busy Accounting</option>
                    <option value="SAP / Custom">SAP / Oracle / Custom</option>
                    <option value="Excel Spreadsheets">Excel Spreadsheets</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">WhatsApp Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="form-input"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  />
                </div>

                <div className="form-group full-width">
                  <label className="form-label">Official Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="partner@firm.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Dynamic Live ROI Estimate */}
              <div className="roi-banner">
                <strong>Projected Monthly Value for Your Firm:</strong> Saves approx.{' '}
                <strong>{currentRoi.hours} staff hours</strong> and safeguards around{' '}
                <strong>{currentRoi.savings}</strong> in blocked Input Tax Credit across every monthly close.
              </div>

              <button type="submit" className="submit-btn" style={{ width: '100%' }}>
                <span>Apply for 30-Day Free Pilot</span>
                <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Regional Department Cards */}
      <div>
        <h4 style={{ fontSize: 'clamp(11px, 0.85vw, 13px)', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.6, marginBottom: '24px' }}>
          Presence & Regional Leads
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {FIRM_LOCATIONS.map((loc, idx) => (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                border: '1px solid #e5e5e5',
                padding: '24px',
                borderRadius: '4px'
              }}
            >
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#059669', marginBottom: '6px', fontWeight: 600 }}>
                {loc.country}
              </div>
              <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '10px' }}>{loc.entity}</div>
              <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.45, marginBottom: '14px' }}>
                {loc.address}
                <br />
                {loc.city}
              </div>
              <div style={{ fontSize: '13px', fontWeight: 500 }}>
                <a href={`mailto:${loc.email}`} style={{ color: '#100f0f', textDecoration: 'none' }}>
                  {loc.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
