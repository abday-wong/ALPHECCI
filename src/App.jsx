import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [displayPage, setDisplayPage] = useState('home');
  const [preFillData, setPreFillData] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('Initializing Page Module...');

  // Set up Scroll Reveal Intersection Observer whenever page changes
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' // reveal slightly before it comes fully into view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);

    // Tiny timeout to let React paint the DOM first
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));
    }, 120);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [displayPage]);

  // custom page change with simulated delay (slow render)
  const handlePageChange = (newPageId) => {
    if (newPageId === displayPage) return;
    
    setIsTransitioning(true);
    
    // Cyber-vibe logging cycles for the loader screen
    const messages = [
      'Establishing Secure Node Link...',
      'Defragmenting Asset Modules...',
      'Synthesizing Neomorphic Layouts...',
      'Compiling Interface Graphics...'
    ];
    setLoaderMessage(messages[Math.floor(Math.random() * messages.length)]);
    
    // Transition delay (800ms slow render)
    setTimeout(() => {
      setDisplayPage(newPageId);
      setActivePage(newPageId);
      setIsTransitioning(false);
    }, 850);
  };

  // Render the appropriate page component
  const renderActivePage = () => {
    switch (displayPage) {
      case 'home':
        return <Home setActivePage={handlePageChange} />;
      case 'services':
        return (
          <Services
            setActivePage={handlePageChange}
            setPreFillData={setPreFillData}
          />
        );
      case 'portfolio':
        return <Portfolio />;
      case 'about':
        return <About />;
      case 'contact':
        return (
          <Contact
            preFillData={preFillData}
            setPreFillData={setPreFillData}
          />
        );
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      default:
        return <Home setActivePage={handlePageChange} />;
    }
  };

  return (
    <div className="app-wrapper">
      {/* Navigation Header */}
      <Header activePage={activePage} setActivePage={handlePageChange} />

      {/* Dynamic Content Views or Loader Screen */}
      <main className="main-content">
        {isTransitioning ? (
          <div className="slow-loader-container animate-fade-in">
            <div className="loader-box neo-raised">
              <div className="spinner-outer neo-raised">
                <div className="spinner-inner neo-sunken">
                  <div className="spinner-dot"></div>
                </div>
              </div>
              <div className="loader-text-group">
                <span className="loader-title text-gold">ALPHECCI CORE SECURE LINK</span>
                <span className="loader-status">{loaderMessage}</span>
              </div>
              <div className="loader-progress neo-sunken">
                <div className="loader-progress-bar"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="page-view-wrapper">
            {renderActivePage()}
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer setActivePage={handlePageChange} />

      <style>{`
        .app-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: var(--bg-main);
        }

        .main-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .page-view-wrapper {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        /* Slow Loader Styling */
        .slow-loader-container {
          display: flex;
          flex-grow: 1;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          background: var(--bg-main);
          min-height: 70vh;
        }

        .loader-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 50px 40px;
          border-radius: var(--border-radius-lg);
          max-width: 440px;
          width: 100%;
          gap: 28px;
          text-align: center;
          border: 1px solid rgba(255, 204, 51, 0.05);
        }

        /* Spinner orbit animation */
        .spinner-outer {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.01);
        }

        .spinner-inner {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border: 1px solid rgba(0, 0, 0, 0.15);
        }

        .spinner-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--gold-primary);
          box-shadow: 0 0 12px var(--gold-primary);
          position: absolute;
          animation: orbit 1.5s linear infinite;
          transform-origin: 50% 50%;
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg) translate(31px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translate(31px) rotate(-360deg);
          }
        }

        .loader-text-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .loader-title {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        .loader-status {
          font-size: 0.95rem;
          color: var(--text-secondary);
          min-height: 24px;
        }

        /* Dynamic Progress Bar */
        .loader-progress {
          width: 100%;
          height: 8px;
          border-radius: var(--border-radius-full);
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(0, 0, 0, 0.15);
        }

        .loader-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--gold-dark), var(--gold-primary));
          border-radius: var(--border-radius-full);
          box-shadow: 0 0 8px var(--gold-primary);
          animation: progressFill 0.8s ease-in-out forwards;
          width: 0%;
        }

        @keyframes progressFill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}

export default App;
