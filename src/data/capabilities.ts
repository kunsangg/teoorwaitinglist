export interface Capability {
  id: string;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  layoutClass: string; // 'l-d' | 'l-c' | 'l-b' | 'l-e'
  client: string;
  module: string;
  forms: string[];
  impact: string;
  videoUrl?: string;
  posterBg: string;
  accentColor: string;
  previewBadges: string[];
}

export const CAPABILITIES: Capability[] = [
  {
    id: 'gst-recon',
    slug: 'autonomous-gst-reconciliation',
    category: 'Agent Engine (01)',
    title: 'Autonomous GST Reconciliation',
    subtitle: 'GSTR-2B vs. Tally & Books Matching',
    description: 'Matches tens of thousands of purchase register lines against live GST portal returns in seconds. Automatically tolerates vendor typos, missing prefixes, date shifts, and multi-line split invoices while flagging exact rupee mismatch causes.',
    tag: 'Core Reconciliation',
    layoutClass: 'l-d',
    client: 'CA Practice Suite',
    module: 'Purchase ITC Engine',
    forms: ['GSTR-2B', 'GSTR-3B', 'Purchase Register (Excel/Tally)'],
    impact: 'Cuts 80% of manual Excel VLOOKUP hours per client',
    posterBg: 'linear-gradient(135deg, #182230 0%, #0c111d 100%)',
    accentColor: '#10b981',
    previewBadges: ['99.4% Auto-Match', 'Tolerance Engine', 'Zero Discrepancy ITC']
  },
  {
    id: 'notice-defense',
    slug: 'notice-defense-agent',
    category: 'Legal Workflow (02)',
    title: 'Notice Defense Agent',
    subtitle: 'Automated ASMT-10 & DRC-01C Replies',
    description: 'When automated GSTN analytics issue scrutiny notices, the agent parses the demand, cross-references historical supplier filings, compiles supporting invoice evidence, and drafts a statutory reply in the department’s expected format for CA sign-off.',
    tag: 'Notice Handling',
    layoutClass: 'l-c',
    client: 'Litigation & Scrutiny Practice',
    module: 'Statutory Defense Agent',
    forms: ['ASMT-10', 'DRC-01C', 'DRC-01B', 'Form GST DRC-06'],
    impact: 'Reduces notice response turnaround from 4 days to 15 minutes',
    posterBg: 'linear-gradient(135deg, #2b1f1d 0%, #171110 100%)',
    accentColor: '#f97316',
    previewBadges: ['DRC-01C Defense', 'Evidence Assembler', 'CA Review Required']
  },
  {
    id: 'vendor-chaser',
    slug: 'vendor-followup-loop',
    category: 'Communication (03)',
    title: 'Automated Vendor Chaser',
    subtitle: 'WhatsApp & Email Dispute Loop',
    description: 'Eliminates hundreds of phone calls chasing delinquent suppliers. Generates one-click polite WhatsApp and email messages with specific invoice numbers, missing amounts, and deadlines so vendors upload their GSTR-1 before filing cutoff.',
    tag: 'Supplier Engagement',
    layoutClass: 'l-c',
    client: 'Client Accounts Payable',
    module: 'Vendor Communication Agent',
    forms: ['Supplier GSTR-1', 'B2B Missing Invoices'],
    impact: 'Recovers up to ₹18L in blocked working capital per 100 clients',
    posterBg: 'linear-gradient(135deg, #13241b 0%, #0a140f 100%)',
    accentColor: '#22c55e',
    previewBadges: ['WhatsApp Integration', 'One-Click Trigger', 'Real-time Tracker']
  },
  {
    id: 'partner-hub',
    slug: 'partner-control-center',
    category: 'Firm Operations (04)',
    title: 'Partner Command Center',
    subtitle: 'Single Multi-Client Overview',
    description: 'Designed exclusively for CA firms managing 50 to 1,500 clients. Gives partners real-time visibility into overall credit at risk, open scrutiny notices, pending filing deadlines, and article trainee review queues in one clean dashboard.',
    tag: 'Multi-Client Scale',
    layoutClass: 'l-b',
    client: 'Chartered Accountant Partners',
    module: 'Firm Orchestration Hub',
    forms: ['All Client Entities', 'Consolidated Filings'],
    impact: 'Enables 1 partner + 3 trainees to handle 200+ GST clients with ease',
    posterBg: 'linear-gradient(135deg, #1e1b2e 0%, #0f0e17 100%)',
    accentColor: '#a855f7',
    previewBadges: ['Firm Overview', 'Audit Trails', 'Role-Based Access']
  },
  {
    id: 'accounting-sync',
    slug: 'accounting-software-ingestion',
    category: 'Data Pipeline (05)',
    title: 'Zero-Config Ingestion',
    subtitle: 'Tally Prime, Zoho Books & PDF Scans',
    description: 'Frictionless document pipeline. Ingests purchase registers directly from Tally exports, Zoho Books, Busy, SAP, or raw scanned paper invoices and WhatsApp photos with high-precision Indian tax OCR.',
    tag: 'Frictionless Ingestion',
    layoutClass: 'l-b',
    client: 'Firm Staff & Trainees',
    module: 'Universal Connector',
    forms: ['XML', 'Excel (.xlsx)', 'PDF Scans', 'WhatsApp Photos'],
    impact: 'Zero setup friction; works with existing client books on day one',
    posterBg: 'linear-gradient(135deg, #242217 0%, #14130d 100%)',
    accentColor: '#eab308',
    previewBadges: ['Tally Native', 'OCR For Scans', 'Indian Bank Narration AI']
  },
  {
    id: 'global-rules',
    slug: 'global-country-rules-packs',
    category: 'International (06)',
    title: 'Modular Country Rules',
    subtitle: 'India First, Southeast Asia & The Gulf',
    description: 'A universal matching and drafting engine decoupled from regional bureaucracy. Powered by plug-in rules packs starting with India (GST & TDS), expanding into Indonesia (Coretax PPN), Malaysia (MyInvois), and UAE/KSA VAT.',
    tag: 'Global Architecture',
    layoutClass: 'l-d',
    client: 'International Tax Consultancies',
    module: 'Country Rules Adapter',
    forms: ['India GST', 'Indonesia Coretax', 'Malaysia MyInvois', 'GCC VAT'],
    impact: 'Enables regional expansion in weeks with zero core codebase rewrites',
    posterBg: 'linear-gradient(135deg, #172428 0%, #0d1517 100%)',
    accentColor: '#06b6d4',
    previewBadges: ['176 VAT Countries', 'Coretax Ready', 'Dynamic Tax Engine']
  }
];

