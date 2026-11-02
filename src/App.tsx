import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkSection } from './components/WorkSection';
import { BioSection } from './components/BioSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PlayerModal } from './components/PlayerModal';
import { Capability } from './data/capabilities';

export default function App() {
  const [activeTab, setActiveTab] = useState<'work' | 'bio' | 'contact'>('work');
  const [selectedCapability, setSelectedCapability] = useState<Capability | null>(null);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyPilotFromModal = () => {
    setSelectedCapability(null);
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
        <WorkSection onSelectCapability={(cap) => setSelectedCapability(cap)} />
        <BioSection />
        <ContactSection />
        <Footer />
      </main>

      {/* Capability Fullscreen Media Showcase Modal */}
      {selectedCapability && (
        <PlayerModal
          capability={selectedCapability}
          onClose={() => setSelectedCapability(null)}
          onApplyPilot={handleApplyPilotFromModal}
        />
      )}
    </div>
  );
}
