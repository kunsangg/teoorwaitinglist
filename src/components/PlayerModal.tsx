import React from 'react';
import { WorkflowItem } from './WorkSection';

interface PlayerModalProps {
  workflow: WorkflowItem;
  onClose: () => void;
  onApplyPilot: () => void;
}

export const PlayerModal: React.FC<PlayerModalProps> = ({ workflow, onClose, onApplyPilot }) => {
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
      <div style={{ padding: '3vw 6.25vw 2vw 6.25vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: '#fcf6f4',
            fontFamily: 'inherit',
            fontSize: '1.2vw',
            cursor: 'pointer',
            padding: 0
          }}
        >
          ← Go Back
        </button>
        <span className="f-8" style={{ opacity: 0.6 }}>
          {workflow.category}
        </span>
      </div>

      {/* Main Viewport Container (Empty clean media container, ready for image/video later) */}
      <div
        style={{
          width: 'calc(100% - 12.5vw)',
          margin: '0 auto',
          height: '60vh',
          background: '#141414',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {workflow.videoUrl ? (
          <video src={workflow.videoUrl} loop muted autoPlay playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : workflow.mediaUrl ? (
          <img src={workflow.mediaUrl} alt={workflow.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ textAlign: 'center', opacity: 0.4 }}>
            <span className="f-8">[ Media slot: Video / Picture will be added here ]</span>
          </div>
        )}
      </div>

      {/* Info Section (#s-info style) */}
      <div
        style={{
          width: 'calc(100% - 12.5vw)',
          margin: '4vw auto 8vw auto',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '6vw'
        }}
      >
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
                Audience
              </strong>
              <span className="f-6">CA Firms & In-House Finance Teams</span>
            </li>
            <li>
              <strong className="f-8" style={{ display: 'block', opacity: 0.5, marginBottom: '0.4vw' }}>
                Deployment
              </strong>
              <span className="f-6">Autonomous Agent · Human Approval</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="f-4" style={{ margin: '0 0 1.5vw 0' }}>
            {workflow.title}
          </h2>
          <p className="f-6" style={{ opacity: 0.85, lineHeight: 1.6, marginBottom: '3vw' }}>
            {workflow.context}
          </p>

          <button
            onClick={onApplyPilot}
            style={{
              background: '#fcf6f4',
              color: '#100f0f',
              border: 'none',
              padding: '1.2vw 2.5vw',
              fontFamily: 'inherit',
              fontSize: '1vw',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              cursor: 'pointer'
            }}
          >
            Apply for 30-Day Pilot →
          </button>
        </div>
      </div>
    </div>
  );
};
