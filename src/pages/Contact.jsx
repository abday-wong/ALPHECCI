import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// EmailJS configuration — set your credentials in the .env file
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact({ preFillData, setPreFillData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    budget: '10000',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState(null);

  // Load pre-fill data if available
  useEffect(() => {
    if (preFillData) {
      setFormData(prev => ({
        ...prev,
        subject: preFillData.subject || '',
        message: preFillData.message || '',
        budget: preFillData.budget ? String(preFillData.budget) : '10000'
      }));
      // Clear after using to avoid re-triggering
      setPreFillData(null);
    }
  }, [preFillData, setPreFillData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSendError(null); // clear any prior error on user input
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSendError(null);

    if (!formData.name || !formData.email || !formData.message) {
      setSendError('Please fill out all required fields (Name, Email, and Message).');
      return;
    }

    // Map budget value to a human-readable label for the email
    const budgetLabels = {
      '5000': 'Under $10,000',
      '10000': '$10,000 – $25,000',
      '25000': '$25,000 – $50,000',
      '50000': '$50,000 – $100,000',
      '100000': 'Over $100,000'
    };

    const templateParams = {
      from_name:    formData.name,
      from_email:   formData.email,
      subject:      formData.subject || '(No Subject)',
      budget_range: budgetLabels[formData.budget] || formData.budget,
      message:      formData.message,
      to_email:     'abday.hafidz23@gmail.com'
    };

    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setIsSubmitted(true);
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        budget: '10000',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS send error:', error);
      setSendError('Message failed to transmit. Please try again or email us directly at abday.hafidz23@gmail.com.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page animate-fade-in">
      {/* Intro Header */}
      <section className="section intro-section">
        <div className="container text-center">
          <span className="accent-badge">Get In Touch</span>
          <h2 className="title-spacing">START A CONVERSATION</h2>
          <p className="section-subtitle">
            Deploy your product specifications below and our engineering team will initiate a review.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="section form-section">
        <div className="container contact-grid">
          {/* Contact Details Column */}
          <div className="contact-info-column animate-fade-in">
            <div className="info-card neo-raised">
              <h3 className="info-title">STUDIO CHANNELS</h3>
              <p className="info-intro-text">
                Direct client queries are monitored around the clock. Connect with us via standard channels or dispatch your project brief directly.
              </p>
              
              <ul className="info-list">
                 <li className="info-list-item">
                  <div className="info-icon-box neo-sunken">
                    <i className="fas fa-envelope text-gold"></i>
                  </div>
                  <div className="info-text-box">
                    <span className="info-label text-muted">Client Inquiries</span>
                    <span className="info-value">abday.hafidz23@gmail.com</span>
                  </div>
                </li>
                
                <li className="info-list-item">
                  <div className="info-icon-box neo-sunken">
                    <i className="fas fa-phone-alt text-gold"></i>
                  </div>
                  <div className="info-text-box">
                    <span className="info-label text-muted">Phone Hotline</span>
                    <span className="info-value">+62 85891674061</span>
                  </div>
                </li>

                <li className="info-list-item">
                  <div className="info-icon-box neo-sunken">
                    <i className="fas fa-map-marker-alt text-gold"></i>
                  </div>
                  <div className="info-text-box">
                    <span className="info-label text-muted">Global Headquarters</span>
                    <span className="info-value">Perum Puri Rajeg, Satria 7th Street No. 10<br />LembangSari, Tangerang, Banten, Indonesia</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="contact-form-column">
            <form onSubmit={handleSubmit} className="contact-form neo-raised">
              <div className="form-row-grid">
                <div className="neo-input-group">
                  <label className="neo-label" htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="neo-input"
                    required
                  />
                </div>

                <div className="neo-input-group">
                  <label className="neo-label" htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className="neo-input"
                    required
                  />
                </div>
              </div>

              <div className="form-row-grid">
                <div className="neo-input-group">
                  <label className="neo-label" htmlFor="subject">Subject / Project Title</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Mobile App Redesign"
                    className="neo-input"
                  />
                </div>

                <div className="neo-input-group">
                  <label className="neo-label" htmlFor="budget">Estimated Budget ($)</label>
                  <div className="neo-select-wrapper">
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="neo-input neo-select"
                    >
                      <option value="5000">Under $10,000</option>
                      <option value="10000">$10,000 - $25,000</option>
                      <option value="25000">$25,000 - $50,000</option>
                      <option value="50000">$50,000 - $100,000</option>
                      <option value="100000">Over $100,000</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="neo-input-group">
                <label className="neo-label" htmlFor="message">Project Description & Requirements *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Outline your project scope, features, and timeline goals..."
                  rows="6"
                  className="neo-input neo-textarea"
                  required
                ></textarea>
              </div>

              {/* Error Banner */}
              {sendError && (
                <div className="send-error-banner">
                  <i className="fas fa-exclamation-triangle"></i>
                  <span>{sendError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="neo-btn neo-btn-primary submit-btn"
              >
                {loading ? (
                  <span>Transmitting Brief... <i className="fas fa-spinner fa-spin"></i></span>
                ) : (
                  <span>Send Message <i className="fas fa-paper-plane"></i></span>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Submission Success Dialog */}
      {isSubmitted && (
        <div className="modal-overlay animate-fade-in" onClick={() => setIsSubmitted(false)}>
          <div className="modal-success-card neo-raised" onClick={(e) => e.stopPropagation()}>
            <div className="success-icon-container neo-sunken">
              <i className="fas fa-check success-check-icon text-gold"></i>
            </div>
            
            <h2 className="success-title">MESSAGE TRANSMITTED</h2>
            <p className="success-desc">
              Your details have successfully cleared gateway validation. Our systems architect has queued your request and will initiate contact within 12 business hours.
            </p>
            
            <button
              onClick={() => setIsSubmitted(false)}
              className="neo-btn neo-btn-secondary close-success-btn"
            >
              Acknowledge & Close
            </button>
          </div>
        </div>
      )}

      <style>{`
        .title-spacing {
          margin-bottom: 16px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 40px;
          align-items: start;
        }

        /* Info Card */
        .info-card {
          padding: 40px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .info-title {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .info-intro-text {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .info-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-list-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .info-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--border-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
          border: 1px solid rgba(0, 0, 0, 0.15);
        }

        .info-text-box {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .info-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .info-value {
          font-size: 0.95rem;
          color: var(--text-primary);
          line-height: 1.4;
        }

        /* Form Details */
        .contact-form {
          padding: 40px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-row-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .neo-textarea {
          resize: vertical;
          line-height: 1.5;
        }

        /* Select custom arrow */
        .neo-select-wrapper {
          position: relative;
        }

        .neo-select {
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
        }

        .neo-select-wrapper::after {
          content: '\\f078';
          font-family: 'Font Awesome 6 Free';
          font-weight: 900;
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-secondary);
          pointer-events: none;
          font-size: 0.85rem;
        }

        .submit-btn {
          width: 100%;
          padding: 16px 0;
          margin-top: 16px;
          font-size: 1.05rem;
        }

        /* Success Card Styling */
        .modal-success-card {
          width: 100%;
          max-width: 480px;
          padding: 40px;
          border-radius: var(--border-radius-lg);
          border: 1px solid rgba(255, 204, 51, 0.08);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .success-icon-container {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 0, 0, 0.2);
        }

        .success-check-icon {
          font-size: 2rem;
          text-shadow: 0 0 10px var(--gold-glow);
        }

        .success-title {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: 0.05em;
        }

        .success-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .close-success-btn {
          width: 100%;
          margin-top: 8px;
        }

        /* Error Banner */
        .send-error-banner {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 18px;
          border-radius: var(--border-radius-md);
          background: rgba(184, 58, 56, 0.05);
          border: 1px solid rgba(184, 58, 56, 0.2);
          color: #b83a38;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 8px;
        }

        .send-error-banner i {
          margin-top: 2px;
          flex-shrink: 0;
        }

        /* Responsive styling */
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 576px) {
          .form-row-grid {
            grid-template-columns: 1fr;
            gap: 0px;
          }
          .contact-form {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
}
