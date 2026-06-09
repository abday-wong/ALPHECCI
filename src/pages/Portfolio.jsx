import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'uiux', label: 'UI/UX Design' },
    { id: 'webapp', label: 'Web Applications' },
    { id: 'custom', label: 'Custom Software' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Verdant Environmental Suite',
      category: 'uiux',
      shortDesc: 'High-fidelity telemetry dashboard utilizing dark glassmorphism and real-time visualization widgets.',
      fullDesc: 'We designed a comprehensive telemetry dashboard for an environmental monitoring system. Our team focused on complex data visualization, converting dense IoT sensor logs into intuitive, readable charts and gauges. The interface employs a dark slate base, high-contrast indicators, and rich visual styling to prevent dashboard fatigue.',
      techStack: ['Figma', 'UI/UX Design', 'Design System', 'Telemetry Research'],
      metric: '98% User Task Completion Rate'
    },
    {
      id: 2,
      title: 'NovaPay Financial Portal',
      category: 'webapp',
      shortDesc: 'Cryptocurrency transaction core linking cross-chain networks with real-time charts.',
      fullDesc: 'NovaPay is a high-volume financial web app. We built the frontend application using React and Vite, integrating real-time WebSockets to update asset value indices. The platform processes high-velocity transactions, featuring a neomorphic wallet console that simplifies crypto sending, receiving, and trading.',
      techStack: ['React', 'Vite', 'GraphQL', 'WebSockets', 'D3.js'],
      metric: '0.1s Transaction Sync Latency'
    },
    {
      id: 3,
      title: 'Sentient Knowledge Engine',
      category: 'custom',
      shortDesc: 'AI-driven corporate semantic search tool parsing PDF manuals for instant support.',
      fullDesc: 'Sentient is an internal knowledge discovery platform. We engineered a custom pipeline that parses large, unstructured text corpora and indexes them in a vector database. Users query the database in natural language, and a cognitive model extracts precise answers, links citations, and summarizes related documentation.',
      techStack: ['Python', 'OpenAI API', 'VectorDB', 'FastAPI', 'PostgreSQL'],
      metric: '80% Reduction in Ticket Resolution Time'
    },
    {
      id: 4,
      title: 'Apex Logistics Platform',
      category: 'webapp',
      shortDesc: 'High-performance tracking system handling 10k concurrent shipments with automated routing.',
      fullDesc: 'For a global freight forwarder, we developed a real-time logistics mapping platform. The system monitors vessel and truck coordinates, dynamically recalculates ETA based on weather patterns, and automatically triggers email/SMS updates via message queues. The dashboard features custom geo-overlays and neomorphic tracking cards.',
      techStack: ['React', 'Node.js', 'Redis', 'Leaflet Map', 'AWS'],
      metric: '10,000+ Active Shipments Monitored'
    },
    {
      id: 5,
      title: 'Krypton Enterprise CRM',
      category: 'custom',
      shortDesc: 'Proprietary pipeline manager optimizing lead flows for enterprise sales teams.',
      fullDesc: 'Krypton CRM replaces a legacy platform with a modular, lightning-fast deal dashboard. It features customizable sales pipelines, drag-and-drop opportunity cards, and integrated activity timelines. Advanced analytics provide automated monthly forecasts using historical conversion rates.',
      techStack: ['React', 'NestJS', 'Docker', 'MongoDB', 'Chart.js'],
      metric: '35% Boost in Sales Rep Efficiency'
    },
    {
      id: 6,
      title: 'Lumina Interactive Identity',
      category: 'uiux',
      shortDesc: 'Rebranding and digital experience mapping for an international clean energy syndicate.',
      fullDesc: 'Lumina Energy requested a complete visual overhaul of their public-facing digital products. We ran user workshops and produced a unified branding system including custom iconography, layout grids, and interactive web elements. The final design positions them as a sleek, future-forward player in clean energy.',
      techStack: ['Brand Strategy', 'Figma', 'Interactive Mockups', 'Style Guidelines'],
      metric: '150% Increase in Web Engagement'
    },
    {
      id: 7,
      title: 'YokNabung Savings Tracker',
      category: 'custom',
      shortDesc: 'Premium Neo-Brutalist savings tracker and financial analytics application built on Flutter & Dart.',
      fullDesc: 'YokNabung is a local-first savings tracker designed with a bold Neo-Brutalist interface. The application partitions long-term savings goals into progressive milestones, projects realistic completion dates using dynamic savings habits analytics, triggers local daily reminder notifications, and integrates background feedback dispatch via APIs. Custom tactile micro-animations simulate physical controls on user interactions.',
      techStack: ['Flutter', 'Dart', 'Provider', 'Local DB', 'fl_chart', 'EmailJS API'],
      metric: '4.9/5 Rating & 100% Data Privacy'
    }
  ];

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Re-observe cards and reset transitions when category filter changes
  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Give React time to reconcile filtered elements in DOM
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll('.project-card.reveal');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        // Check if the card is currently visible in the viewport
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

        if (card.classList.contains('active') || isInViewport) {
          // Keep it visible immediately if it is already active or in the viewport
          card.classList.add('active');
        } else {
          // Otherwise, observe it so it reveals on scroll
          observer.observe(card);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [activeFilter]);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="portfolio-page animate-fade-in">
      {/* Intro Header */}
      <section className="section intro-section">
        <div className="container text-center">
          <span className="accent-badge">Case Studies</span>
          <h2 className="title-spacing">SELECTED PORTFOLIO</h2>
          <p className="section-subtitle">
            An curation of custom applications and designs engineered for clients globally.
          </p>
        </div>
      </section>

      {/* Filter Buttons Navigation */}
      <section className="section filter-section">
        <div className="container">
          <div className="filter-nav neo-sunken">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`filter-btn ${activeFilter === cat.id ? 'active' : 'inactive'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section projects-grid-section">
        <div className="container projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="project-card neo-raised-interactive reveal"
            >
              <div className="project-category-badge neo-sunken">
                {project.category === 'uiux' ? 'UI/UX' : project.category === 'webapp' ? 'Web App' : 'Custom'}
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.shortDesc}</p>
                <div className="project-card-metrics neo-sunken">
                  <span className="metric-label text-gold"><i className="fas fa-chart-line"></i> {project.metric}</span>
                </div>
                <div className="project-card-arrow text-gold">
                  <span>View Case Study</span> <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Case Study Modal Overlay */}
      {selectedProject && (
        <div className="modal-overlay animate-fade-in" onClick={() => setSelectedProject(null)}>
          <div className="modal-content neo-raised" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn neo-raised" onClick={() => setSelectedProject(null)}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-header-row">
              <span className="accent-badge">{selectedProject.category === 'uiux' ? 'UI/UX Design' : selectedProject.category === 'webapp' ? 'Web Application' : 'Custom Software'}</span>
              <h2>{selectedProject.title}</h2>
            </div>

            <div className="modal-body-grid">
              <div className="modal-description-col">
                <h4 className="modal-subheading">Project Brief & Details</h4>
                <p className="modal-full-desc">{selectedProject.fullDesc}</p>
                
                <div className="modal-metric-box neo-sunken">
                  <span className="metric-icon"><i className="fas fa-bullseye text-gold"></i></span>
                  <div className="metric-txt">
                    <span className="metric-value text-gold">{selectedProject.metric}</span>
                    <span className="metric-cap">Verified Performance Metric</span>
                  </div>
                </div>
              </div>

              <div className="modal-sidebar-col">
                <h4 className="modal-subheading">Tech Stack Used</h4>
                <div className="modal-tech-list">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className="tech-badge neo-sunken">
                      <span className="tech-badge-dot"></span>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="modal-actions">
                  <button onClick={() => setSelectedProject(null)} className="neo-btn neo-btn-secondary modal-btn">
                    Close Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .title-spacing {
          margin-bottom: 16px;
        }

        /* Filter Navigation bar */
        .filter-section {
          padding: 10px 0 30px;
        }

        .filter-nav {
          display: inline-flex;
          gap: 12px;
          padding: 10px;
          border-radius: var(--border-radius-full);
          border: 1px solid rgba(0, 0, 0, 0.15);
          flex-wrap: wrap;
          justify-content: center;
        }

        .filter-btn {
          padding: 10px 22px;
          border-radius: var(--border-radius-full);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          border: none;
          outline: none;
          transition: var(--transition-bounce);
        }

        .filter-btn.inactive {
          background: transparent;
          color: var(--text-secondary);
        }

        .filter-btn.inactive:hover {
          color: var(--gold-primary);
          background: rgba(255, 255, 255, 0.02);
        }

        .filter-btn.active {
          background: var(--bg-card);
          color: var(--gold-primary);
          box-shadow: 3px 3px 6px var(--shadow-dark), -3px -3px 6px var(--shadow-light);
          border: 1px solid rgba(255, 204, 51, 0.15);
        }

        /* Project Cards */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .project-card {
          padding: 30px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
          min-height: 340px;
        }

        .project-category-badge {
          width: fit-content;
          padding: 6px 12px;
          border-radius: var(--border-radius-sm);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          border: 1px solid rgba(0, 0, 0, 0.15);
        }

        .project-card-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex-grow: 1;
        }

        .project-card-title {
          font-size: 1.25rem;
          font-weight: 600;
        }

        .project-card-desc {
          color: var(--text-secondary);
          font-size: 0.85rem;
          line-height: 1.5;
        }

        .project-card-metrics {
          padding: 10px 14px;
          border-radius: var(--border-radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid rgba(0, 0, 0, 0.15);
          margin-top: auto;
          display: flex;
          align-items: center;
        }

        .project-card-arrow {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          font-family: var(--font-heading);
          margin-top: 10px;
          transition: var(--transition-smooth);
        }

        .project-card:hover .project-card-arrow {
          gap: 12px;
          text-shadow: 0 0 8px var(--gold-glow);
        }

        /* Modal Overlay styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(10, 9, 6, 0.85);
          backdrop-filter: blur(10px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .modal-content {
          width: 100%;
          max-width: 820px;
          padding: 40px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
          border: 1px solid rgba(255, 204, 51, 0.08);
          text-align: left;
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.02);
          background: var(--bg-card);
          color: var(--text-secondary);
        }

        .modal-close-btn:hover {
          color: var(--gold-primary);
          box-shadow: 3px 3px 8px var(--shadow-dark), -3px -3px 8px var(--shadow-light), 0 0 8px var(--gold-glow);
        }

        .modal-header-row {
          margin-bottom: 24px;
          border-bottom: 1px solid rgba(255, 204, 51, 0.05);
          padding-bottom: 20px;
        }

        .modal-header-row h2 {
          font-size: 1.8rem;
          margin-top: 10px;
        }

        .modal-body-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 40px;
        }

        .modal-subheading {
          font-size: 1rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 14px;
        }

        .modal-full-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .modal-metric-box {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          border-radius: var(--border-radius-md);
          border: 1px solid rgba(0, 0, 0, 0.2);
        }

        .metric-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--border-radius-sm);
          background: rgba(255, 204, 51, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .metric-txt {
          display: flex;
          flex-direction: column;
        }

        .metric-value {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
        }

        .metric-cap {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .modal-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
        }

        .tech-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: var(--border-radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid rgba(0, 0, 0, 0.15);
          color: var(--text-secondary);
        }

        .tech-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold-primary);
          box-shadow: 0 0 4px var(--gold-primary);
        }

        .modal-btn {
          width: 100%;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .modal-body-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
