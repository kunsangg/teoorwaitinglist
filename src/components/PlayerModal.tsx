import React, { useState, useEffect } from 'react';
import { Capability } from '../data/capabilities';
import { ArrowLeft, Play, Pause, Volume2, CheckCircle, Shield, FileText, Sparkles } from 'lucide-react';

interface PlayerModalProps {
  capability: Capability;
  onClose: () => void;
  onApplyPilot: () => void;
}

export const PlayerModal: React.FC<PlayerModalProps> = ({ capability, onClose, onApplyPilot }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(35);

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="modal-overlay">
      {/* Header with Go Back */}
      <div className="player-header">
        <button className="back-btn" onClick={onClose}>
          <ArrowLeft size={20} />
          <span>← Go Back</span>
        </button>
        <span style={{ fontSize: '0.95vw', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.6 }}>
          {capability.category}
        </span>
      </div>

      {/* Main Video Showcase Box */}
      <div className="player-video-box" style={{ background: capability.posterBg }}>
        {/* Workflow Simulation Graphic */}
        <div style={{ position: 'relative', zIndex: 2, height: 'calc(100% - 4.5vw)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2vw' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8vw' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: capability.accentColor, boxShadow: `0 0 12px ${capability.accentColor}` }} />
              <span style={{ color: '#ffffff', fontSize: '1.1vw', fontWeight: 500, letterSpacing: '0.02em' }}>
                LIVE AGENT DEMO · {capability.module.toUpperCase()}
              </span>
            </div>
            <span style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', padding: '0.3vw 0.8vw', borderRadius: '4px', fontSize: '0.8vw' }}>
              Human-In-The-Loop Verified
            </span>
          </div>

          {/* Interactive Agent Workflow Visualizer */}
          <div style={{ background: 'rgba(0, 0, 0, 0.45)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '8px', padding: '2vw', maxWidth: '54vw', margin: '1vw auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '1vw', marginBottom: '1.2vw' }}>
              <span style={{ color: '#94a3b8', fontSize: '0.9vw' }}>TARGET CLIENT: Sharma & Sons Trading LLP</span>
              <span style={{ color: '#10b981', fontSize: '0.9vw', display: 'flex', alignItems: 'center', gap: '0.4vw' }}>
                <CheckCircle size={14} /> GSTR-2B Sync Complete
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1vw', marginBottom: '1.5vw' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1vw', borderRadius: '6px' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.75vw', textTransform: 'uppercase' }}>Invoices Processed</div>
                <div style={{ color: '#ffffff', fontSize: '1.4vw', fontWeight: 600 }}>1,842 lines</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1vw', borderRadius: '6px' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.75vw', textTransform: 'uppercase' }}>Auto-Matched</div>
                <div style={{ color: '#10b981', fontSize: '1.4vw', fontWeight: 600 }}>99.2% (1,827)</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1vw', borderRadius: '6px' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.75vw', textTransform: 'uppercase' }}>Blocked ITC Rescued</div>
                <div style={{ color: '#f59e0b', fontSize: '1.4vw', fontWeight: 600 }}>₹ 4,38,200</div>
              </div>
            </div>

            <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '6px', padding: '0.8vw 1.2vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8vw' }}>
                <Sparkles size={16} color="#10b981" />
                <span style={{ color: '#e2e8f0', fontSize: '0.85vw' }}>
                  Agent identified 15 vendor filing delays · Auto-drafted WhatsApp follow-ups ready for staff sign-off.
                </span>
              </div>
              <span style={{ color: '#10b981', fontSize: '0.8vw', fontWeight: 500, textTransform: 'uppercase' }}>
                CA Review Screen Ready
              </span>
            </div>
          </div>
        </div>

        {/* Video Player Controls Bar */}
        <div className="player-controls">
          <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <Pause size={16} /> : <Play size={16} fill="currentColor" />}
          </button>
          <div
            className="timeline-bar"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              setProgress(Math.round((clickX / rect.width) * 100));
            }}
          >
            <div className="timeline-progress" style={{ width: `${progress}%` }} />
          </div>
          <span style={{ color: '#ffffff', fontSize: '0.85vw', opacity: 0.8, minWidth: '4.5vw' }}>
            01:{progress < 10 ? `0${progress}` : Math.min(progress, 59)} / 02:40
          </span>
          <Volume2 size={18} color="#ffffff" style={{ opacity: 0.7 }} />
        </div>
      </div>

      {/* Info Breakdown Section */}
      <div className="player-info-grid">
        <div className="player-info-details">
          <ul>
            <li>
              <strong>Client Practice</strong>
              <span>{capability.client}</span>
            </li>
            <li>
              <strong>Engine Module</strong>
              <span>{capability.module}</span>
            </li>
            <li>
              <strong>Applicable Statutory Forms</strong>
              <span>{capability.forms.join(', ')}</span>
            </li>
            <li>
              <strong>Measured Impact</strong>
              <span style={{ color: '#059669' }}>{capability.impact}</span>
            </li>
          </ul>
        </div>

        <div className="player-main-content">
          <h2>{capability.title}</h2>
          <p>{capability.description}</p>
          <button className="player-cta-btn" onClick={onApplyPilot}>
            <span>Test this in 30-Day Free Pilot</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
