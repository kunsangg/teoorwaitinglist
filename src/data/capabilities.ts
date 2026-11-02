export interface DomainWorkflow {
  id: string;
  slug: string;
  category: string;
  title: string;
  domain: string;
  tag: string;
  layoutClass: 'l-d' | 'l-c' | 'l-b';
  accentColor: string;
  posterBg: string;
  previewBadges: string[];
  forms: string[];
  
  // CA Domain Explanation
  problemSummary: string;
  problemDetails: string;
  howToolWorks: string;
  howItFixesThat: string;
  caBenefits: string[];
  roiMetric: string;
  
  // Custom image or diagram support
  imageUrl?: string;
}

export const CAPABILITIES: DomainWorkflow[] = [
  {
    id: 'gst-recon',
    slug: 'autonomous-gst-reconciliation',
    category: 'Agent Engine (01)',
    title: 'Autonomous GST Reconciliation',
    domain: 'GSTR-2B vs. Books Multi-Pass Match',
    tag: 'Core Reconciliation',
    layoutClass: 'l-d',
    accentColor: '#10b981',
    posterBg: 'linear-gradient(135deg, #15222e 0%, #0c1219 100%)',
    previewBadges: ['99.4% Match Rate', 'Tolerance Engine', 'Zero Discrepancy ITC'],
    forms: ['GSTR-2B', 'GSTR-3B', 'Purchase Register (Tally/Zoho/Excel)'],
    problemSummary: 'Spreadsheets break on invoice typos, truncated numbers, and date shifts. Provisional credit is gone, so every mismatch freezes working capital.',
    problemDetails: 'Staff at CA firms spend 20+ hours per client each month running VLOOKUPs between client purchase ledgers and the GST portal GSTR-2B. A single typo in an invoice number (e.g. INV-089 vs 089) or a 3-day date shift causes false mismatch flags, blocking eligible Input Tax Credit (ITC) and exposing clients to 18% statutory interest penalties.',
    howToolWorks: 'Teeor ingests raw purchase registers (Tally XML, Excel) and live GSTR-2B data via licensed GSP connectors. An AI-powered tolerance engine runs multi-pass reconciliation: exact alphanumeric match, typo tolerance, date drift allowances (+/- 7 days), and multi-invoice split allocations.',
    howItFixesThat: 'Reconciles 10,000+ line items in under 30 seconds. Automatically classifies and explains mismatch causes (Supplier Unfiled, Value Variance, Rate Discrepancy) and pre-populates correcting ledger entries for staff review.',
    caBenefits: [
      'Eliminates 80% of manual Excel matching hours before the 20th deadline',
      'Secures 100% of eligible ITC before monthly return filing',
      'Zero formula errors or broken spreadsheet macros'
    ],
    roiMetric: 'Saves 18–25 staff hours per 100 client invoices monthly'
  },
  {
    id: 'notice-defense',
    slug: 'notice-defense-agent',
    category: 'Legal Workflow (02)',
    title: 'Notice Defense Agent',
    domain: 'Automated DRC-01C & ASMT-10 Reply Drafting',
    tag: 'Notice Defense',
    layoutClass: 'l-c',
    accentColor: '#f97316',
    posterBg: 'linear-gradient(135deg, #2a1d1b 0%, #150f0e 100%)',
    previewBadges: ['DRC-01C Defense', 'Evidence Compiler', 'CA Review Screen'],
    forms: ['ASMT-10', 'DRC-01C', 'DRC-01B', 'Form GST DRC-06'],
    problemSummary: 'Automated GSTN analytics trigger scrutiny notices with strict deadlines. Drafting replies by hand is time-consuming and prone to legal oversight.',
    problemDetails: 'The GST portal now automatically scans returns and shoots scrutiny notices whenever claimed ITC exceeds GSTR-2B. When a notice arrives, CA staff must scramble through historical files, compile vendor bills, compute Section 50 interest, and draft statutory defenses under strict 7 to 30-day deadlines.',
    howToolWorks: 'Teeor reads uploaded notice PDFs, extracts the demand amounts and discrepancy tables, cross-references historical supplier filings from client ledgers, and cites relevant statutory circulars (e.g. CBIC Circular No. 183/15/2022).',
    howItFixesThat: 'Auto-drafts a formal, legally structured Form GST DRC-06 reply with attached invoice proof and reconciliations. The draft is placed on a clean CA review screen for partner approval before dispatch.',
    caBenefits: [
      'Cuts notice response preparation from 4 days to 15 minutes',
      'Ensures statutory circular citations are accurate and compliant',
      'Human-in-the-loop: Nothing is submitted without explicit CA sign-off'
    ],
    roiMetric: 'Reduces legal drafting backlog to zero'
  },
  {
    id: 'vendor-chaser',
    slug: 'vendor-followup-loop',
    category: 'Communication (03)',
    title: 'Automated Vendor Chaser',
    domain: 'WhatsApp & Email Dispute Follow-up Loop',
    tag: 'Vendor Communication',
    layoutClass: 'l-c',
    accentColor: '#22c55e',
    posterBg: 'linear-gradient(135deg, #13241b 0%, #0a140f 100%)',
    previewBadges: ['WhatsApp Integration', 'One-Click Send', 'Filing Tracker'],
    forms: ['Supplier GSTR-1', 'B2B Missing Invoices', 'Credit Notes'],
    problemSummary: 'Clients lose tax credit because suppliers fail to upload invoices on time. Chasing vendors by phone or unstructured WhatsApp eats up days.',
    problemDetails: 'When a supplier forgets to file GSTR-1 by the 11th of the month, the buyer cannot claim ITC in GSTR-3B. CA trainees waste days manually calling suppliers or drafting individual WhatsApp messages to follow up, leading to strained vendor relations and lost working capital.',
    howToolWorks: 'The agent detects unfiled supplier lines from the reconciliation report and automatically compiles clean, branded WhatsApp and email follow-up notices with exact invoice numbers, dates, and missing tax credit amounts.',
    howItFixesThat: 'Staff can review and dispatch hundreds of vendor reminders in one click. The system logs vendor acknowledgments and updates filing status in real time as soon as the supplier uploads their GSTR-1.',
    caBenefits: [
      'Recovers lakhs in blocked working capital for client businesses',
      'Frees article trainees from endless chasing calls and emails',
      'Maintains a clean audit trail of all vendor communication'
    ],
    roiMetric: 'Recovers up to ₹18 Lakhs in blocked ITC per 100 clients'
  },
  {
    id: 'partner-hub',
    slug: 'partner-control-center',
    category: 'Firm Operations (04)',
    title: 'Partner Command Center',
    domain: 'Multi-Client Radar & Trainee Audit Trail',
    tag: 'Multi-Client Firm Hub',
    layoutClass: 'l-b',
    accentColor: '#a855f7',
    posterBg: 'linear-gradient(135deg, #1f1b2e 0%, #100e18 100%)',
    previewBadges: ['Practice Radar', 'Audit Trails', 'Role-Based Access'],
    forms: ['Consolidated Filings', 'All Client GSTINs', 'Audit Logs'],
    problemSummary: 'CA partners lack visibility into trainee progress, filing bottlenecks, and aggregate client tax credit exposure across dozens of entities.',
    problemDetails: 'In firms managing 50 to 500+ clients, partners are forced to ask article trainees for verbal updates or check multiple spreadsheets. There is no central visibility into total credit at risk, pending notices, or impending filing deadlines.',
    howToolWorks: 'Provides a partner-level command dashboard that aggregates all client entities in real time. Features filing readiness radars, trainee task queues, pending notice countdowns, and aggregate credit-at-risk heat maps.',
    howItFixesThat: 'Partners get an instant snapshot of firm-wide compliance health. Allows one partner with 2–3 trainees to smoothly manage hundreds of corporate clients with complete consistency and zero last-minute surprises.',
    caBenefits: [
      'Complete visibility across 50 to 1,500 client GSTINs in one view',
      'Strict role-based access: trainees prepare, partners approve',
      'Instant partner summaries for client monthly reviews'
    ],
    roiMetric: 'Enables 3x client volume growth without increasing staff headcount'
  },
  {
    id: 'accounting-sync',
    slug: 'accounting-software-ingestion',
    category: 'Data Pipeline (05)',
    title: 'Zero-Config Ingestion',
    domain: 'Tally Prime, Zoho Books & Indian Tax OCR',
    tag: 'Frictionless Ingestion',
    layoutClass: 'l-b',
    accentColor: '#eab308',
    posterBg: 'linear-gradient(135deg, #242217 0%, #13120d 100%)',
    previewBadges: ['Tally Native', 'Scanned OCR', 'Bank Narration AI'],
    forms: ['Tally XML', 'Zoho Books CSV', 'PDF Scans', 'WhatsApp Photos'],
    problemSummary: 'Clients provide messy data: paper bills, smartphone photos, corrupted Excel sheets, and varied accounting software exports.',
    problemDetails: 'Every client has different software or bookkeeping habits. Small businesses often send paper bills, handwritten challans, or WhatsApp photos. Manually standardizing this data before reconciliation takes up to 40% of the entire filing cycle.',
    howToolWorks: 'Multi-modal document pipeline with state-of-the-art Indian tax OCR. Automatically detects and verifies 15-digit GSTIN checksums, invoice numbers, tax slabs, HSN/SAC codes, and unstructured bank statement narrations.',
    howItFixesThat: 'Ingests Tally Prime XML, Zoho Books, Busy, or raw PDF/photo uploads directly. Normalizes all data into a standardized reconciliation schema with zero manual pre-formatting required.',
    caBenefits: [
      'No need to ask clients to change their accounting software or habits',
      'Handles messy smartphone photos and scanned PDFs seamlessly',
      'Direct GSTN GSP integration for automated portal return pulls'
    ],
    roiMetric: 'Eliminates 100% of pre-reconciliation data formatting'
  },
  {
    id: 'global-rules',
    slug: 'global-country-rules-packs',
    category: 'International (06)',
    title: 'Modular Country Rules',
    domain: 'India Beachhead & Indonesia Coretax Rollout',
    tag: 'Global Architecture',
    layoutClass: 'l-d',
    accentColor: '#06b6d4',
    posterBg: 'linear-gradient(135deg, #152329 0%, #0d1519 100%)',
    previewBadges: ['176 VAT Countries', 'Coretax Ready', 'Plug-in Engine'],
    forms: ['India GST/TDS', 'Indonesia Coretax (PPN)', 'Malaysia MyInvois', 'GCC VAT'],
    problemSummary: '176 countries run VAT or GST, all enforcing mandatory digital e-invoicing. Existing software is locked to single countries and legacy architecture.',
    problemDetails: 'Governments worldwide (Indonesia, Malaysia, UAE, Saudi Arabia, EU) are rolling out real-time e-invoicing mandates that automatically scrutinize tax credits. Accountants across Southeast Asia face the exact same manual matching crisis that Indian CAs face today.',
    howToolWorks: 'Teeor decouples the core matching and legal notice engine from regional tax rules. Country rules packs (forms, rates, statutory deadlines, local language) plug into the universal agent engine.',
    howItFixesThat: 'Allows rapid market expansion without rewriting core software. Operating with regional leadership on the ground in Jakarta (led by Luthfi) to support Indonesia’s newly launched Coretax system.',
    caBenefits: [
      'Built for multinational accounting consultancies with cross-border clients',
      'Ready for Indonesia Coretax PPN e-invoicing mandates',
      'One unified AI agent engine across Asia and the Middle East'
    ],
    roiMetric: 'Deploys a new country rules pack in under 4 weeks'
  }
];

export interface RegionalLead {
  country: string;
  regionRole: string;
  leadName: string;
  leadTitle: string;
  entity: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  focus: string;
}

export const REGIONAL_LEADS: RegionalLead[] = [
  {
    country: 'India',
    regionRole: 'HQ & Global Product',
    leadName: 'Kunsang Dorjay',
    leadTitle: 'Founder & India Lead',
    entity: 'Teeor Technologies',
    address: 'DLF Cyber City, Phase III & Indiranagar',
    city: 'Gurugram / Bengaluru, India',
    phone: '+91 98710 23490',
    email: 'kunsang@teeor.com',
    focus: 'Core AI Agent Engine, GSTN/GSP Connectors & CA Firm Relations'
  },
  {
    country: 'Indonesia',
    regionRole: 'Market Two · Southeast Asia',
    leadName: 'Luthfi',
    leadTitle: 'Regional Lead · Indonesia',
    entity: 'Teeor SEA Operations',
    address: 'Sudirman Central Business District (SCBD)',
    city: 'Jakarta Selatan 12190, Indonesia',
    phone: '+62 21 515 9021',
    email: 'luthfi@teeor.com',
    focus: 'Coretax E-Invoicing Rollout & Indonesian Konsultan Pajak Partnerships'
  }
];