export const FIRM_LOCATIONS = [
  {
    country: 'India — HQ & Product',
    entity: 'Teeor Technologies',
    address: 'DLF Cyber City, Phase III',
    city: 'Gurugram, Haryana 122002',
    phone: '+91 98710 23490',
    email: 'founders@teeor.com',
    link: 'https://teeor.com'
  },
  {
    country: 'India — Financial Capital',
    entity: 'Teeor Tax Relations',
    address: 'Bandra Kurla Complex (BKC)',
    city: 'Mumbai, Maharashtra 400051',
    phone: '+91 98200 48192',
    email: 'mumbai@teeor.com',
    link: 'https://teeor.com'
  },
  {
    country: 'India — Engineering Hub',
    entity: 'Teeor Labs',
    address: 'Indiranagar 100ft Road',
    city: 'Bengaluru, Karnataka 560038',
    phone: '+91 99001 88472',
    email: 'engineering@teeor.com',
    link: 'https://teeor.com'
  },
  {
    country: 'Indonesia — Market Two',
    entity: 'Teeor SEA Expansion',
    address: 'Sudirman Central Business District (SCBD)',
    city: 'Jakarta Selatan 12190, Indonesia',
    phone: '+62 21 515 9021',
    email: 'jakarta@teeor.com',
    link: 'https://teeor.com'
  }
];
