import React from 'react';

export default function Footer({ setActivePage }) {
  const handleQuickLink = (pageId) => {
    if (typeof setActivePage === 'function') {
      setActivePage(pageId);
    }
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      window.scrollTo(0, 0);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        {/* Brand Column */}
        <div className="footer-col brand-col animate-fade-in">
          <div className="logo-container" onClick={() => handleQuickLink('home')} style={{ cursor: 'pointer' }}>
            <div className="logo-icon neo-raised">
              <span className="logo-dot"></span>
            </div>
            <span className="logo-text">ALPHECCI<span className="text-gold">.</span></span>
          </div>
          <p className="brand-tagline">
            Designing and engineering next-generation digital products. Empowering forward-thinking enterprises with cutting-edge tech.
          </p>
          <div className="social-links-row">
            {[
              { id: 'twitter', url: 'https://twitter.com' },
              { id: 'github', url: 'https://github.com/abday-wong' },
              { id: 'linkedin', url: 'https://linkedin.com/in/abday-wong' },
              { id: 'instagram', url: 'https://instagram.com' }
            ].map((platform) => (
              <a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn neo-raised"
                aria-label={`Visit our ${platform.id} page`}
              >
                <i className={`fab fa-${platform.id}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Column */}
        <div className="footer-col links-col">
          <h4 className="footer-title">Explorer</h4>
          <ul className="footer-links-list">
            <li><button onClick={() => handleQuickLink('home')}>Home Overview</button></li>
            <li><button onClick={() => handleQuickLink('services')}>Services & Core</button></li>
            <li><button onClick={() => handleQuickLink('portfolio')}>Case Studies</button></li>
            <li><button onClick={() => handleQuickLink('about')}>Who We Are</button></li>
            <li><button onClick={() => handleQuickLink('contact')}>Start a Project</button></li>
          </ul>
        </div>

        {/* Services Highlight Column */}
        <div className="footer-col links-col">
          <h4 className="footer-title">Expertise</h4>
          <ul className="footer-links-list">
            <li><button onClick={() => handleQuickLink('services')}>UI/UX & Product Design</button></li>
            <li><button onClick={() => handleQuickLink('services')}>Custom Software Dev</button></li>
            <li><button onClick={() => handleQuickLink('services')}>AI & Intelligent Systems</button></li>
            <li><button onClick={() => handleQuickLink('services')}>Digital Transformation</button></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="footer-col contact-col">
          <h4 className="footer-title">Get In Touch</h4>
          <ul className="footer-contact-list">
            <li>
              <div className="contact-icon-box neo-sunken">
                <i className="fas fa-envelope text-gold"></i>
              </div>
              <span>abday.hafidz23@gmail.com</span>
            </li>
            <li>
              <div className="contact-icon-box neo-sunken">
                <i className="fas fa-phone-alt text-gold"></i>
              </div>
              <span>+62 85891674061</span>
            </li>
            <li>
              <div className="contact-icon-box neo-sunken">
                <i className="fas fa-map-marker-alt text-gold"></i>
              </div>
              <span>Perum Puri Rajeg, Satria 7th Street No. 10<br />LembangSari, Tangerang, Banten, Indonesia</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom copyright and divider */}
      <div className="container footer-bottom">
        <div className="divider neo-sunken"></div>
        <div className="footer-bottom-flex">
          <p>© {currentYear} Alphecci. All rights reserved.</p>
          <div className="footer-legal-links">
            <button onClick={() => handleQuickLink('privacy')} className="legal-link-btn">Privacy Policy</button>
            <span className="dot-separator">•</span>
            <button onClick={() => handleQuickLink('terms')} className="legal-link-btn">Terms of Service</button>
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          background: var(--bg-main);
          border-top: 1px solid rgba(255, 204, 51, 0.05);
          padding: 80px 0 40px;
          margin-top: auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .brand-col {
          max-width: 320px;
        }

        .brand-tagline {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .social-links-row {
          display: flex;
          gap: 14px;
          margin-top: 8px;
        }

        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-card);
          color: var(--text-secondary);
          border: 1px solid rgba(255, 255, 255, 0.02);
          transition: var(--transition-bounce);
          font-size: 1.1rem;
        }

        .social-btn:hover {
          color: var(--gold-primary);
          transform: translateY(-3px);
          box-shadow: 4px 4px 10px var(--shadow-dark), -4px -4px 10px var(--shadow-light), 0 0 10px var(--gold-glow);
          border-color: rgba(255, 204, 51, 0.2);
        }

        .social-btn:active {
          box-shadow: var(--shadow-inset-dark), var(--shadow-inset-light);
          transform: translateY(0);
        }

        .footer-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          position: relative;
          padding-bottom: 8px;
          border-bottom: 2px solid rgba(255, 204, 51, 0.1);
          width: fit-content;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links-list button {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 0.95rem;
          text-align: left;
          cursor: pointer;
          transition: var(--transition-smooth);
          font-family: var(--font-sans);
          outline: none;
        }

        .footer-links-list button:hover {
          color: var(--gold-primary);
          padding-left: 6px;
        }

        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .contact-icon-box {
          width: 32px;
          height: 32px;
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          flex-shrink: 0;
          background: var(--bg-main);
          border: 1px solid rgba(0, 0, 0, 0.15);
        }

        .divider {
          height: 4px;
          width: 100%;
          margin-bottom: 30px;
          border-radius: var(--border-radius-full);
          background: var(--bg-main);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .footer-bottom {
          display: flex;
          flex-direction: column;
          padding-bottom: 70px; /* Push legal links above the floating bottom navbar */
        }

        .footer-bottom-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .footer-legal-links {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .legal-link-btn {
          background: none;
          border: none;
          color: inherit;
          font: inherit;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .legal-link-btn:hover {
          color: var(--gold-primary);
        }

        .dot-separator {
          color: var(--text-muted);
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .footer-bottom-flex {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
