import React, { useState } from 'react';
import { CAPABILITIES, Capability } from '../data/capabilities';
import { Play, ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Database } from 'lucide-react';

interface WorkSectionProps {
  onSelectCapability: (cap: Capability) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectCapability }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="s-work" style={{ position: 'relative', width: '100%', paddingBottom: '6vw' }}>
      <div style={{ padding: '6vw 6.25vw 2vw 6.25vw', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <h2 style={{ fontSize: '1.05vw', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500, margin: 0, opacity: 0.75 }}>
          Autonomous Tax Workflows (06)
        </h2>
        <span style={{ fontSize: '0.9vw', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.5 }}>
          Built for CA Practice Scale
        </span>
      </div>

      <div className="projects">
        {/* Row 1: l-d (Full Hero Width) */}
        <div className="row l-d" style={{ width: '100%' }}>
          {renderBlock(CAPABILITIES[0], hoveredId, setHoveredId, onSelectCapability)}
        </div>

        {/* Row 2: l-c (Asymmetric 2-Column) */}
        <div className="row l-c" style={{ width: '100%' }}>
          {renderBlock(CAPABILITIES[1], hoveredId, setHoveredId, onSelectCapability)}
          {renderBlock(CAPABILITIES[2], hoveredId, setHoveredId, onSelectCapability)}
        </div>

        {/* Row 3: l-b (Inverted 2-Column) */}
        <div className="row l-b" style={{ width: '100%' }}>
          {renderBlock(CAPABILITIES[3], hoveredId, setHoveredId, onSelectCapability)}
          {renderBlock(CAPABILITIES[4], hoveredId, setHoveredId, onSelectCapability)}
        </div>

        {/* Row 4: l-d (Full Global Engine Width) */}
        <div className="row l-d" style={{ width: '100%' }}>
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
        borderRadius: '2px',
        overflow: 'hidden',
        position: 'relative',
        background: cap.posterBg,
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="title" style={{ padding: '1.6vw 2vw 0.8vw 2vw' }}>
        <h3 style={{ margin: 0, fontSize: '1.35vw', fontWeight: 500, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fcf6f4' }}>
          <span>
            <span style={{ opacity: 0.5, fontSize: '0.85vw', textTransform: 'uppercase', marginRight: '0.8vw', letterSpacing: '0.04em' }}>
              {cap.category}
            </span>
            {cap.title}
          </span>
          <ArrowUpRight size={18} style={{ opacity: isHovered ? 1 : 0.4, transition: 'opacity 0.2s, transform 0.2s', transform: isHovered ? 'translate(2px, -2px)' : 'none' }} />
        </h3>
      </div>

      <div className="thumbnail" style={{ position: 'relative', width: '100%', height: 'calc(100% - 3.8vw)' }}>
        {/* Dynamic Simulated Interactive FinTech Canvas */}
        <div className="card-canvas-preview">
          <div className="top-meta">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4vw', color: cap.accentColor }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: cap.accentColor }} />
              {cap.tag}
            </span>
            <span className="badge-pill">{cap.client}</span>
          </div>

          {/* Center Graphic Representation */}
          <div style={{ margin: 'auto 0', padding: '1vw 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1vw', marginBottom: '0.8vw' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: cap.accentColor }}>
                <Play size={18} fill="currentColor" />
              </div>
              <div>
                <div style={{ fontSize: '1.15vw', fontWeight: 500, color: '#ffffff' }}>{cap.subtitle}</div>
                <div style={{ fontSize: '0.85vw', opacity: 0.6, color: '#e5e5e5' }}>{cap.impact}</div>
              </div>
            </div>
          </div>

          <div className="bottom-meta">
            <div className="badges-row">
              {cap.previewBadges.map((badge, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.75vw',
                    padding: '0.3vw 0.6vw',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    color: '#e2e8f0',
                    letterSpacing: '0.02em'
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Video element slot: will play when videoUrl is available */}
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
    </div>
  );
}
