import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkSection } from './components/WorkSection';
import { BioSection } from './components/BioSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PlayerModal } from './components/PlayerModal';
import { DomainWorkflow } from './data/capabilities';

export default function App() {
  const [activeTab, setActiveTab] = useState<'work' | 'bio' | 'contact'>('work');
  const [selectedWorkflow, setSelectedWorkflow] = useState<DomainWorkflow | null>(null);

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
    <div className="a-main" style={{ width: '100%', overflowX: 'hidden' }}>
      {/* Persistent Exo Ape / alitwotimes style navigation bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onScrollTo={handleScrollTo}
      />

      {/* Main Page Flow */}
      <main id="a-scroll">
        <Hero />
        <WorkSection onSelectCapability={(wf) => setSelectedWorkflow(wf)} />
        <BioSection />
        <ContactSection />
        <Footer />
      </main>

      {/* Domain Workflow Deep-Dive Modal */}
      {selectedWorkflow && (
        <PlayerModal
          capability={selectedWorkflow}
          onClose={() => setSelectedWorkflow(null)}
          onApplyPilot={handleApplyPilotFromModal}
        />
      )}
    </div>
  );
}
