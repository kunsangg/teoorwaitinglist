import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onScrollTo: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollTo }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="a-menu" className={scrolled ? 'scrolled' : ''} aria-label="Main Navigation">
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
