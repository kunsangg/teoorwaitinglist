import React, { useEffect, useRef } from 'react';

export interface WorkflowItem {
  id: string;
  category: string;
  title: string;
  context: string;
  layoutClass: 'l-d' | 'l-c' | 'l-b';
  videoUrl: string;
}

const WORKFLOWS: WorkflowItem[] = [
  {
    id: 'gst-recon',
    category: 'Agent Engine (01)',
    title: 'Autonomous Reconciliation',
    context: 'Matches thousands of purchase invoices against GSTR-2B; tolerates typos, date shifts & split lines to recover blocked Input Tax Credit.',
    layoutClass: 'l-d',
    videoUrl: '/videos/gst-recon.mp4'
  },
  {
    id: 'notice-defense',
    category: 'Legal Workflow (02)',
    title: 'DRC-01C & ASMT-10 Defense',
    context: 'Reads automated scrutiny notices, extracts discrepancy tables, and drafts statutory replies citing Section 16(2)(aa) circulars.',
    layoutClass: 'l-c',
    videoUrl: '/videos/notice-defense.mp4'
  },
  {
    id: 'vendor-chaser',
    category: 'Communication (03)',
    title: 'Automated Vendor Chaser',
    context: 'One-click WhatsApp & email follow-ups to delinquent suppliers with missing invoice details so client ITC is never blocked.',
    layoutClass: 'l-c',
    videoUrl: '/videos/vendor-chaser.mp4'
  },
  {
    id: 'partner-hub',
    category: 'Firm Operations (04)',
    title: 'Multi-Client Practice Hub',
    context: 'Central dashboard across 50 to 500 client GSTINs: total credit at risk, trainee task queues, and open notice deadlines in one view.',
    layoutClass: 'l-b',
    videoUrl: '/videos/partner-hub.mp4'
  },
  {
    id: 'accounting-sync',
    category: 'Data Pipeline (05)',
    title: 'Accounting Sync & OCR',
    context: 'Ingests Tally Prime XML, Zoho Books, Busy, and Indian tax OCR for messy paper bills & WhatsApp camera photos.',
    layoutClass: 'l-b',
    videoUrl: '/videos/accounting-sync.mp4'
  },
  {
    id: 'global-rules',
    category: 'Global Engine (06)',
    title: 'Plug-in Country Rules',
    context: 'Universal matching engine with localized packs: India GST beachhead, and Indonesia Coretax e-Faktur led on the ground by Luthfi.',
    layoutClass: 'l-d',
    videoUrl: '/videos/global-rules.mp4'
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
        {/* Row 1: l-d (Full Width: Autonomous Reconciliation) */}
        <div className="row l-d reveal-up">
          <WorkflowBlock item={WORKFLOWS[0]} onSelect={onSelectWorkflow} />
        </div>

        {/* Row 2: l-c (Asymmetric 2-Column: Legal Workflow + Vendor Chaser) */}
        <div className="row l-c reveal-up">
          <WorkflowBlock item={WORKFLOWS[1]} onSelect={onSelectWorkflow} />
          <WorkflowBlock item={WORKFLOWS[2]} onSelect={onSelectWorkflow} />
        </div>

        {/* Row 3: l-b (Inverted 2-Column: Firm Operations + Data Pipeline) */}
        <div className="row l-b reveal-up">
          <WorkflowBlock item={WORKFLOWS[3]} onSelect={onSelectWorkflow} />
          <WorkflowBlock item={WORKFLOWS[4]} onSelect={onSelectWorkflow} />
        </div>

        {/* Row 4: l-d (Full Width: Global Engine) */}
        <div className="row l-d reveal-up">
          <WorkflowBlock item={WORKFLOWS[5]} onSelect={onSelectWorkflow} />
        </div>
      </div>
    </section>
  );
};

interface WorkflowBlockProps {
  item: WorkflowItem;
  onSelect: (item: WorkflowItem) => void;
}

const WorkflowBlock: React.FC<WorkflowBlockProps> = ({ item, onSelect }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err: Error) => {
          if (err.name !== 'AbortError') {
            console.error('Video play interrupted:', err);
          }
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleClick = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onSelect(item);
  };

  return (
    <div
      key={item.id}
      className="block"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a>
        <div className="thumbnail">
          <video
            ref={videoRef}
            src={`${item.videoUrl}#t=0.001`}
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedMetadata={() => {
              if (videoRef.current && videoRef.current.paused && videoRef.current.currentTime === 0) {
                videoRef.current.currentTime = 0.001;
              }
            }}
          />
          <div className="thumbnail-gradient-overlay" />
        </div>

        <div className="title">
          <h3>
            <span>{item.category}</span>
            {item.title}
          </h3>
          <p className="desc">{item.context}</p>
        </div>
      </a>
    </div>
  );
};
