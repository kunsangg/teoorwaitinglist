import React from 'react';
import { WorkflowItem } from './WorkSection';
import { CAPABILITIES } from '../data/capabilities';

interface PlayerModalProps {
  workflow: WorkflowItem;
  onClose: () => void;
  onApplyPilot: () => void;
}

export const PlayerModal: React.FC<PlayerModalProps> = ({ workflow, onClose, onApplyPilot }) => {
  const capability = CAPABILITIES.find((c) => c.id === workflow.id);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        background: '#100f0f',
        color: '#fcf6f4',
        overflowY: 'auto',
        animation: 'fadeIn 0.3s ease-out'
      }}
    >
      {/* Header with Go Back */}
      <div
        style={{
          padding: '2.5vw 6.25vw 1.5vw 6.25vw',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(252, 246, 244, 0.08)'
        }}
      >
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: '#fcf6f4',
            fontFamily: 'inherit',
            fontSize: 'clamp(14px, 1.1vw, 18px)',
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          ← Go Back to Work
        </button>
        <span className="f-8" style={{ opacity: 0.6 }}>
          {workflow.category}
        </span>
      </div>

      {/* Main Video Viewport Container */}
      <div
        style={{
          width: 'calc(100% - 12.5vw)',
          margin: '2vw auto 0 auto',
          height: '62vh',
          background: '#141414',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
        }}
      >
        <video
          src={workflow.videoUrl}
          loop
          muted
          autoPlay
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '40px 30px 20px',
            background: 'linear-gradient(180deg, transparent 0%, rgba(16,15,15,0.85) 100%)',
            pointerEvents: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end'
          }}
        >
          <div>
            <span className="f-8" style={{ opacity: 0.7, color: '#fcf6f4', display: 'block', marginBottom: '6px' }}>
              {workflow.category}
            </span>
            <h2 className="f-4" style={{ margin: 0, color: '#ffffff' }}>
              {workflow.title}
            </h2>
          </div>
          {capability?.roiMetric && (
            <div
              style={{
                background: 'rgba(252, 246, 244, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '13px',
                color: '#10b981',
                border: '1px solid rgba(16, 185, 129, 0.3)'
              }}
            >
              ★ {capability.roiMetric}
            </div>
          )}
        </div>
      </div>

      {/* Deep CA Domain Breakdown */}
      <div
        style={{
          width: 'calc(100% - 12.5vw)',
          margin: '4vw auto 8vw auto',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '6vw'
        }}
      >
        {/* Meta details column */}
        <div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '2vw' }}>
            <li>
              <strong className="f-8" style={{ display: 'block', opacity: 0.5, marginBottom: '0.4vw' }}>
                Classification
              </strong>
              <span className="f-6">{workflow.category}</span>
            </li>
            <li>
              <strong className="f-8" style={{ display: 'block', opacity: 0.5, marginBottom: '0.4vw' }}>
                Target Practice
              </strong>
              <span className="f-6">CA Firms & In-House Finance Teams</span>
            </li>
            <li>
              <strong className="f-8" style={{ display: 'block', opacity: 0.5, marginBottom: '0.4vw' }}>
                Architecture
              </strong>
              <span className="f-6">Autonomous Multi-Agent · Human in the loop</span>
            </li>
            {capability?.forms && (
              <li>
                <strong className="f-8" style={{ display: 'block', opacity: 0.5, marginBottom: '0.4vw' }}>
                  Statutory Forms & Ingestion
                </strong>
                <span className="f-6" style={{ fontSize: '13px', opacity: 0.85 }}>
                  {capability.forms.join(' · ')}
                </span>
              </li>
            )}
          </ul>
        </div>

        {/* Detailed CA Solution Breakdown */}
        <div>
          <div style={{ marginBottom: '3vw' }}>
            <h3 className="f-8" style={{ opacity: 0.5, letterSpacing: '0.08em', marginBottom: '0.8vw' }}>
              The Problem for Accounting Firms
            </h3>
            <p className="f-6" style={{ opacity: 0.9, lineHeight: 1.6, margin: 0 }}>
              {capability?.problemDetails || workflow.context}
            </p>
          </div>

          <div style={{ marginBottom: '3vw' }}>
            <h3 className="f-8" style={{ opacity: 0.5, letterSpacing: '0.08em', marginBottom: '0.8vw' }}>
              How the Teeor Agent Solves It
            </h3>
            <p className="f-6" style={{ opacity: 0.9, lineHeight: 1.6, margin: 0 }}>
              {capability?.howItFixesThat || capability?.howToolWorks || workflow.context}
            </p>
          </div>

          {capability?.caBenefits && (
            <div style={{ marginBottom: '3.5vw' }}>
              <h3 className="f-8" style={{ opacity: 0.5, letterSpacing: '0.08em', marginBottom: '1vw' }}>
                Key Practice Benefits
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8vw' }}>
                {capability.caBenefits.map((b, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', opacity: 0.85 }}>
                    <span style={{ color: '#10b981' }}>✓</span> {b}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={onApplyPilot}
              style={{
                background: '#fcf6f4',
                color: '#100f0f',
                border: 'none',
                padding: '1.2vw 2.5vw',
                fontFamily: 'inherit',
                fontSize: 'clamp(13px, 1vw, 16px)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                cursor: 'pointer',
                borderRadius: '4px',
                transition: 'transform 0.2s ease'
              }}
            >
              Reserve 30-Day Pilot →
            </button>
            <span className="f-8" style={{ opacity: 0.5 }}>
              100% Free · 10 Firms Only · Zero Software Change
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
