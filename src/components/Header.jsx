import React, { useState } from 'react';

export default function Header({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header-nav">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-container" onClick={() => handleNavClick('home')}>
          <div className="logo-icon neo-raised">
            <svg width="22" height="22" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Alphecci AP monogram">
              <line x1="13" y1="87" x2="54" y2="13" stroke="#d19200" strokeWidth="9.5" strokeLinecap="round"/>
              <line x1="54" y1="13" x2="54" y2="87" stroke="#d19200" strokeWidth="9.5" strokeLinecap="round"/>
              <path d="M54,13 Q88,13 88,40 Q88,63 54,63" stroke="#d19200" strokeWidth="9.5" strokeLinecap="round" fill="none"/>
              <line x1="34" y1="47" x2="54" y2="47" stroke="#d19200" strokeWidth="9.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="logo-text">
            ALPHECCI<span className="text-gold">.</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-btn ${activePage === item.id ? 'active' : 'inactive'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Nav Toggle Button */}
        <button
          className="mobile-toggle-btn neo-raised"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown-container animate-fade-in">
          <nav className="mobile-nav container neo-sunken">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`mobile-nav-btn ${activePage === item.id ? 'active' : 'inactive'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Inline styles for Header Component structure */}
      <style>{`
        .header-nav {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          background: var(--bg-header);
          backdrop-filter: blur(16px);
          border: 1px solid var(--border-gold);
          padding: 10px 24px;
          border-radius: var(--border-radius-full);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08), 4px 4px 15px var(--shadow-dark), -4px -4px 15px var(--shadow-light);
          width: 90%;
          max-width: 900px;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .logo-icon {
          width: 38px;
          height: 38px;
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: var(--bg-card);
        }

        .logo-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--gold-primary);
          box-shadow: 0 0 10px var(--gold-primary);
        }

        .logo-text {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--text-primary);
        }

        .desktop-nav {
          display: flex;
          gap: 16px;
        }

        .nav-btn {
          padding: 10px 22px;
          border-radius: var(--border-radius-full);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          outline: none;
          transition: var(--transition-bounce);
          border: 1px solid rgba(255, 255, 255, 0.02);
        }

        .nav-btn.inactive {
          background: var(--bg-card);
          color: var(--text-secondary);
          box-shadow: 3px 3px 8px var(--shadow-dark), -3px -3px 8px var(--shadow-light);
        }

        .nav-btn.inactive:hover {
          color: var(--gold-primary);
          transform: translateY(-2px);
          box-shadow: 4px 4px 12px var(--shadow-dark), -4px -4px 12px var(--shadow-light), 0 0 10px rgba(255, 204, 51, 0.1);
        }

        .nav-btn.active {
          background: var(--bg-main);
          color: var(--gold-primary);
          box-shadow: var(--shadow-inset-dark), var(--shadow-inset-light), 0 0 5px rgba(255, 204, 51, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.25);
        }

        .mobile-toggle-btn {
          display: none;
          width: 44px;
          height: 44px;
          border-radius: var(--border-radius-sm);
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.02);
          background: var(--bg-card);
        }

        .mobile-toggle-btn:active {
          box-shadow: var(--shadow-inset-dark), var(--shadow-inset-light);
        }

        .hamburger {
          width: 20px;
          height: 14px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .hamburger span {
          display: block;
          height: 2px;
          width: 100%;
          background: var(--text-secondary);
          border-radius: 9px;
          opacity: 1;
          transition: .25s ease-in-out;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
          background: var(--gold-primary);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
          background: var(--gold-primary);
        }

        .mobile-dropdown-container {
          position: absolute;
          bottom: 74px;
          left: 0;
          right: 0;
          padding: 0;
          z-index: 99;
          background: transparent;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 20px;
          border-radius: var(--border-radius-md);
          background: var(--bg-card);
          border: 1px solid var(--border-gold);
          box-shadow: 0 -10px 25px rgba(0, 0, 0, 0.08), 6px 6px 15px var(--shadow-dark), -6px -6px 15px var(--shadow-light);
        }

        .mobile-nav-btn {
          width: 100%;
          padding: 12px 20px;
          border-radius: var(--border-radius-md);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1rem;
          text-align: left;
          cursor: pointer;
          border: none;
          transition: var(--transition-smooth);
        }

        .mobile-nav-btn.inactive {
          background: transparent;
          color: var(--text-secondary);
        }

        .mobile-nav-btn.inactive:hover {
          color: var(--gold-primary);
          background: rgba(255, 255, 255, 0.02);
        }

        .mobile-nav-btn.active {
          background: var(--bg-card);
          color: var(--gold-primary);
          box-shadow: 4px 4px 10px var(--shadow-dark), -4px -4px 10px var(--shadow-light);
          border: 1px solid rgba(255, 204, 51, 0.1);
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle-btn {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
