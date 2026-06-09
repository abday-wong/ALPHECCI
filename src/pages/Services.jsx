import React, { useState, useEffect } from 'react';

export default function Services({ setActivePage, setPreFillData }) {
  // Services description data
  const servicesList = [
    {
      id: 'uiux',
      icon: 'fa-pencil-ruler',
      title: 'UI/UX & Interactive Design',
      description: 'We construct beautiful, accessible, and intuitive user interfaces. Our process spans user research, wireframing, high-fidelity prototypes, and neomorphic UI/UX systems.',
      details: ['User Research & Personas', 'Wireframing & Prototyping', 'High-Fidelity Mockups', 'Interaction Design']
    },
    {
      id: 'dev',
      icon: 'fa-code',
      title: 'Custom Software Development',
      description: 'Engineering robust, secure, and clean web and mobile architectures. We specialize in modern frameworks (React, Vite, Node) and cloud integrations (AWS, GCP).',
      details: ['Fullstack Web Apps', 'Native Mobile Apps', 'API Architectures', 'Cloud Migrations']
    },
    {
      id: 'ai',
      icon: 'fa-brain',
      title: 'AI Integration & Intelligent Systems',
      description: 'Embedding automated workflows and analytics into your software. We use LLM integrations, text/image models, and data pipeline parsing for tailored operations.',
      details: ['LLM & API Integrations', 'Custom Data Processing', 'Predictive Modeling', 'Conversational Chatbots']
    },
    {
      id: 'consult',
      icon: 'fa-network-wired',
      title: 'Digital Transformation',
      description: 'Assisting companies in auditing legacy systems and introducing modern developer tooling, automated CI/CD pipelines, and high-performance databases.',
      details: ['Legacy Code Audits', 'CI/CD & DevOps Automation', 'Database Optimization', 'Tech Stack Advising']
    }
  ];

  // Estimator State
  const [screens, setScreens] = useState(15);
  const [complexity, setComplexity] = useState('moderate'); // simple, moderate, enterprise
  const [features, setFeatures] = useState({
    auth: true,
    db: true,
    ai: false,
    payments: false,
    multilang: false,
  });
  const [estimatedCost, setEstimatedCost] = useState(0);

  // Calculate cost on state change
  useEffect(() => {
    let basePrice = 3000;
    
    // Screens cost
    let screensCost = screens * 250;
    
    // Complexity multiplier
    let complexityMultiplier = 1.0;
    if (complexity === 'simple') complexityMultiplier = 0.8;
    if (complexity === 'enterprise') complexityMultiplier = 1.6;
    
    // Features cost
    let featuresCost = 0;
    if (features.auth) featuresCost += 1500;
    if (features.db) featuresCost += 2500;
    if (features.ai) featuresCost += 4000;
    if (features.payments) featuresCost += 1800;
    if (features.multilang) featuresCost += 1200;
    
    const total = Math.round((basePrice + screensCost + featuresCost) * complexityMultiplier);
    setEstimatedCost(total);
  }, [screens, complexity, features]);

  const handleToggleFeature = (featureKey) => {
    setFeatures(prev => ({
      ...prev,
      [featureKey]: !prev[featureKey]
    }));
  };

  const handleStartProjectWithEstimate = () => {
    // Generate text message for contact page
    const complexityText = complexity.charAt(0).toUpperCase() + complexity.slice(1);
    const selectedFeatures = Object.keys(features)
      .filter(k => features[k])
      .map(k => k === 'auth' ? 'User Auth' : k === 'db' ? 'Custom Database' : k === 'ai' ? 'AI Features' : k === 'payments' ? 'Payments' : 'Multi-language')
      .join(', ');

    const message = `Hello, I'd like to initiate a project. I used the online Estimator and got the following details:\n` +
      `- Scope: ~${screens} screen designs/pages\n` +
      `- Complexity: ${complexityText}\n` +
      `- Features: ${selectedFeatures || 'None selected'}\n` +
      `- Calculated Est. Budget: $${estimatedCost.toLocaleString()}`;

    setPreFillData({
      subject: 'New Project Estimate',
      message: message,
      budget: estimatedCost
    });

    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="services-page animate-fade-in">
      {/* Intro Header */}
      <section className="section intro-section">
        <div className="container text-center">
          <span className="accent-badge">Our Services</span>
          <h2 className="title-spacing">WHAT WE ENGINEER</h2>
          <p className="section-subtitle">
            Crafting tailored solutions across design, development, and intelligence to launch your product successfully.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-grid-section">
        <div className="container services-grid">
          {servicesList.map((service) => (
            <div key={service.id} className="service-card neo-raised reveal">
              <div className="service-icon-box neo-sunken">
                <i className={`fas ${service.icon} text-gold`}></i>
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
              <div className="service-details-list">
                {service.details.map((detail, idx) => (
                  <div key={idx} className="service-detail-item">
                    <span className="bullet-point neo-sunken"><span className="bullet-dot"></span></span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Project Cost Estimator Section */}
      <section className="section estimator-section">
        <div className="container">
          <div className="section-header">
            <span className="accent-badge">Interactive Tool</span>
            <h2>BUDGET ESTIMATOR</h2>
            <p className="section-subtitle">
              Adjust the sliders and parameters below to calculate a baseline valuation for your custom digital product.
            </p>
          </div>

          <div className="estimator-box neo-raised reveal">
            <div className="estimator-inputs">
              {/* Slider Input */}
              <div className="input-group-spacing">
                <div className="slider-header">
                  <span className="neo-label">Scope (Screens / Views)</span>
                  <span className="slider-counter text-gold neo-sunken">{screens} Pages</span>
                </div>
                <div className="range-container">
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={screens}
                    onChange={(e) => setScreens(Number(e.target.value))}
                    className="neo-range-slider"
                  />
                  <div className="range-ticks">
                    <span>5</span>
                    <span>20</span>
                    <span>35</span>
                    <span>50</span>
                  </div>
                </div>
              </div>

              {/* Radio Group Input */}
              <div className="input-group-spacing">
                <span className="neo-label block-label">Architecture Complexity</span>
                <div className="complexity-radio-group">
                  {[
                    { id: 'simple', label: 'Simple MVP', desc: 'Core features, standard layouts' },
                    { id: 'moderate', label: 'Custom Corporate', desc: 'Fully bespoke, high fidelity' },
                    { id: 'enterprise', label: 'Enterprise Stack', desc: 'High concurrency, cloud integrations' }
                  ].map((option) => (
                    <div
                      key={option.id}
                      onClick={() => setComplexity(option.id)}
                      className={`complexity-card ${complexity === option.id ? 'active neo-sunken' : 'inactive neo-raised'}`}
                    >
                      <div className="complexity-radio-indicator">
                        {complexity === option.id && <span className="radio-dot"></span>}
                      </div>
                      <div className="complexity-card-text">
                        <span className="complexity-card-label">{option.label}</span>
                        <span className="complexity-card-desc">{option.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Toggle Switches */}
              <div className="input-group-spacing">
                <span className="neo-label block-label">Required Integrations</span>
                <div className="integrations-grid">
                  {[
                    { id: 'auth', label: 'User Authentication', price: '$1,500' },
                    { id: 'db', label: 'Custom Database & API', price: '$2,500' },
                    { id: 'ai', label: 'AI Cognitive Features', price: '$4,000' },
                    { id: 'payments', label: 'Payment Gateway Link', price: '$1,800' },
                    { id: 'multilang', label: 'Multi-language Support', price: '$1,200' }
                  ].map((feat) => (
                    <div
                      key={feat.id}
                      onClick={() => handleToggleFeature(feat.id)}
                      className={`integration-row neo-raised-interactive ${features[feat.id] ? 'selected-border' : ''}`}
                    >
                      <div className="integration-info">
                        <span className="integration-label">{feat.label}</span>
                        <span className="integration-price text-muted">Est. {feat.price}</span>
                      </div>
                      <div className={`neo-switch neo-sunken ${features[feat.id] ? 'active' : ''}`}>
                        <span className="neo-switch-handle neo-raised"></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Readout Output Card */}
            <div className="estimator-readout neo-sunken">
              <div className="readout-header">
                <span className="readout-badge text-gold">BASELINE VALUE</span>
                <h3>CALCULATED ESTIMATION</h3>
              </div>
              <div className="price-display">
                <span className="currency">$</span>
                <span className="amount text-gold">{estimatedCost.toLocaleString()}</span>
              </div>
              <p className="readout-disclaimer text-muted">
                *This is an automated synthesis model. Official design and engineering budgets are verified upon final scope briefing.
              </p>
              <button
                onClick={handleStartProjectWithEstimate}
                className="neo-btn neo-btn-primary start-project-btn"
              >
                Start with this Estimate <i className="fas fa-bolt"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .title-spacing {
          margin-bottom: 16px;
        }

        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .service-card {
          padding: 40px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .service-icon-box {
          width: 64px;
          height: 64px;
          border-radius: var(--border-radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          border: 1px solid rgba(0, 0, 0, 0.15);
        }

        .service-card-title {
          font-size: 1.4rem;
          font-weight: 600;
        }

        .service-card-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .service-details-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 10px;
        }

        .service-detail-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .bullet-point {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .bullet-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold-primary);
        }

        /* Budget Estimator Box */
        .estimator-box {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 40px;
          padding: 40px;
          border-radius: var(--border-radius-lg);
          margin-top: 40px;
        }

        .estimator-inputs {
          display: flex;
          flex-direction: column;
          gap: 32px;
          text-align: left;
        }

        .input-group-spacing {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .block-label {
          margin-bottom: 4px;
        }

        .slider-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .slider-counter {
          padding: 6px 14px;
          border-radius: var(--border-radius-sm);
          font-weight: 600;
          font-size: 0.85rem;
          font-family: var(--font-heading);
          border: 1px solid rgba(0, 0, 0, 0.15);
        }

        .range-container {
          position: relative;
          padding-top: 8px;
        }

        /* Neomorphic Slider Styling */
        .neo-range-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 12px;
          border-radius: var(--border-radius-full);
          background: var(--bg-main);
          box-shadow: inset 2px 2px 5px #0a0906, inset -2px -2px 5px #2e2b1e;
          outline: none;
          border: 1px solid rgba(0, 0, 0, 0.2);
        }

        .neo-range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 2px solid var(--gold-primary);
          box-shadow: 3px 3px 6px #0a0906, -3px -3px 6px #2e2b1e, 0 0 10px var(--gold-glow);
          cursor: pointer;
          transition: var(--transition-bounce);
        }

        .neo-range-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 3px 3px 8px #0a0906, -3px -3px 8px #2e2b1e, 0 0 15px var(--gold-primary);
        }

        .range-ticks {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-muted);
          padding: 6px 4px 0;
        }

        /* Complexity Radio Cards */
        .complexity-radio-group {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .complexity-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          border-radius: var(--border-radius-md);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .complexity-card.inactive {
          border: 1px solid rgba(255, 255, 255, 0.02);
        }

        .complexity-card.inactive:hover {
          border-color: rgba(255, 204, 51, 0.15);
          box-shadow: 8px 8px 18px var(--shadow-dark), -8px -8px 18px var(--shadow-light);
        }

        .complexity-card.active {
          border: 1px solid rgba(255, 204, 51, 0.25);
          box-shadow: var(--shadow-inset-dark), var(--shadow-inset-light), 0 0 8px rgba(255, 204, 51, 0.1);
        }

        .complexity-radio-indicator {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--bg-main);
          box-shadow: inset 2px 2px 4px #0a0906, inset -2px -2px 4px #2e2b1e;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(0, 0, 0, 0.15);
        }

        .radio-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--gold-primary);
          box-shadow: 0 0 6px var(--gold-primary);
        }

        .complexity-card-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .complexity-card-label {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .complexity-card-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        /* Integrations Toggles */
        .integrations-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .integration-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          border-radius: var(--border-radius-md);
          background: var(--bg-card);
          border: 1px solid rgba(255, 255, 255, 0.02);
          cursor: pointer;
        }

        .integration-row.selected-border {
          border-color: rgba(255, 204, 51, 0.15);
        }

        .integration-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .integration-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .integration-price {
          font-size: 0.75rem;
        }

        .neo-switch {
          width: 44px;
          height: 22px;
          border-radius: var(--border-radius-full);
          position: relative;
          transition: var(--transition-smooth);
          background: var(--bg-main);
          border: 1px solid rgba(0, 0, 0, 0.15);
          flex-shrink: 0;
        }

        .neo-switch.active {
          background: rgba(255, 204, 51, 0.1);
          border-color: rgba(255, 204, 51, 0.25);
        }

        .neo-switch-handle {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--text-muted);
          position: absolute;
          top: 2px;
          left: 2px;
          transition: var(--transition-bounce);
          border: 1px solid rgba(255, 255, 255, 0.02);
        }

        .neo-switch.active .neo-switch-handle {
          left: 24px;
          background: var(--gold-primary);
          box-shadow: 0 0 8px var(--gold-primary), 2px 2px 4px #0a0906, -2px -2px 4px #2e2b1e;
        }

        /* Readout Panel Styling */
        .estimator-readout {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 40px;
          border-radius: var(--border-radius-lg);
          border: 1px solid rgba(0, 0, 0, 0.25);
          text-align: center;
          gap: 30px;
        }

        .readout-header h3 {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-top: 6px;
        }

        .readout-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .price-display {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          line-height: 1;
        }

        .price-display .currency {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-secondary);
          margin-top: 6px;
          margin-right: 4px;
        }

        .price-display .amount {
          font-size: clamp(3.2rem, 5vw, 4.2rem);
          font-weight: 900;
          text-shadow: 0 0 15px var(--gold-glow);
          font-family: var(--font-heading);
        }

        .readout-disclaimer {
          font-size: 0.75rem;
          line-height: 1.5;
        }

        .start-project-btn {
          width: 100%;
          padding: 16px 0;
          font-size: 1.05rem;
        }

        /* Responsive styling */
        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .estimator-box {
            grid-template-columns: 1fr;
            padding: 30px;
          }
        }

        @media (max-width: 768px) {
          .integrations-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
