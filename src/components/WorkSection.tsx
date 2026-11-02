import React, { useState } from 'react';
import { CAPABILITIES, Capability } from '../data/capabilities';
import { Play, ArrowUpRight } from 'lucide-react';

interface WorkSectionProps {
  onSelectCapability: (cap: Capability) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectCapability }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="s-work">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
        <h2 style={{ fontSize: 'clamp(12px, 0.95vw, 15px)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500, margin: 0, opacity: 0.75 }}>
          Autonomous Tax Workflows (06)
        </h2>
        <span style={{ fontSize: 'clamp(11px, 0.85vw, 13px)', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.5 }}>
          Built for CA Practice Scale
        </span>
      </div>

      <div className="projects">
        {/* Row 1: l-d (Full Hero Width) */}
        <div className="row l-d">
          {renderBlock(CAPABILITIES[0], hoveredId, setHoveredId, onSelectCapability)}
        </div>

        {/* Row 2: l-c (Asymmetric 2-Column: 7 / 5) */}
        <div className="row l-c">
          {renderBlock(CAPABILITIES[1], hoveredId, setHoveredId, onSelectCapability)}
          {renderBlock(CAPABILITIES[2], hoveredId, setHoveredId, onSelectCapability)}
        </div>

        {/* Row 3: l-b (Inverted 2-Column: 5 / 7) */}
        <div className="row l-b">
          {renderBlock(CAPABILITIES[3], hoveredId, setHoveredId, onSelectCapability)}
          {renderBlock(CAPABILITIES[4], hoveredId, setHoveredId, onSelectCapability)}
        </div>

        {/* Row 4: l-d (Full Global Engine Width) */}
        <div className="row l-d">
          {renderBlock(CAPABILITIES[5], hoveredId, setHoveredId, onSelectCapability)}
        </div>
      </div>
    </section>
  );
};

function renderBlock(
  cap: Capability,
  hoveredId: string | null,
  setHoveredId: (id: string | null) => void,
  onSelect: (cap: Capability) => void
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
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="card-canvas-preview">
        {/* Top Meta Info */}
        <div className="top-meta">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: cap.accentColor, fontWeight: 500 }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: cap.accentColor }} />
            {cap.tag}
          </span>
          <span className="badge-pill">{cap.client}</span>
        </div>

        {/* Center Graphic Representation */}
        <div style={{ margin: 'auto 0', padding: '24px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: cap.accentColor,
                transition: 'transform 0.2s',
                transform: isHovered ? 'scale(1.1)' : 'scale(1)'
              }}
            >
              <Play size={18} fill="currentColor" />
            </div>
            <div>
              <div style={{ fontSize: 'clamp(16px, 1.35vw, 22px)', fontWeight: 500, color: '#ffffff' }}>
                {cap.subtitle}
              </div>
              <div style={{ fontSize: 'clamp(12px, 0.95vw, 15px)', opacity: 0.65, color: '#e2e8f0' }}>
                {cap.impact}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Details & Category */}
        <div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div>
              <div style={{ opacity: 0.5, fontSize: 'clamp(11px, 0.8vw, 13px)', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#ffffff', marginBottom: '4px' }}>
                {cap.category}
              </div>
              <div style={{ fontSize: 'clamp(18px, 1.6vw, 28px)', fontWeight: 500, letterSpacing: '-0.02em', color: '#ffffff' }}>
                {cap.title}
              </div>
            </div>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                transform: isHovered ? 'translate(3px, -3px)' : 'none',
                transition: 'transform 0.2s'
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
                  color: '#cbd5e1'
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Video slot for user's mp4 clips on hover */}
      {cap.videoUrl && (
        <video
          src={cap.videoUrl}
          loop
          muted
          playsInline
          autoPlay={isHovered}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            zIndex: 3
          }}
        />
      )}
    </div>
  );
}
