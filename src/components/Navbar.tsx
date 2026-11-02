import React from 'react';

interface NavbarProps {
  activeTab: 'work' | 'bio' | 'contact';
  setActiveTab: (tab: 'work' | 'bio' | 'contact') => void;
  onScrollTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onScrollTo }) => {
  return (
    <nav id="a-menu" aria-label="Main Navigation">
      <ul>
        <div className="nav-left">
          <li>
            <a
              className={activeTab === 'bio' ? 'is-active' : ''}
              onClick={() => {
                setActiveTab('bio');
                onScrollTo('s-bio');
              }}
            >
              Bio / Mission
            </a>
          </li>
          <li>
            <a
              className={activeTab === 'work' ? 'is-active' : ''}
              onClick={() => {
                setActiveTab('work');
                onScrollTo('s-work');
              }}
            >
              Capabilities
            </a>
          </li>
        </div>

        <div className="nav-right">
          <li>
            <a
              className={activeTab === 'contact' ? 'is-active' : ''}
              onClick={() => {
                setActiveTab('contact');
                onScrollTo('s-contact');
              }}
            >
              Apply for Pilot (10 Firms) →
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};
