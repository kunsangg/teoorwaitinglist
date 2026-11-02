import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [activeLocation, setActiveLocation] = useState<string | null>('india');
  const [formData, setFormData] = useState({
    firmName: '',
    partnerName: '',
    role: 'CA Partner',
    clientCount: '25-100',
    software: 'Tally Prime',
    whatsapp: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.whatsapp) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  return (
    <section id="s-contact">
      <div className="head">
        <h2 className="f-8">Contact & Pilot</h2>
      </div>

      <div className="heading">
        <h2 className="f-2">
          <a>Get in touch</a>
        </h2>
      </div>

      <div className="quote">
        <div>
          <h3 className="f-4">
            The tax department
            <br />
            automated scrutiny.
            <br />
            Firms shouldn't fight
            <br />
            it with spreadsheets.
          </h3>
        </div>
        <p className="f-8">
          We are onboarding 10 pilot CA firms for our 30-day free trial.
        </p>
      </div>

      {/* Regional Locations (India & Indonesia) */}
      <div className="locations">
        {/* Location 1: India */}
        <div
          className={`location ${activeLocation === 'india' ? 'is-active' : ''}`}
          onClick={() => setActiveLocation(activeLocation === 'india' ? null : 'india')}
        >
          <p className="f-8">India — HQ</p>
          <ul>
            <li>Kunsang Dorjay</li>
            <li>DLF Cyber City, Gurugram & Bengaluru</li>
            <li>
              <a href="mailto:kunsang@teeor.com" onClick={(e) => e.stopPropagation()}>
                kunsang@teeor.com
              </a>
            </li>
            <li>
              <a href="tel:+919871023490" onClick={(e) => e.stopPropagation()}>
                +91 98710 23490
              </a>
            </li>
          </ul>
        </div>

        {/* Location 2: Indonesia */}
        <div
          className={`location ${activeLocation === 'indonesia' ? 'is-active' : ''}`}
          onClick={() => setActiveLocation(activeLocation === 'indonesia' ? null : 'indonesia')}
        >
          <p className="f-8">Indonesia — SEA</p>
          <ul>
            <li>Luthfi</li>
            <li>SCBD, Jakarta Selatan, Indonesia</li>
            <li>
              <a href="mailto:luthfi@teeor.com" onClick={(e) => e.stopPropagation()}>
                luthfi@teeor.com
              </a>
            </li>
            <li>
              <a href="tel:+62215159021" onClick={(e) => e.stopPropagation()}>
                +62 21 515 9021
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Integrated Pilot Application Form */}
      <div className="pilot-form-container">
        {submitted ? (
          <div style={{ padding: '3vw 0' }}>
            <h3 className="f-5" style={{ margin: '0 0 1vw 0' }}>
              Application Reserved
            </h3>
            <p className="f-6" style={{ margin: '0 0 1.5vw 0', maxWidth: '35vw' }}>
              Thank you, <strong>{formData.partnerName || 'Partner'}</strong>. We have allocated Priority Pilot Slot #TE-104 for <strong>{formData.firmName || 'your firm'}</strong>.
            </p>
            <p className="f-8" style={{ opacity: 0.7 }}>
              Kunsang Dorjay will reach out via WhatsApp at <strong>{formData.whatsapp}</strong> within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '2vw' }}>
              <span className="f-8" style={{ opacity: 0.6 }}>
                Reserve 30-Day Pilot (Up to 10 Clients Free)
              </span>
            </div>

            <div className="pilot-form-grid">
              <div className="pilot-form-group">
                <label className="pilot-label">Firm / Practice Name</label>
                <input
                  type="text"
                  required
                  placeholder="Singhania & Associates"
                  className="pilot-input"
                  value={formData.firmName}
                  onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                />
              </div>

              <div className="pilot-form-group">
                <label className="pilot-label">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="CA Rajesh Singhania"
                  className="pilot-input"
                  value={formData.partnerName}
                  onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
                />
              </div>

              <div className="pilot-form-group">
                <label className="pilot-label">Role in Firm</label>
                <select
                  className="pilot-select"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                >
                  <option value="CA Partner">CA Partner / Owner</option>
                  <option value="Article Trainee">Article Trainee / Staff</option>
                  <option value="In-House Lead">In-House Finance Controller</option>
                </select>
              </div>

              <div className="pilot-form-group">
                <label className="pilot-label">Total GST Clients</label>
                <select
                  className="pilot-select"
                  value={formData.clientCount}
                  onChange={(e) => setFormData({ ...formData, clientCount: e.target.value })}
                >
                  <option value="1-25">1 – 25 Clients</option>
                  <option value="25-100">25 – 100 Clients (Recommended)</option>
                  <option value="100-300">100 – 300 Clients</option>
                  <option value="300+">300+ Clients</option>
                </select>
              </div>

              <div className="pilot-form-group">
                <label className="pilot-label">Primary Accounting Tool</label>
                <select
                  className="pilot-select"
                  value={formData.software}
                  onChange={(e) => setFormData({ ...formData, software: e.target.value })}
                >
                  <option value="Tally Prime">Tally Prime / ERP 9</option>
                  <option value="Zoho Books">Zoho Books</option>
                  <option value="Busy Accounting">Busy Accounting</option>
                  <option value="Excel Spreadsheets">Excel Spreadsheets</option>
                </select>
              </div>

              <div className="pilot-form-group">
                <label className="pilot-label">WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="pilot-input"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                />
              </div>

              <div className="pilot-form-group full-width">
                <label className="pilot-label">Official Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="partner@firm.com"
                  className="pilot-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <button type="submit" className="pilot-submit-btn">
              <span>Apply for 30-Day Pilot</span>
              <span>→</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
