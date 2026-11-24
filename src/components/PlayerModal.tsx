import React, { useEffect } from 'react';
import { WorkflowItem } from './WorkSection';
import { CAPABILITIES } from '../data/capabilities';

interface PlayerModalProps {
  workflow: WorkflowItem;
  onClose: () => void;
  onApplyPilot: () => void;
}

export const PlayerModal: React.FC<PlayerModalProps> = ({ workflow, onClose, onApplyPilot }) => {
  const capability = CAPABILITIES.find((c) => c.id === workflow.id);

  // Lock background scrolling when modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className="player-modal-backdrop" role="dialog" aria-modal="true">
      {/* Header with Go Back */}
      <div className="player-modal-header">
        <button onClick={onClose} className="player-modal-back-btn" aria-label="Go back to work">
          <span aria-hidden="true">←</span> Go Back to Work
        </button>
        <span className="player-modal-category f-8">
          {workflow.category}
        </span>
      </div>

      {/* Main Video Viewport Container */}
      <div className="player-modal-viewport">
        <video
          src={workflow.videoUrl}
          loop
          muted
          autoPlay
          playsInline
          className="player-modal-video"
        />
        <div className="player-modal-viewport-overlay">
          <div className="player-modal-titles">
            <span className="player-modal-cat-tag f-8">
              {workflow.category}
            </span>
            <h2 className="player-modal-title f-4">
              {workflow.title}
            </h2>
          </div>
          {capability?.roiMetric && (
            <div className="player-modal-roi-badge">
              ★ {capability.roiMetric}
            </div>
          )}
        </div>
      </div>

      {/* Deep CA Domain Breakdown */}
      <div className="player-modal-body">
        {/* Meta details column */}
        <div className="player-modal-meta">
          <ul className="player-modal-meta-list">
            <li>
              <strong className="f-8">Classification</strong>
              <span className="f-6">{workflow.category}</span>
            </li>
            <li>
              <strong className="f-8">Target Practice</strong>
              <span className="f-6">CA Firms & In-House Finance Teams</span>
            </li>
            <li>
              <strong className="f-8">Architecture</strong>
              <span className="f-6">Rules-First Engine · Human-in-the-Loop Review</span>
            </li>
            {capability?.forms && (
              <li>
                <strong className="f-8">Statutory Forms & Ingestion</strong>
                <span className="f-6 player-modal-forms">
                  {capability.forms.join(' · ')}
                </span>
              </li>
            )}
          </ul>
        </div>

        {/* Detailed CA Solution Breakdown */}
        <div className="player-modal-content">
          <div className="player-modal-section">
            <h3 className="f-8">The Problem for Accounting Firms</h3>
            <p className="f-6">
              {capability?.problemDetails || workflow.context}
            </p>
          </div>

          <div className="player-modal-section">
            <h3 className="f-8">How the Teoor Agent Solves It</h3>
            <p className="f-6">
              {capability?.howItFixesThat || capability?.howToolWorks || workflow.context}
            </p>
          </div>

          {capability?.caBenefits && (
            <div className="player-modal-section">
              <h3 className="f-8">Key Practice Benefits</h3>
              <ul className="player-modal-benefits">
                {capability.caBenefits.map((b, i) => (
                  <li key={i}>
                    <span className="player-modal-check" aria-hidden="true">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="player-modal-cta-wrap">
            <button onClick={onApplyPilot} className="player-modal-cta-btn">
              Apply for CA Close Pilot →
            </button>
            <span className="f-8 player-modal-guarantee">
              Structured Monthly Close Pilot · Up to 5 Client GSTINs · Zero Migration
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
