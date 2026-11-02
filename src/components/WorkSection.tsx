import React, { useState } from 'react';
import { CAPABILITIES, DomainWorkflow } from '../data/capabilities';
import { ArrowUpRight } from 'lucide-react';
import { DomainVisualPicture } from './DomainVisualPicture';

interface WorkSectionProps {
  onSelectCapability: (cap: DomainWorkflow) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectCapability }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="s-work">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '28px' }}>
        <div>
          <h2 style={{ fontSize: 'clamp(12px, 0.95vw, 15px)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500, margin: '0 0 6px 0', opacity: 0.75 }}>
            Designated CA Domains & Workflows (06)
          </h2>
          <span style={{ fontSize: 'clamp(11px, 0.85vw, 13px)', opacity: 0.6, letterSpacing: '0.02em' }}>
            How the agent works and fixes tax reconciliation for Chartered Accountant firms
          </span>
        </div>
        <span style={{ fontSize: 'clamp(11px, 0.85vw, 13px)', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.5 }}>
          Built for CA Practice Scale
        </span>
      </div>

      <div className="projects">
        {/* Row 1: l-d (Full Width: Autonomous GST Reconciliation) */}
        <div className="row l-d">
          {renderBlock(CAPABILITIES[0], hoveredId, setHoveredId, onSelectCapability)}
        </div>

        {/* Row 2: l-c (Asymmetric 2-Column: Notice Defense + Vendor Chaser) */}
        <div className="row l-c">
          {renderBlock(CAPABILITIES[1], hoveredId, setHoveredId, onSelectCapability)}
          {renderBlock(CAPABILITIES[2], hoveredId, setHoveredId, onSelectCapability)}
        </div>

        {/* Row 3: l-b (Inverted 2-Column: Partner Hub + Zero-Config Ingestion) */}
        <div className="row l-b">
          {renderBlock(CAPABILITIES[3], hoveredId, setHoveredId, onSelectCapability)}
          {renderBlock(CAPABILITIES[4], hoveredId, setHoveredId, onSelectCapability)}
        </div>

        {/* Row 4: l-d (Full Width: Global Engine - India & Indonesia) */}
        <div className="row l-d">
          {renderBlock(CAPABILITIES[5], hoveredId, setHoveredId, onSelectCapability)}
        </div>
      </div>
    </section>
  );
};

function renderBlock(
  cap: DomainWorkflow,
  hoveredId: string | null,
  setHoveredId: (id: string | null) => void,
  onSelect: (cap: DomainWorkflow) => void
) {
  const isHovered = hoveredId === cap.id;

  return (
    <div
      key={cap.id}
      className="block capability-card"
      onMouseEnter={() => setHoveredId(cap.id)}
      onMouseLeave={() => setHoveredId(null)}
      onClick={() => onSelect(cap)}
      style={{
        background: cap.posterBg,
        border: isHovered ? '1px solid rgba(255, 255, 255, 0.22)' : '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="card-canvas-preview">
        {/* Top Meta Info */}
        <div className="top-meta">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: cap.accentColor, fontWeight: 500 }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: cap.accentColor }} />
            {cap.tag}
          </span>
          <span className="badge-pill">{cap.domain}</span>
        </div>

        {/* Domain Visual Picture / Diagram */}
        <div style={{ margin: '20px 0' }}>
          <DomainVisualPicture workflow={cap} isHovered={isHovered} />
        </div>

        {/* Bottom Details & Explanation */}
        <div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div>
              <div style={{ opacity: 0.5, fontSize: 'clamp(11px, 0.8vw, 13px)', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#ffffff', marginBottom: '4px' }}>
                {cap.category}
              </div>
              <div style={{ fontSize: 'clamp(18px, 1.55vw, 26px)', fontWeight: 500, letterSpacing: '-0.02em', color: '#ffffff' }}>
                {cap.title}
              </div>
              <div style={{ fontSize: '13px', color: '#cbd5e1', marginTop: '4px', maxWidth: '90%' }}>
                {cap.problemSummary}
              </div>
            </div>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                transform: isHovered ? 'translate(3px, -3px) scale(1.05)' : 'none',
                transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                flexShrink: 0
              }}
            >
              <ArrowUpRight size={18} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {cap.previewBadges.map((badge, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: 'clamp(10px, 0.75vw, 12px)',
                  padding: '4px 10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '4px',
                  color: '#e2e8f0'
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
