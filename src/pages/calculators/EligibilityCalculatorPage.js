import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EligibilityCalculator from '../../components/EligibilityCalculator';

const quickFacts = [
  { label: 'FOIR guardrail', value: '≤ 45%' },
  { label: 'Inputs', value: 'Income + EMIs + tenure' },
  { label: 'Output', value: 'Max eligible amount' },
];

const steps = [
  { title: 'Share income & EMIs', detail: 'We cap total EMIs to a FOIR guardrail so you stay within safe limits.' },
  { title: 'Set tenure & rate', detail: 'Change tenure or APR to see how eligibility shifts instantly.' },
  { title: 'Get your number', detail: 'See EMI capacity and the loan amount that keeps cashflows healthy.' },
];

const guardrails = [
  'FOIR capped at 45% of monthly income by default.',
  'We subtract existing EMIs before suggesting the eligible EMI.',
  'Final approval still depends on bureau score and KYC verification.',
];

const visuals = [
  {
    src: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Card showing upward eligibility trend',
  },
  {
    src: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1200&q=80',
    alt: 'Planner with calculator and phone',
  },
  {
    src: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Hands reviewing finances with coffee',
  },
];

function EligibilityCalculatorPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % visuals.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="page calculator-page">
      <section className="calculator-hero eligibility-hero">
        <div className="calc-hero-copy">
          <span className="info-pill">Check eligibility</span>
          <h1>Eligibility Calculator</h1>
          <p>
            Find the maximum amount you can borrow using FOIR rules. Adjust income, existing EMIs, tenure, and APR to see
            an eligibility figure that keeps your finances steady.
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
            <a className="ghost-btn" href="#eligibility-planner">
              Start calculating
            </a>
            <Link className="primary-btn" to="/support/apply">
              Apply with this eligibility
            </Link>
          </div>
        </div>
        <div className="eligibility-hero-card">
          <p className="eyebrow">Instant insights</p>
          <h3>Know your safe EMI band</h3>
          <p className="calc-hero-note">We keep you under a healthy FOIR so rent, fuel, and bills stay comfortable.</p>
          <div className="hero-mini-stats">
            <div>
              <strong>45%</strong>
              <span>FOIR guardrail</span>
            </div>
            <div>
              <strong>5 secs</strong>
              <span>To get a number</span>
            </div>
            <div>
              <strong>₹0</strong>
              <span>Pre-closure fee</span>
            </div>
          </div>
          <div className="doodle-bubbles" aria-hidden="true">
            <span className="bubble mini" />
            <span className="sparkle" />
          </div>
        </div>
      </section>

      <section className="calculator-visual-shell">
        <div className="calculator-carousel">
          <div className="calculator-carousel__track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {visuals.map((slide) => (
              <div className="calculator-carousel__slide" key={slide.alt}>
                <img src={slide.src} alt={slide.alt} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="calculator-carousel__dots" role="tablist" aria-label="Eligibility visuals">
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
            <span>FOIR-based</span>
            <span>Income-aware</span>
            <span>EMI-first planning</span>
          </div>
        </div>
      </section>

      <section className="calculator-body modern" id="eligibility-planner">
        <div className="calculator-main-card">
          <header className="calculator-head">
            <div>
              <p className="eyebrow">Eligibility planner</p>
              <h2>Calculate your safe borrowing capacity</h2>
              <p className="calculator-subhead">
                Adjust FOIR, income, and tenure. We show your EMI capacity and the maximum loan you should consider before
                you apply.
              </p>
            </div>
            <div className="calculator-meta-tags">
              <span>FOIR up to 65%</span>
              <span>Instant recalculation</span>
              <span>Transparent APR</span>
            </div>
          </header>
          <EligibilityCalculator />
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
            <h3>Guardrails we keep</h3>
            <ul className="calc-bullet-list">
              {guardrails.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default EligibilityCalculatorPage;
