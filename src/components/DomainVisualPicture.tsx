import React from 'react';
import { DomainWorkflow } from '../data/capabilities';
import { CheckCircle2, ShieldCheck, ArrowRight, MessageSquare, FileCheck2, Cpu, Globe2, AlertCircle } from 'lucide-react';

interface DomainVisualPictureProps {
  workflow: DomainWorkflow;
  isHovered: boolean;
  detailed?: boolean;
}

export const DomainVisualPicture: React.FC<DomainVisualPictureProps> = ({ workflow, isHovered, detailed = false }) => {
  // If the user has supplied a direct custom screenshot / photo URL, display that image
  if (workflow.imageUrl) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '2px'
        }}
      >
        <img
          src={workflow.imageUrl}
          alt={workflow.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
      </div>
    );
  }

  // Otherwise, render the dedicated, pixel-perfect CA domain visual diagram
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        transition: 'transform 0.5s ease',
        transform: isHovered && !detailed ? 'scale(1.02)' : 'none'
      }}
    >
      {renderDiagramContent(workflow.id, detailed)}
    </div>
  );
};

function renderDiagramContent(id: string, detailed: boolean) {
  switch (id) {
    case 'gst-recon':
      return (
        <div style={{ background: 'rgba(0, 0, 0, 0.5)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '6px', padding: detailed ? '24px' : '16px', color: '#ffffff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px', marginBottom: '14px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em', color: '#10b981', textTransform: 'uppercase' }}>
              HOW TOOL RECONCILES · TOLERANCE ENGINE
            </span>
            <span style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', fontSize: '11px', padding: '2px 8px', borderRadius: '4px' }}>
              Auto-Matched (99.4%)
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '12px', alignItems: 'center', marginBottom: '14px' }}>
            {/* Purchase Register Side */}
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '10px 12px', borderRadius: '4px', fontSize: '12px' }}>
              <div style={{ opacity: 0.6, fontSize: '10px', textTransform: 'uppercase' }}>Books (Tally / ERP)</div>
              <div style={{ fontWeight: 600, color: '#f8fafc', marginTop: '2px' }}>INV-2026/0891</div>
              <div style={{ color: '#94a3b8', fontSize: '11px' }}>14-Oct · ₹ 1,42,800</div>
            </div>

            {/* Match Connector */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#10b981' }}>
              <ArrowRight size={16} />
              <span style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.04em' }}>+3D DRIFT TOLERATED</span>
            </div>

            {/* Portal GSTR-2B Side */}
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '10px 12px', borderRadius: '4px', fontSize: '12px' }}>
              <div style={{ opacity: 0.6, fontSize: '10px', textTransform: 'uppercase' }}>Portal (GSTR-2B)</div>
              <div style={{ fontWeight: 600, color: '#f8fafc', marginTop: '2px' }}>0891 (No prefix)</div>
              <div style={{ color: '#94a3b8', fontSize: '11px' }}>17-Oct · ₹ 1,42,800</div>
            </div>
          </div>

          <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '4px', padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
            <span style={{ color: '#e2e8f0' }}>Result: Typo & date shift resolved</span>
            <strong style={{ color: '#10b981' }}>₹ 25,704 ITC Secured</strong>
          </div>
        </div>
      );

    case 'notice-defense':
      return (
        <div style={{ background: 'rgba(0, 0, 0, 0.5)', border: '1px solid rgba(249, 115, 22, 0.25)', borderRadius: '6px', padding: detailed ? '24px' : '16px', color: '#ffffff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px', marginBottom: '14px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em', color: '#f97316', textTransform: 'uppercase' }}>
              HOW TOOL DEFENDS · SCRUTINY NOTICE ENGINE
            </span>
            <span style={{ background: 'rgba(249, 115, 22, 0.15)', color: '#f97316', fontSize: '11px', padding: '2px 8px', borderRadius: '4px' }}>
              ASMT-10 / DRC-01C
            </span>
          </div>

          <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.25)', borderRadius: '4px', padding: '10px 12px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f87171', fontSize: '12px', fontWeight: 600 }}>
              <AlertCircle size={14} /> Tax Demand Flagged: ₹ 4,82,100 (ITC Variance)
            </div>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px', padding: '10px 12px', fontSize: '12px' }}>
            <div style={{ color: '#94a3b8', fontSize: '10px', textTransform: 'uppercase' }}>Generated Statutory Response (DRC-06)</div>
            <div style={{ color: '#f8fafc', fontWeight: 500, marginTop: '4px' }}>
              • Cites CBIC Circular 183/15/2022 & Section 16(2)(aa)
            </div>
            <div style={{ color: '#f8fafc', fontWeight: 500 }}>
              • All 18 supplier invoices bundled & stamped for CA sign-off
            </div>
          </div>
        </div>
      );

    case 'vendor-chaser':
      return (
        <div style={{ background: 'rgba(0, 0, 0, 0.5)', border: '1px solid rgba(34, 197, 94, 0.25)', borderRadius: '6px', padding: detailed ? '24px' : '16px', color: '#ffffff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px', marginBottom: '14px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em', color: '#22c55e', textTransform: 'uppercase' }}>
              HOW TOOL FIXES IT · WHATSAPP DISPATCH LOOP
            </span>
            <span style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e', fontSize: '11px', padding: '2px 8px', borderRadius: '4px' }}>
              One-Click Send
            </span>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px', padding: '10px 12px', fontSize: '12px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '11px' }}>
              <span>Vendor: Mahajan Steel Corp</span>
              <span style={{ color: '#f59e0b' }}>GSTR-1 Unfiled</span>
            </div>
            <div style={{ color: '#e2e8f0', fontSize: '12px', marginTop: '6px', fontStyle: 'italic', background: 'rgba(0, 0, 0, 0.3)', padding: '8px', borderRadius: '4px' }}>
              "Dear Mahajan Steel, your invoice #MS-401 for ₹1,84,500 has not reflected in GSTR-2B. Please upload before 11th..."
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
            <span style={{ color: '#94a3b8' }}>Status: Dispatched via WhatsApp</span>
            <span style={{ color: '#22c55e', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={14} /> Filing Confirmed
            </span>
          </div>
        </div>
      );

    case 'partner-hub':
      return (
        <div style={{ background: 'rgba(0, 0, 0, 0.5)', border: '1px solid rgba(168, 85, 247, 0.25)', borderRadius: '6px', padding: detailed ? '24px' : '16px', color: '#ffffff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px', marginBottom: '14px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em', color: '#a855f7', textTransform: 'uppercase' }}>
              FIRM RADAR · 120 CLIENTS MANAGED
            </span>
            <span style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#a855f7', fontSize: '11px', padding: '2px 8px', borderRadius: '4px' }}>
              Partner Overview
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 10px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px' }}>
              <span>Sharma Logistics Pvt Ltd</span>
              <span style={{ color: '#10b981' }}>99.8% Reconciled (₹18.4L Secured)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 10px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px' }}>
              <span>Vanguard Pharma LLP</span>
              <span style={{ color: '#f59e0b' }}>3 Missing Invoices (Vendors Chased)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 10px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px' }}>
              <span>Kailash Metal Works</span>
              <span style={{ color: '#06b6d4' }}>DRC-01C Reply Ready for Sign-Off</span>
            </div>
          </div>
        </div>
      );

    case 'accounting-sync':
      return (
        <div style={{ background: 'rgba(0, 0, 0, 0.5)', border: '1px solid rgba(234, 179, 8, 0.25)', borderRadius: '6px', padding: detailed ? '24px' : '16px', color: '#ffffff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px', marginBottom: '14px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em', color: '#eab308', textTransform: 'uppercase' }}>
              ZERO-CONFIG PIPELINE · ANY DOCUMENT IN
            </span>
            <span style={{ background: 'rgba(234, 179, 8, 0.15)', color: '#eab308', fontSize: '11px', padding: '2px 8px', borderRadius: '4px' }}>
              Tally Native + OCR
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center', fontSize: '11px', marginBottom: '12px' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '8px 4px', borderRadius: '4px' }}>Tally XML</div>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '8px 4px', borderRadius: '4px' }}>Zoho / Excel</div>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '8px 4px', borderRadius: '4px' }}>Scanned Bills</div>
          </div>

          <div style={{ background: 'rgba(234, 179, 8, 0.08)', border: '1px solid rgba(234, 179, 8, 0.25)', borderRadius: '4px', padding: '8px 12px', fontSize: '12px', color: '#fef08a' }}>
            ✓ 15-Digit GSTIN Checksum Validated · Indian Bank Narration AI Active
          </div>
        </div>
      );

    case 'global-rules':
      return (
        <div style={{ background: 'rgba(0, 0, 0, 0.5)', border: '1px solid rgba(6, 182, 212, 0.25)', borderRadius: '6px', padding: detailed ? '24px' : '16px', color: '#ffffff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px', marginBottom: '14px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em', color: '#06b6d4', textTransform: 'uppercase' }}>
              GLOBAL ADAPTER · INDIA & INDONESIA
            </span>
            <span style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4', fontSize: '11px', padding: '2px 8px', borderRadius: '4px' }}>
              Market Two Ready
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '12px' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '10px', borderRadius: '4px' }}>
              <div style={{ color: '#06b6d4', fontWeight: 600 }}>🇮🇳 India Rules Pack</div>
              <div style={{ color: '#94a3b8', fontSize: '11px', marginTop: '4px' }}>GSTR-2B · DRC-01C · TDS</div>
              <div style={{ color: '#cbd5e1', fontSize: '10px', marginTop: '6px' }}>Led by Kunsang Dorjay</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '10px', borderRadius: '4px' }}>
              <div style={{ color: '#06b6d4', fontWeight: 600 }}>🇮🇩 Indonesia Rules Pack</div>
              <div style={{ color: '#94a3b8', fontSize: '11px', marginTop: '4px' }}>Coretax · e-Faktur · PPN</div>
              <div style={{ color: '#cbd5e1', fontSize: '10px', marginTop: '6px' }}>Led by Luthfi (Jakarta)</div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
