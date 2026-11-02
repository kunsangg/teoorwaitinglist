import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkSection, WorkflowItem } from './components/WorkSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PlayerModal } from './components/PlayerModal';

export default function App() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<WorkflowItem | null>(null);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyPilotFromModal = () => {
    setSelectedWorkflow(null);
    setTimeout(() => {
      handleScrollTo('s-contact');
    }, 150);
  };

  return (
    <div className="a-main" id="a-main">
      {/* Floating Navigation: Work & Apply Now */}
      <Navbar onScrollTo={handleScrollTo} />

      {/* Main Page Content */}
      <main id="a-scroll">
        <Hero />
        <WorkSection onSelectWorkflow={(item) => setSelectedWorkflow(item)} />
        <ContactSection />
        <Footer />
      </main>

      {/* Fullscreen Workflow Detail Modal */}
      {selectedWorkflow && (
        <PlayerModal
          workflow={selectedWorkflow}
          onClose={() => setSelectedWorkflow(null)}
          onApplyPilot={handleApplyPilotFromModal}
        />
      )}
    </div>
  );
}
