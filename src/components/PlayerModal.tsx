import React, { useState } from 'react';
import { DomainWorkflow } from '../data/capabilities';
import { ArrowLeft, CheckCircle2, ShieldCheck, Sparkles, HelpCircle, Wrench, CheckCheck } from 'lucide-react';
import { DomainVisualPicture } from './DomainVisualPicture';

interface PlayerModalProps {
  capability: DomainWorkflow;
  onClose: () => void;
  onApplyPilot: () => void;
}

export const PlayerModal: React.FC<PlayerModalProps> = ({ capability, onClose, onApplyPilot }) => {
  return (
    <div className="modal-overlay">
      {/* Header with Go Back */}
      <div className="player-header">
        <button className="back-btn" onClick={onClose}>
          <ArrowLeft size={20} />
          <span>← Go Back</span>
        </button>
        <span style={{ fontSize: 'clamp(11px, 0.9vw, 13px)', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.6 }}>
          {capability.category} · {capability.domain}
        </span>
      </div>

      {/* Main Showcase Visual Box */}
      <div className="player-video-box" style={{ background: capability.posterBg, minHeight: 'auto', padding: '36px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: capability.accentColor, boxShadow: `0 0 12px ${capability.accentColor}` }} />
            <span style={{ color: '#ffffff', fontSize: '15px', fontWeight: 500, letterSpacing: '0.02em' }}>
              HOW THE TOOL WORKS & FIXES THIS DOMAIN
            </span>
          </div>
          <span style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', padding: '4px 12px', borderRadius: '4px', fontSize: '12px' }}>
            CA Practice Ready
          </span>
        </div>

        {/* Detailed Domain Picture / Diagram */}
        <div style={{ maxWidth: '820px', margin: '0 auto', width: '100%' }}>
          <DomainVisualPicture workflow={capability} isHovered={true} detailed={true} />
        </div>
      </div>

      {/* Deep-Dive Explanation Grid for CAs */}
      <div className="player-info-grid">
        <div className="player-info-details">
          <ul>
            <li>
              <strong>Designated Domain</strong>
              <span>{capability.domain}</span>
            </li>
            <li>
              <strong>Applicable Statutory Forms</strong>
              <span>{capability.forms.join(', ')}</span>
            </li>
            <li>
              <strong>Quantified Impact</strong>
              <span style={{ color: '#059669' }}>{capability.roiMetric}</span>
            </li>
            <li>
              <strong>Review Model</strong>
              <span>100% Human-In-The-Loop (CA Approval Required)</span>
            </li>
          </ul>
        </div>

        <div className="player-main-content">
          <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 44px)', margin: '0 0 24px 0' }}>{capability.title}</h2>

          {/* Problem Section */}
          <div style={{ marginBottom: '28px', background: '#ffffff', padding: '24px', border: '1px solid #e5e5e5', borderRadius: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b91c1c', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px' }}>
              <HelpCircle size={16} /> The Problem for CA Firms
            </div>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#334155' }}>
              {capability.problemDetails}
            </p>
          </div>

          {/* How Tool Works & Fixes It */}
          <div style={{ marginBottom: '28px', background: '#ffffff', padding: '24px', border: '1px solid #e5e5e5', borderRadius: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#059669', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px' }}>
              <Wrench size={16} /> How Teeor Works & Fixes It
            </div>
            <p style={{ margin: '0 0 12px 0', fontSize: '15px', lineHeight: 1.6, color: '#334155' }}>
              {capability.howToolWorks}
            </p>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#0f172a', fontWeight: 500 }}>
              {capability.howItFixesThat}
            </p>
          </div>

          {/* CA Benefits Checklist */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '12px', color: '#100f0f' }}>
              Direct Advantages for Your Practice:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {capability.caBenefits.map((benefit, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#334155' }}>
                  <CheckCheck size={16} color="#059669" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="player-cta-btn" onClick={onApplyPilot}>
            <span>Test This Workflow in 30-Day Free Pilot</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
