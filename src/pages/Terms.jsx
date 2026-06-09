import React from 'react';

export default function Terms() {
  return (
    <div className="legal-page container section animate-fade-in">
      <div className="legal-card neo-raised">
        <span className="accent-badge">Terms of Use</span>
        <h2>TERMS OF SERVICE</h2>
        <p className="last-updated text-muted">Last Updated: June 9, 2026</p>
        
        <div className="divider neo-sunken"></div>

        <div className="legal-content">
          <section className="legal-section">
            <h3>1. Agreement to Terms</h3>
            <p>
              By accessing the website of Alphecci, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="legal-section">
            <h3>2. Intellectual Property Rights</h3>
            <p>
              The intellectual property of the materials displayed on this site—including design assets, custom neomorphic CSS files, layouts, copy, and code—is owned by Alphecci. You may view the public pages for informational purposes, but reproduction of these structural designs for commercial templates is prohibited without written consent from Abday Hafidz.
            </p>
          </section>

          <section className="legal-section">
            <h3>3. Project Estimations & Valuation</h3>
            <p>
              Our online Project Cost Estimator tool is designed to provide approximate baseline project valuations. Calculated budgets do not constitute a formal, binding contract or guaranteed pricing. Full scope specifications, final deliverables, and exact timelines will be finalized, documented, and signed in a formal Service Level Agreement (SLA) before any development work begins.
            </p>
          </section>

          <section className="legal-section">
            <h3>4. Client Brief Submission</h3>
            <p>
              When submitting forms, project descriptions, or estimates through our website, you agree that:
            </p>
            <ul>
              <li>The contact information you provide (email, name, phone) is accurate and active.</li>
              <li>You will not upload or transmit harmful payloads, malware, or spam through the contact inputs.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h3>5. Limitation of Liability</h3>
            <p>
              In no event shall Alphecci or its founders be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our site, even if we have been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="legal-section">
            <h3>6. Governing Law</h3>
            <p>
              Any claim relating to Alphecci's website or services shall be governed by the laws of Tangerang, Banten, Indonesia, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="legal-section">
            <h3>7. Contact Us</h3>
            <p>
              If you have any questions regarding these terms, please contact us at:
            </p>
            <ul>
              <li>Email: <strong>abday.hafidz23@gmail.com</strong></li>
              <li>Hotline: <strong>+62 85891674061</strong></li>
            </ul>
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
