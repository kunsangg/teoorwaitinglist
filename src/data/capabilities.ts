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
    slug: 'rules-first-gst-reconciliation',
    category: 'Core Engine (01)',
    title: 'Rules-First GST Reconciliation',
    domain: 'GSTR-2B vs. Purchase Register Multi-Pass Match',
    tag: 'Deterministic & Fuzzy Matching',
    layoutClass: 'l-d',
    accentColor: '#10b981',
    posterBg: 'linear-gradient(135deg, #15222e 0%, #0c1219 100%)',
    previewBadges: ['Deterministic Rules', 'Explainable Fuzzy Match', 'Zero Silent Row Loss'],
    forms: ['GSTR-2B', 'GSTR-3B', 'Purchase Register (Tally / Zoho / Excel / CSV / JSON)'],
    problemSummary: 'Spreadsheets break on invoice prefix typos, date drift, and truncated numbers. Generic matching tools flag hundreds of false exceptions without explaining why.',
    problemDetails: 'Article assistants and accountants spend 20+ hours per client each month running manual VLOOKUPs between client purchase ledgers and GSTR-2B downloads. Differences in invoice numbering (e.g., INV-042 vs 042), date drift, or decimal rounding produce unhelpful "unmatched" rows. Staff waste critical days manually investigating false flags before the monthly close deadline.',
    howToolWorks: 'Teoor runs a rules-first matching engine that prioritizes deterministic exact and normalized keys (stripping special characters, leading zeros, and casing differences while preserving original raw values for audit). Controlled fuzzy algorithms propose match candidates with explicit confidence bands and transparent comparison rationale.',
    howItFixesThat: 'Reconciles thousands of lines in seconds with 100% row accounting (every input row is accounted for as matched, mismatched, or excluded). Automatically distinguishes confirmed exact matches from reviewable suggestions, giving reviewers complete visibility and control.',
    caBenefits: [
      'Eliminates 70–80% of repetitive spreadsheet formula matching',
      'Transparent match reasons: see exactly why every pair was suggested',
      'Complete row accounting with zero silent row loss or omitted records',
      'Strict human control: no ambiguous fuzzy candidate is auto-accepted'
    ],
    roiMetric: 'Saves 15–22 staff hours per 100 client invoices monthly'
  },
  {
    id: 'notice-defense',
    slug: 'notice-intelligence-workspace',
    category: 'Notice Workspace (02)',
    title: 'Notice Intelligence & Case Workspace',
    domain: 'DRC-01C, DRC-01B & ASMT-10 Evidence Assembly',
    tag: 'Evidence-Linked Drafting',
    layoutClass: 'l-c',
    accentColor: '#f97316',
    posterBg: 'linear-gradient(135deg, #2a1d1b 0%, #150f0e 100%)',
    previewBadges: ['DRC-01C & ASMT-10', 'Evidence Chronology', 'CA Review Gate'],
    forms: ['Form GST DRC-01C', 'Form GST DRC-01B', 'ASMT-10 / ASMT-11', 'Form GST DRC-06'],
    problemSummary: 'Automated GST scrutiny intimations carry strict statutory deadlines. Gathering historical invoices, proof of payment, and circulars across periods leads to last-minute scramble.',
    problemDetails: 'Departmental analytics issue automated intimations (such as DRC-01C for GSTR-2B vs 3B differences or ASMT-10 scrutiny notices under Rule 99) with strict response windows. CA staff must locate historical reconciliations, verify supplier filings, compute interest where applicable, and assemble supporting evidence across disconnected spreadsheets and folders.',
    howToolWorks: 'Ingests notice documents, classifies the allegation type against verified statutory rules, and automatically links historical client reconciliations, supplier filing records, and evidence files. Pre-assembles factual discrepancy tables grounded in CBIC circulars (e.g. Circular 183/15/2022).',
    howItFixesThat: 'Generates a structured, source-grounded response draft where every factual claim is linked to an underlying invoice and every legal citation is verified. The draft is placed in a CA review queue for partner editing, sign-off, and manual submission.',
    caBenefits: [
      'Converts multi-day document searches into a unified evidence chronology',
      'Verified statutory response deadlines and reminder schedules',
      '100% Human-in-the-Loop: zero autonomous filing or unreviewed department replies',
      'Audit-proof trail of evidence attached directly to the case'
    ],
    roiMetric: 'Reduces notice evidence compilation time by up to 75%'
  },
  {
    id: 'vendor-chaser',
    slug: 'vendor-exception-followup',
    category: 'Resolution Loop (03)',
    title: 'Vendor Discrepancy & Follow-Up Queue',
    domain: 'Vendor-Wise Action Queue & Communication Log',
    tag: 'Exception Resolution',
    layoutClass: 'l-c',
    accentColor: '#22c55e',
    posterBg: 'linear-gradient(135deg, #13241b 0%, #0a140f 100%)',
    previewBadges: ['Vendor Action Queue', 'Approved Drafts', 'Carry-Forward History'],
    forms: ['Supplier GSTR-1 Delinquency', 'B2B Missing Invoices', 'Credit/Debit Note Differences'],
    problemSummary: 'Reconciliation reports only show what is missing; they do not fix it. Chasing delinquent suppliers via unorganized phone calls and WhatsApp threads leaves no trace of resolution.',
    problemDetails: 'When a supplier omits an invoice from GSTR-1, the buyer cannot claim ITC in GSTR-3B without scrutiny risk. Staff spend days manually texting or calling vendors, but the follow-up history is lost in personal phones. Months later, teams repeat the same investigation without knowing whether the vendor ever filed.',
    howToolWorks: 'Aggregates unfiled or mismatched invoices by supplier GSTIN. Prepares factual, vendor-wise discrepancy summaries and generates editable WhatsApp and email drafts with precise invoice numbers, dates, and tax variance figures.',
    howItFixesThat: 'Staff reviews and sends approved communications directly. Tracks communication timestamps, follow-up logs, and carries unresolved items forward into future periods with persistent case IDs until confirmed in subsequent GSTR-2B cycles.',
    caBenefits: [
      'Turns static reconciliation mismatch lists into assigned, trackable tasks',
      'Vendor-wise discrepancy summaries generated in one click for review',
      'Preserves cross-month audit history: never lose context on carried-forward items',
      'Maintains clear staff accountability and maker-checker approval'
    ],
    roiMetric: 'Prioritizes high-value open exceptions across all suppliers'
  },
  {
    id: 'partner-hub',
    slug: 'multi-client-partner-dashboard',
    category: 'Practice Operations (04)',
    title: 'Multi-Client Partner Dashboard',
    domain: 'Cross-Client Oversight, Exception Ageing & Audit Trail',
    tag: 'Partner Oversight',
    layoutClass: 'l-b',
    accentColor: '#a855f7',
    posterBg: 'linear-gradient(135deg, #1f1b2e 0%, #100e18 100%)',
    previewBadges: ['Multi-Client Radar', 'Exception Ageing', 'Maker-Checker Audit'],
    forms: ['All Client GSTINs', 'Monthly Return Cycles', 'Immutable Event Logs'],
    problemSummary: 'Partners supervising dozens of client GSTINs lack instant visibility into which client files are blocked, who owns open exceptions, and what tax amounts remain at risk.',
    problemDetails: 'In firms managing 50 to 300+ GST clients across article assistants and accountants, partners rely on verbal hallway updates or fragmented workbooks. There is no central view showing which clients have unreviewed matches, open vendor follow-ups, or approaching statutory deadlines.',
    howToolWorks: 'Provides a consolidated operational dashboard showing client-wise filing status, open exception volume, aggregate tax amounts under review, case ageing, and staff workload assignments in real time.',
    howItFixesThat: 'Partners and managers can filter by GSTIN, return period, staff owner, or exception value. Full maker-checker controls allow staff to prepare reconciliations while partners review and sign off before export.',
    caBenefits: [
      'Instant visibility across 50 to 300+ client GST registrations in one screen',
      'Maker-checker governance: staff prepares, senior CA reviews and signs off',
      'Immutable event log: tracks every file upload, match override, and export',
      'Clean client-ready summary reports for monthly partner reviews'
    ],
    roiMetric: 'Enables 2–3x client capacity per partner with complete oversight'
  },
  {
    id: 'accounting-sync',
    slug: 'source-neutral-data-intake',
    category: 'Data Pipeline (05)',
    title: 'Source-Neutral Intake & Validation',
    domain: 'Tally Prime, Zoho Books & Custom Excel/CSV Mapping',
    tag: 'Guided Ingestion',
    layoutClass: 'l-b',
    accentColor: '#eab308',
    posterBg: 'linear-gradient(135deg, #242217 0%, #13120d 100%)',
    previewBadges: ['Tally & Zoho Ready', 'Smart Column Mapper', 'Row Validation Engine'],
    forms: ['Tally Prime XML / Excel', 'Zoho Books CSV', 'GSTN JSON / Excel', 'Custom Registers'],
    problemSummary: 'Client purchase registers arrive in inconsistent formats, strange column layouts, and missing fields. Cleaning spreadsheets manually burns up to 30% of staff time.',
    problemDetails: 'Different clients use different accounting software, custom Excel templates, or varied column headings. When staff import these files into rigid tools, imports fail silently or produce garbled results, forcing staff to manually copy-paste and reformat tables.',
    howToolWorks: 'A guided intake layer automatically inspects uploaded files (.xlsx, .csv, GSTN .json), identifies sheets and columns, flags missing required fields (GSTIN, invoice number, date, taxable value, tax components), and provides an interactive column-mapping preview.',
    howItFixesThat: 'Saves reusable mapping profiles per client and source system. Validates 15-digit GSTIN checksums and flags invalid rows with downloadable error reports before matching begins, ensuring zero silent row loss.',
    caBenefits: [
      'Works seamlessly with existing Tally, Zoho, and custom Excel exports',
      'No client migration required: respect the client’s existing accounting software',
      'Reusable column mappings save hours on recurring monthly uploads',
      'Downloadable row-level validation reports for immediate correction'
    ],
    roiMetric: 'Eliminates 90% of pre-reconciliation spreadsheet cleaning'
  },
  {
    id: 'global-rules',
    slug: 'modular-tax-rules-architecture',
    category: 'Core Architecture (06)',
    title: 'Modular Rules Architecture',
    domain: 'India GST Beachhead with Decoupled Country Rules Engine',
    tag: 'Modular Architecture',
    layoutClass: 'l-d',
    accentColor: '#06b6d4',
    posterBg: 'linear-gradient(135deg, #152329 0%, #0d1519 100%)',
    previewBadges: ['India GST Beachhead', 'Decoupled Rules Engine', 'SEA Expansion Ready'],
    forms: ['India CGST/SGST/IGST', 'Indonesia Coretax (PPN)', 'Malaysia MyInvois', 'GCC VAT'],
    problemSummary: 'Legacy tax software is hardcoded to single jurisdictions. As e-invoicing and real-time reconciliation spread globally, systems struggle to adapt.',
    problemDetails: 'Tax administrations worldwide are enforcing mandatory e-invoicing and digital return scrutiny. Most tax software is tightly coupled to specific legacy tax portals, making adaptation to regulatory updates slow, fragile, and geographically constrained.',
    howToolWorks: 'Teoor decouples the core matching algorithms, exception lifecycle, and communication primitives from jurisdiction-specific tax rules. Regional tax configurations (statutory forms, tax slabs, deadlines, language) plug in as independent, versioned rule packs.',
    howItFixesThat: 'Built with an India-first focus on deep CA-firm GST workflows, with an architectural foundation designed to expand into Southeast Asian e-invoicing systems (such as Indonesia’s Coretax rollout led on the ground by Luthfi).',
    caBenefits: [
      'Architected for rapid updates whenever CBIC issues new rules or forms',
      'Clean separation of matching logic, audit logs, and statutory legal packs',
      'Future-ready for multinational consultancies managing regional clients',
      'Rigorous rule versioning with effective date governance and test suites'
    ],
    roiMetric: 'Enables rapid regulatory updates without breaking firm workflows'
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
    leadName: 'Kunsang Dorjay & Ayush Khati (CTO)',
    leadTitle: 'Leadership · India HQ',
    entity: 'Teoor Technologies',
    address: 'Darjeeling, West Bengal',
    city: 'Darjeeling, West Bengal, India',
    phone: '+91 82503 41785',
    email: 'kunsang@teoor.com',
    focus: 'Core GST Operations Engine, Rule Packs & CA Firm Partnerships'
  },
  {
    country: 'Indonesia',
    regionRole: 'Market Two · Southeast Asia',
    leadName: 'Luthfi',
    leadTitle: 'Regional Lead · Indonesia',
    entity: 'Teoor SEA Operations',
    address: 'Jakarta, Indonesia',
    city: 'Jakarta, Indonesia',
    phone: '+62 87834568586',
    email: 'luthfi@teoor.com',
    focus: 'Coretax E-Invoicing Architecture & Konsultan Pajak Discovery'
  }
];
