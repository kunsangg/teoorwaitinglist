import React from 'react';

interface NavbarProps {
  onScrollTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollTo }) => {
  return (
    <nav id="a-menu" aria-label="Main Navigation">
      <ul>
        <div className="nav-left">
          <li>
            <a onClick={() => onScrollTo('s-work')}>Work</a>
          </li>
        </div>

        <div className="nav-right">
          <li>
            <a onClick={() => onScrollTo('s-contact')}>Apply Now →</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};
