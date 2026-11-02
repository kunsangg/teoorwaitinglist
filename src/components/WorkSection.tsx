import React, { useEffect, useRef } from 'react';

export interface WorkflowItem {
  id: string;
  category: string;
  title: string;
  context: string;
  layoutClass: 'l-d' | 'l-c' | 'l-b';
  mediaUrl?: string;
  videoUrl?: string;
}

export const WORKFLOWS: WorkflowItem[] = [
  {
    id: 'gst-recon',
    category: 'Agent Engine (01)',
    title: 'Autonomous Reconciliation',
    context: 'Matches thousands of purchase invoices against GSTR-2B; tolerates typos, date shifts & split lines to recover blocked Input Tax Credit.',
    layoutClass: 'l-d'
  },
  {
    id: 'notice-defense',
    category: 'Legal Workflow (02)',
    title: 'DRC-01C & ASMT-10 Defense',
    context: 'Reads automated scrutiny notices, extracts discrepancy tables, and drafts statutory replies citing Section 16(2)(aa) circulars.',
    layoutClass: 'l-c'
  },
  {
    id: 'vendor-chaser',
    category: 'Communication (03)',
    title: 'Automated Vendor Chaser',
    context: 'One-click WhatsApp & email follow-ups to delinquent suppliers with missing invoice details so client ITC is never blocked.',
    layoutClass: 'l-c'
  },
  {
    id: 'partner-hub',
    category: 'Firm Operations (04)',
    title: 'Multi-Client Practice Hub',
    context: 'Central dashboard across 50 to 500 client GSTINs: total credit at risk, trainee task queues, and open notice deadlines in one view.',
    layoutClass: 'l-b'
  },
  {
    id: 'accounting-sync',
    category: 'Data Pipeline (05)',
    title: 'Accounting Sync & OCR',
    context: 'Ingests Tally Prime XML, Zoho Books, Busy, and Indian tax OCR for messy paper bills & WhatsApp camera photos.',
    layoutClass: 'l-b'
  },
  {
    id: 'global-rules',
    category: 'Global Engine (06)',
    title: 'Plug-in Country Rules',
    context: 'Universal matching engine with localized packs: India GST beachhead, and Indonesia Coretax e-Faktur led on the ground by Luthfi.',
    layoutClass: 'l-d'
  }
];

interface WorkSectionProps {
  onSelectWorkflow: (item: WorkflowItem) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectWorkflow }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-up');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="s-work" ref={sectionRef}>
      <div className="head reveal-up">
        <h2 className="f-8">Selected Work</h2>
      </div>

      <div className="projects">
        {/* Row 1: l-d (Full Width) */}
        <div className="row l-d reveal-up">
          {renderBlock(WORKFLOWS[0], onSelectWorkflow)}
        </div>

        {/* Row 2: l-c (Asymmetric 2-Column: 7 / 5) */}
        <div className="row l-c reveal-up">
          {renderBlock(WORKFLOWS[1], onSelectWorkflow)}
          {renderBlock(WORKFLOWS[2], onSelectWorkflow)}
        </div>

        {/* Row 3: l-b (Inverted 2-Column: 5 / 7) */}
        <div className="row l-b reveal-up">
          {renderBlock(WORKFLOWS[3], onSelectWorkflow)}
          {renderBlock(WORKFLOWS[4], onSelectWorkflow)}
        </div>

        {/* Row 4: l-d (Full Width) */}
        <div className="row l-d reveal-up">
          {renderBlock(WORKFLOWS[5], onSelectWorkflow)}
        </div>
      </div>
    </section>
  );
};

function renderBlock(item: WorkflowItem, onSelect: (item: WorkflowItem) => void) {
  return (
    <div key={item.id} className="block" onClick={() => onSelect(item)}>
      <a>
        <div className="title">
          <h3>
            <span>{item.category}</span>
            {item.title}
          </h3>
          <p className="desc">{item.context}</p>
        </div>
        <div className="thumbnail">
          {/* Empty clean media container, ready for image or video drop-in later */}
          {item.mediaUrl && <img src={item.mediaUrl} alt={item.title} />}
          {item.videoUrl && (
            <video src={item.videoUrl} loop muted autoPlay playsInline />
          )}
        </div>
      </a>
    </div>
  );
}
