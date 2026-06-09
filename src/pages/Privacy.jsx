import React from 'react';

export default function Privacy() {
  return (
    <div className="legal-page container section animate-fade-in">
      <div className="legal-card neo-raised">
        <span className="accent-badge">Compliance</span>
        <h2>PRIVACY POLICY</h2>
        <p className="last-updated text-muted">Last Updated: June 9, 2026</p>
        
        <div className="divider neo-sunken"></div>

        <div className="legal-content">
          <section className="legal-section">
            <h3>1. Introduction</h3>
            <p>
              Alphecci ("we," "our," or "us"), founded by Abday Hafidz in Tangerang, Banten, Indonesia, is committed to protecting the privacy of our clients and visitors. This Privacy Policy outlines how we collect, use, and protect your information when you interact with our company profile website and custom digital estimator tools.
            </p>
          </section>

          <section className="legal-section">
            <h3>2. Information We Collect</h3>
            <p>
              We collect information directly provided by you through our interactive systems, including:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, and physical company coordinates provided via our Contact Form.</li>
              <li><strong>Project Metadata:</strong> Approximate project scale (page counts, complexity levels) and selected system feature integrations sent via the Project Cost Estimator.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>3. How We Use Your Information</h3>
            <p>
              The information captured by our systems is utilized strictly to:
            </p>
            <ul>
              <li>Formulate and deliver customized technical project bids.</li>
              <li>Respond directly to inquiry briefings submitted through our contact channels.</li>
              <li>Improve the functionality, usability, and responsiveness of our digital products.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>4. Data Processing and Hosting</h3>
            <p>
              Our website is hosted on the Vercel Serverless Platform, and the codebase is hosted on GitHub. Any data submitted via our contact forms is transmitted securely and is never sold, leased, or distributed to third-party marketing brokers.
            </p>
          </section>

          <section className="legal-section">
            <h3>5. Data Security</h3>
            <p>
              We implement industry-standard encryption protocols (HTTPS/TLS) to secure data packets during transmission. While no storage or transfer mechanism is 100% secure, we follow rigorous architectural practices to shield your project specifications and communications from unauthorized access.
            </p>
          </section>

          <section className="legal-section">
            <h3>6. Your Rights</h3>
            <p>
              You have the right to request access to the information we hold about you, request corrections, or request deletion of your communications. Please contact our data controller at <strong>abday.hafidz23@gmail.com</strong> to initiate a request.
            </p>
          </section>
        </div>
      </div>

      <style>{`
        .legal-card {
          padding: 60px;
          text-align: left;
          border-radius: var(--border-radius-lg);
          border: 1px solid var(--border-gold);
        }

        .last-updated {
          font-size: 0.85rem;
          margin-top: 8px;
        }

        .divider {
          height: 4px;
          width: 100%;
          margin: 30px 0;
          border-radius: var(--border-radius-full);
          background: var(--bg-main);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .legal-content {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .legal-section h3 {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 12px;
          font-weight: 600;
        }

        .legal-section p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .legal-section ul {
          list-style: none;
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-left: 10px;
        }

        .legal-section li {
          color: var(--text-secondary);
          font-size: 0.95rem;
          position: relative;
          padding-left: 20px;
        }

        .legal-section li::before {
          content: '•';
          color: var(--gold-primary);
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        @media (max-width: 576px) {
          .legal-card {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
}
