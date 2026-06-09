import React, { useState } from 'react';

export default function Home({ setActivePage }) {
  const stats = [
    { number: '48+', label: 'Delivered Projects' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '15+', label: 'Industry Awards' },
    { number: '24/7', label: 'Dedicated Support' }
  ];

  const features = [
    {
      icon: 'fa-compass',
      title: 'Strategic Architecture',
      desc: 'We map every user flow and tech decision to core business objectives, ensuring scalability and user delight.'
    },
    {
      icon: 'fa-cubes',
      title: 'High-Fidelity Engineering',
      desc: 'Clean codebases built on React, Node, and Python. We prioritize clean architectures and robust testing.'
    },
    {
      icon: 'fa-bolt',
      title: 'Intelligent Automation',
      desc: 'Integrating cognitive features and data workflows using modern AI APIs and customized models.'
    }
  ];

  // Interactive Dashboard States
  const [capacity, setCapacity] = useState(85);
  const [secureNode, setSecureNode] = useState(true);
  const [cloudSync, setCloudSync] = useState(true);

  // Dynamic Performance Score Calculation
  const calculatePerformance = () => {
    let score = 0;
    if (secureNode) score += 45;
    if (cloudSync) score += 25;
    
    // Capacity input contributes up to 30%. Optimum is 80-90%.
    // If it reaches 100%, it overheats and reduces efficiency slightly.
    let capacityScore = (capacity / 100) * 30;
    if (capacity > 90) {
      capacityScore -= (capacity - 90) * 0.6; // penalty for overhead overload
    }
    score += Math.max(0, Math.round(capacityScore));
    return Math.min(100, score);
  };

  const performanceScore = calculatePerformance();

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="section hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="accent-badge">Next-Gen Digital Studio</span>
            <h1 className="hero-title">
              DECODING THE <span className="text-gradient">FUTURE</span> OF TECHNOLOGY
            </h1>
            <p className="hero-desc">
              Aethera Tech Studio designs and engineers premium digital products. We synthesize high-fidelity UI/UX design with robust custom software architectures.
            </p>
            <div className="hero-cta-group">
              <button 
                onClick={() => setActivePage('contact')} 
                className="neo-btn neo-btn-primary"
              >
                Start a Project <i className="fas fa-arrow-right"></i>
              </button>
              <button 
                onClick={() => setActivePage('services')} 
                className="neo-btn neo-btn-secondary"
              >
                Our Services
              </button>
            </div>
          </div>

          {/* Interactive Neomorphic Graphic Panel */}
          <div className="hero-visual">
            <div className="neo-raised visual-dashboard">
              <div className="visual-header">
                <div className="window-dots">
                  <span className="dot dot-r"></span>
                  <span className="dot dot-y"></span>
                  <span className="dot dot-g"></span>
                </div>
                <div className="visual-tab neo-sunken">system_status: online</div>
              </div>
              <div className="visual-body">
                {/* Neomorphic Metric Circle */}
                <div className="metric-circle-container">
                  <div className="outer-ring neo-raised">
                    <div className="inner-ring neo-sunken">
                      <div className="glowing-value">
                        <span className="number">{performanceScore}</span>
                        <span className="percent">%</span>
                      </div>
                      <span className="label">PERFORMANCE</span>
                    </div>
                  </div>
                </div>

                {/* Neomorphic Controls (Toggles, Sliders) */}
                <div className="controls-box">
                  <div className="slider-row">
                    <div className="slider-label">
                      <span>Neural Process Capacity</span>
                      <span className="text-gold">{capacity}%</span>
                    </div>
                    <div className="range-container" style={{ paddingTop: '0px' }}>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={capacity}
                        onChange={(e) => setCapacity(Number(e.target.value))}
                        className="neo-range-slider"
                        style={{ height: '8px' }}
                      />
                    </div>
                  </div>

                  <div className="toggle-row">
                    <div 
                      className="toggle-item" 
                      onClick={() => setSecureNode(!secureNode)}
                      style={{ cursor: 'pointer' }}
                    >
                      <span className="toggle-label">Secure Node Link</span>
                      <div className={`toggle-switch neo-sunken ${secureNode ? 'active' : ''}`}>
                        <span className="toggle-knob neo-raised"></span>
                      </div>
                    </div>
                    <div 
                      className="toggle-item" 
                      onClick={() => setCloudSync(!cloudSync)}
                      style={{ cursor: 'pointer' }}
                    >
                      <span className="toggle-label">Cloud Syncing</span>
                      <div className={`toggle-switch neo-sunken ${cloudSync ? 'active' : ''}`}>
                        <span className="toggle-knob neo-raised"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className={`stat-card neo-raised reveal delay-${(i + 1) * 100}`}>
                <h3 className="stat-number text-gold">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section principles-section">
        <div className="container">
          <div className="section-header">
            <span className="accent-badge">Our Methodology</span>
            <h2>ENGINEERED FOR EXCELLENCE</h2>
            <p className="section-subtitle">
              We leverage an agile, user-centered framework to deliver digital systems that are fast, secure, and beautiful.
            </p>
          </div>

          <div className="principles-grid">
            {features.map((feat, i) => (
              <div key={i} className={`principle-card neo-raised-interactive reveal delay-${(i + 1) * 100}`}>
                <div className="icon-wrapper neo-sunken">
                  <i className={`fas ${feat.icon} text-gold`}></i>
                </div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box neo-raised reveal">
            <div className="cta-content">
              <h2>READY TO MATERIALIZE YOUR DIGITAL VISION?</h2>
              <p>
                Get in touch with us today. Let’s construct a software solution customized specifically for your business growth.
              </p>
              <button 
                onClick={() => setActivePage('contact')} 
                className="neo-btn neo-btn-primary cta-btn"
              >
                Initialize Briefing <i className="fas fa-bolt"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Hero Styling */
        .hero-section {
          padding-top: 120px;
          padding-bottom: 80px;
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-content {
          text-align: left;
        }

        .hero-title {
          margin-bottom: 24px;
        }

        .hero-desc {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 36px;
          max-width: 540px;
          line-height: 1.7;
        }

        .hero-cta-group {
          display: flex;
          gap: 20px;
        }

        /* Interactive Graphic */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .visual-dashboard {
          width: 100%;
          max-width: 420px;
          padding: 24px;
          border-radius: var(--border-radius-lg);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .visual-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .window-dots {
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot-r { background: #ff5f56; }
        .dot-y { background: #ffbd2e; }
        .dot-g { background: #27c93f; }

        .visual-tab {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          color: var(--text-muted);
          padding: 4px 12px;
          border-radius: var(--border-radius-full);
          text-transform: uppercase;
        }

        .visual-body {
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: center;
        }

        /* Neomorphic Rings */
        .outer-ring {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 204, 51, 0.05);
        }

        .inner-ring {
          width: 112px;
          height: 112px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .glowing-value {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 2.2rem;
          color: var(--gold-primary);
          text-shadow: 0 0 10px var(--gold-glow);
          line-height: 1;
        }

        .glowing-value .percent {
          font-size: 1.1rem;
          vertical-align: super;
        }

        .inner-ring .label {
          font-size: 0.65rem;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-top: 4px;
          font-weight: 600;
        }

        /* Dashboard Controls */
        .controls-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .slider-row {
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: left;
        }

        .slider-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .slider-track {
          height: 12px;
          border-radius: var(--border-radius-full);
          overflow: hidden;
          position: relative;
        }

        .slider-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--gold-dark), var(--gold-primary));
          border-radius: var(--border-radius-full);
          box-shadow: 0 0 8px var(--gold-primary);
        }

        .toggle-row {
          display: flex;
          justify-content: space-between;
          gap: 16px;
        }

        .toggle-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 1;
          background: rgba(0, 0, 0, 0.1);
          padding: 8px 12px;
          border-radius: var(--border-radius-sm);
        }

        .toggle-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .toggle-switch {
          width: 38px;
          height: 20px;
          border-radius: var(--border-radius-full);
          position: relative;
          cursor: pointer;
        }

        .toggle-switch {
          width: 38px;
          height: 20px;
          border-radius: var(--border-radius-full);
          position: relative;
          cursor: pointer;
          background: var(--bg-main);
          border: 1px solid rgba(0, 0, 0, 0.15);
        }

        .toggle-switch.active {
          background: rgba(209, 146, 0, 0.1);
          border-color: rgba(209, 146, 0, 0.25);
        }

        .toggle-knob {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--text-muted);
          position: absolute;
          top: 2px;
          left: 2px;
          transition: var(--transition-bounce);
        }

        .toggle-switch.active .toggle-knob {
          left: 20px;
          background: var(--gold-primary);
          box-shadow: 0 0 8px var(--gold-primary);
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .stat-card {
          padding: 30px 20px;
          text-align: center;
        }

        .stat-number {
          font-size: 2.75rem;
          font-weight: 800;
          margin-bottom: 8px;
          line-height: 1;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
        }

        /* Principles Section */
        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-subtitle {
          color: var(--text-secondary);
          max-width: 600px;
          margin: 16px auto 0;
          font-size: 1.1rem;
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .principle-card {
          padding: 40px 30px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: var(--border-radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          border: 1px solid rgba(0, 0, 0, 0.15);
        }

        .principle-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
        }

        .principle-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* CTA Styling */
        .cta-box {
          padding: 80px 40px;
          text-align: center;
          border-radius: var(--border-radius-lg);
          background: linear-gradient(145deg, var(--bg-card), var(--bg-main));
          border: 1px solid rgba(255, 204, 51, 0.05);
        }

        .cta-content {
          max-width: 680px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .cta-content p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .cta-btn {
          margin-top: 10px;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .hero-content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-desc {
            margin-inline: auto;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .principles-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 576px) {
          .hero-section {
            padding-top: 80px;
          }
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .cta-box {
            padding: 50px 20px;
          }
        }
      `}</style>
    </div>
  );
}
