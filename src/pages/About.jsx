import React from 'react';

export default function About() {
  const values = [
    {
      number: '01',
      title: 'Obsessive Craftsmanship',
      desc: 'We do not compromise on pixel values, latency margins, or code patterns. We believe great design is felt as much as it is seen.'
    },
    {
      number: '02',
      title: 'Humanistic Technology',
      desc: 'We construct complex software systems with a singular goal: simplifying and augmenting human potential.'
    },
    {
      number: '03',
      title: 'Transparent Collaboration',
      desc: 'We build direct channels between engineers, designers, and key stakeholders. No intermediaries, no diluted communication.'
    }
  ];

  const teamMembers = [
    {
      name: 'Abday Hafidz',
      role: 'Founder & Principal Architect',
      bio: 'Full-stack software architect specializing in interactive systems, cloud engineering, and high-performance digital product layouts.',
      avatarIcon: 'fa-user-astronaut',
      linkedin: 'https://linkedin.com/in/abday-wong',
      github: 'https://github.com/abday-wong'
    },
    {
      name: 'Marcus Chen',
      role: 'Director of Engineering',
      bio: 'Full-stack systems architect. Expert in highly concurrent web platforms and distributed cloud systems.',
      avatarIcon: 'fa-laptop-code',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    {
      name: 'Dr. Sean Miller',
      role: 'Principal AI Engineer',
      bio: 'Researcher in NLP and semantic parsing. Designing bespoke LLM orchestrations and vector search models.',
      avatarIcon: 'fa-brain',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  ];

  return (
    <div className="about-page animate-fade-in">
      {/* Hero / Intro */}
      <section className="section intro-section">
        <div className="container intro-grid">
          <div className="intro-text">
            <span className="accent-badge">Who We Are</span>
            <h2>SYNTHESIZING DESIGN & ENGINEERING</h2>
            <p className="intro-paragraph">
              Founded in Silicon Valley, Aethera Tech Studio emerged from a shared realization: the gap between pixel-perfect aesthetics and robust system engineering is too wide. We exist to close that gap.
            </p>
            <p className="intro-paragraph-secondary text-muted">
              We operate as a boutique development partner, integrating directly with your product visionaries to deliver high-quality, secure, and intuitive web and mobile solutions.
            </p>
          </div>

          <div className="intro-visual">
            <div className="story-card neo-raised">
              <div className="story-logo-container neo-sunken">
                <span className="story-logo-inner">Æ</span>
              </div>
              <h3 className="story-title text-gold">OUR NARRATIVE</h3>
              <p className="story-text">
                Every line of code we compile and every vector we plot is aligned with a simple truth: technology should feel natural, responsive, and incredibly polished.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="accent-badge">Core Pillars</span>
            <h2>VALUES WE HOLD DEAR</h2>
            <p className="section-subtitle">
              These guiding philosophies dictate our technical decisions and internal studio standards daily.
            </p>
          </div>

          <div className="values-grid">
            {values.map((val, idx) => (
              <div key={idx} className={`value-card neo-raised reveal delay-${(idx + 1) * 100}`}>
                <div className="value-header">
                  <span className="value-number text-gold neo-sunken">{val.number}</span>
                  <h3>{val.title}</h3>
                </div>
                <p className="value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="accent-badge">Our Brain Trust</span>
            <h2>THE SPECIALISTS</h2>
            <p className="section-subtitle">
              Meet the design architects and systems engineers leading your digital builds.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, idx) => (
              <div key={idx} className={`team-card neo-raised-interactive reveal delay-${(idx + 1) * 100}`}>
                <div className="team-avatar-container neo-sunken">
                  <div className="team-avatar-fallback">
                    <i className={`fas ${member.avatarIcon} avatar-icon text-gold`}></i>
                  </div>
                </div>
                
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <span className="team-role text-gold">{member.role}</span>
                  <p className="team-bio">{member.bio}</p>
                </div>

                <div className="team-social-bar neo-sunken">
                  <a href={member.linkedin} className="team-social-link" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                  {member.twitter && <a href={member.twitter} className="team-social-link" aria-label="Twitter Profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>}
                  <a href={member.github} className="team-social-link" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* Intro layout */
        .intro-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .intro-text {
          text-align: left;
        }

        .intro-paragraph {
          font-size: 1.15rem;
          line-height: 1.7;
          margin-bottom: 20px;
          color: var(--text-secondary);
        }

        .intro-paragraph-secondary {
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .story-card {
          padding: 40px;
          border-radius: var(--border-radius-lg);
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .story-logo-container {
          width: 56px;
          height: 56px;
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 0, 0, 0.15);
        }

        .story-logo-inner {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--gold-primary);
        }

        .story-title {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .story-text {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Values Grid */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .value-card {
          padding: 40px 30px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .value-header {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .value-number {
          width: 44px;
          height: 44px;
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          border: 1px solid rgba(0, 0, 0, 0.15);
        }

        .value-card h3 {
          font-size: 1.2rem;
          font-weight: 600;
          line-height: 1.2;
        }

        .value-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Team Section styling */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .team-card {
          padding: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
        }

        .team-avatar-container {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 0, 0, 0.15);
        }

        .team-avatar-fallback {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--bg-card-light);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.02);
        }

        .avatar-icon {
          font-size: 2rem;
        }

        .team-info {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .team-name {
          font-size: 1.25rem;
          font-weight: 600;
        }

        .team-role {
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .team-bio {
          color: var(--text-secondary);
          font-size: 0.85rem;
          line-height: 1.5;
          margin-top: 8px;
          min-height: 70px;
        }

        .team-social-bar {
          display: flex;
          justify-content: center;
          gap: 16px;
          padding: 8px 16px;
          border-radius: var(--border-radius-full);
          border: 1px solid rgba(0, 0, 0, 0.15);
          width: fit-content;
        }

        .team-social-link {
          color: var(--text-muted);
          font-size: 0.95rem;
          transition: var(--transition-smooth);
        }

        .team-social-link:hover {
          color: var(--gold-primary);
          text-shadow: 0 0 5px var(--gold-glow);
        }

        /* Responsive styling */
        @media (max-width: 992px) {
          .intro-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .intro-text {
            text-align: center;
          }
          .values-grid {
            grid-template-columns: 1fr;
          }
          .team-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}
