import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CreditScoreWidget from '../../components/CreditScoreWidget';

const quickFacts = [
  { label: 'Bureaus', value: '4 supported' },
  { label: 'Impact', value: 'No hard pull' },
  { label: 'Time', value: '< 1 minute' },
  { label: 'Refresh', value: 'Monthly reminder' },
];

const steps = [
  { title: 'Enter basic details', detail: 'Name, PAN, contact, and DOB to fetch your simulated score.' },
  { title: 'Share credit mix', detail: 'Tell us how many cards and loans you carry to tune accuracy.' },
  { title: 'Get your score', detail: 'See your range instantly, with a checklist to boost it.' },
];

const habits = [
  'Keep utilisation under 30% of your total card limit.',
  'Pay before the due date; set auto-pay to avoid misses.',
  'Avoid back-to-back hard pulls—space applications by 60+ days.',
  'Maintain a healthy mix of secured and unsecured credit.',
];

const visuals = [
  {
    src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Credit dashboard illustration with rising score',
  },
  {
    src: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Person reviewing finances with a laptop and phone',
  },
  {
    src: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1200&q=80',
    alt: 'Notebook with checklist and coffee mug',
  },
];

function CreditScorePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % visuals.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="page calculator-page">
      <section className="calculator-hero credit-hero">
        <div className="calc-hero-copy">
          <span className="info-pill">Credit health</span>
          <h1>Check Credit Score</h1>
          <p>
            Stay ahead of lenders with a quick score check. No hard pulls, just an instant view of your range and a
            to-do list to keep it climbing before you apply.
          </p>
          <div className="calc-chip-row">
            {quickFacts.map((fact) => (
              <span className="calc-chip" key={fact.label}>
                <strong>{fact.value}</strong>
                <small>{fact.label}</small>
              </span>
            ))}
          </div>
          <div className="calc-hero-cta">
            <a className="ghost-btn" href="#credit-planner">
              Start now
            </a>
            <Link className="primary-btn" to="/support/apply">
              Apply with confidence
            </Link>
          </div>
        </div>
        <div className="credit-hero-card">
          <p className="eyebrow">Live preview</p>
          <h3>See where you stand</h3>
          <p className="calc-hero-note">We never run a hard inquiry. Your score stays untouched.</p>
          <div className="hero-mini-stats">
            <div>
              <strong>900</strong>
              <span>Max score</span>
            </div>
            <div>
              <strong>Secured</strong>
              <span>Data encrypted</span>
            </div>
            <div>
              <strong>Checklist</strong>
              <span>Actionable tips</span>
            </div>
          </div>
          <div className="doodle-bubbles" aria-hidden="true">
            <span className="bubble mini" />
            <span className="sparkle" />
          </div>
        </div>
      </section>

      <section className="calculator-visual-shell compact-carousel">
        <div className="calculator-carousel">
          <div className="calculator-carousel__track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {visuals.map((slide) => (
              <div className="calculator-carousel__slide" key={slide.alt}>
                <img src={slide.src} alt={slide.alt} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="calculator-carousel__dots" role="tablist" aria-label="Credit score visuals">
            {visuals.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`calculator-carousel__dot ${index === activeSlide ? 'is-active' : ''}`}
                aria-label={`Show slide ${index + 1}`}
                aria-pressed={index === activeSlide}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
          <div className="carousel-tags">
            <span>No hard pull</span>
            <span>Privacy-first</span>
            <span>Personalised checklist</span>
          </div>
        </div>
      </section>

      <section className="calculator-body modern" id="credit-planner">
        <div className="calculator-main-card">
          <header className="calculator-head">
            <div>
              <p className="eyebrow">Score simulator</p>
              <h2>Check your score without an inquiry</h2>
              <p className="calculator-subhead">
                Enter your basics and credit mix to see your range. Improve it with the habits on the right before you
                hit apply.
              </p>
            </div>
            <div className="calculator-meta-tags">
              <span>Free forever</span>
              <span>Data encrypted</span>
              <span>No impact on score</span>
            </div>
          </header>
          <CreditScoreWidget />
        </div>
        <aside className="calculator-aside">
          <div className="calc-side-card tinted">
            <h3>How it works</h3>
            <ol>
              {steps.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}</strong>
                  <span>{step.detail}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="calc-side-card compact">
            <h3>Habits that lift your score</h3>
            <ul className="calc-bullet-list">
              {habits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default CreditScorePage;
