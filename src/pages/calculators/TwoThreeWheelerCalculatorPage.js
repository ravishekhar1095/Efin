import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoanCalculator from '../../components/LoanCalculator';

const vehicleLoanSliders = {
  amount: { min: 30000, max: 600000, step: 10000, minLabel: '₹30K', maxLabel: '₹6L', defaultValue: 180000 },
  rate: { min: 9.5, max: 24, step: 0.5, minLabel: '9.5%', maxLabel: '24%', defaultValue: 13 },
  tenure: { min: 6, max: 48, step: 6, minLabel: '6 Months', maxLabel: '48 Months', defaultValue: 24 },
};

const highlights = [
  { label: 'On-road coverage', value: 'Up to 95%' },
  { label: 'Repayment range', value: '6 – 48 months' },
  { label: 'Vehicle types', value: '2W & 3W (ICE/EV)' },
  { label: 'Pre-closure fee', value: '₹0' },
];

const steps = [
  { label: 'Pick your ride', detail: 'Select the on-road price minus down payment.' },
  { label: 'Dial in APR', detail: 'Use expected APR or check the range from your dealer.' },
  { label: 'Set tenure', detail: 'Align EMIs to your fuel/charging and maintenance flows.' },
  { label: 'Apply', detail: 'Lock the plan and finish KYC to get funded fast.' },
];

const inclusions = [
  { title: 'Fuel or EV ready', note: 'Covers petrol, diesel, or electric scooters, bikes, rickshaws, and cargo 3W.' },
  { title: 'Accessories & permits', note: 'Bundle helmets, smart locks, delivery boxes, or regional permits upfront.' },
  { title: 'Insurance add-ons', note: 'Include own damage, zero depreciation, and roadside assistance if needed.' },
];

function TwoThreeWheelerCalculatorPage() {
  const slides = [
    { src: `${process.env.PUBLIC_URL}/2%20wheel.png`, alt: 'Two wheeler on the move' },
    { src: `${process.env.PUBLIC_URL}/3wheel.png`, alt: 'Three wheeler parked at the curb' },
    { src: `${process.env.PUBLIC_URL}/2wheel%20eletric.png`, alt: 'Electric scooter ready for city rides' },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <div className="page calculator-page">
      <section className="calculator-hero two-wheeler-hero">
        <div className="calc-hero-copy">
          <span className="info-pill">Ride-ready EMI</span>
          <h1>2 &amp; 3 Wheeler EMI Calculator</h1>
          <p>
            Estimate EMIs for scooters, bikes, e-rickshaws, and cargo 3-wheelers. Adjust on-road price, APR, and tenure to
            see the plan that keeps your monthly cash flows smooth.
          </p>
          <div className="calc-chip-row">
            {highlights.map((item) => (
              <span className="calc-chip" key={item.label}>
                <strong>{item.value}</strong>
                <small>{item.label}</small>
              </span>
            ))}
          </div>
          <div className="calc-hero-cta">
            <a className="ghost-btn" href="#two-wheeler-planner">
              Start planning
            </a>
            <Link className="primary-btn" to="/support/apply">
              Apply with this EMI
            </Link>
          </div>
        </div>
        <div className="two-wheeler-hero-visual">
          <div className="doodle-bubble bubble-a" aria-hidden="true" />
          <div className="doodle-bubble bubble-b" aria-hidden="true" />
          <div className="two-wheeler-hero-card">
            <p className="eyebrow">Fast-track approval</p>
            <h3>Sanction in minutes</h3>
            <p className="calc-hero-note">Digital KYC, doorstep support, and 0 pre-closure fees.</p>
            <div className="hero-mini-stats">
              <div>
                <strong>95%</strong>
                <span>On-road financing</span>
              </div>
              <div>
                <strong>48</strong>
                <span>Month max tenure</span>
              </div>
              <div>
                <strong>EV</strong>
                <span>Friendly terms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="calculator-visual-shell">
        <div className="calculator-carousel">
          <div
            className="calculator-carousel__track"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div className="calculator-carousel__slide" key={slide.alt}>
                <img src={slide.src} alt={slide.alt} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="calculator-carousel__dots" role="tablist" aria-label="Vehicle visuals">
            {slides.map((_, index) => (
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
            <span>Petrol &amp; diesel</span>
            <span>Electric ready</span>
            <span>Cargo &amp; passenger 3W</span>
          </div>
        </div>
        <div className="carousel-doodle" aria-hidden="true">
          <span className="doodle-dot" />
          <span className="doodle-line" />
        </div>
      </section>

      <section className="calculator-body modern" id="two-wheeler-planner">
        <div className="calculator-main-card">
          <header className="calculator-head">
            <div>
              <p className="eyebrow">EMI planner</p>
              <h2>Plan EMIs for bikes, scooters, and 3-wheelers</h2>
              <p className="calculator-subhead">
                Move the sliders to view EMI, total interest, and total payable instantly. Try a shorter tenure first,
                then adjust until it fits your monthly surplus.
              </p>
            </div>
            <div className="calculator-meta-tags">
              <span>On-road friendly</span>
              <span>EV &amp; ICE covered</span>
              <span>No pre-closure fees</span>
            </div>
          </header>
          <LoanCalculator sliders={vehicleLoanSliders} ctaLabel="Apply for 2/3 wheeler loan" />
        </div>
        <aside className="calculator-aside">
          <div className="calc-side-card tinted">
            <h3>Route to ride</h3>
            <ol>
              {steps.map((step) => (
                <li key={step.label}>
                  <strong>{step.label}</strong>
                  <span>{step.detail}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="calc-side-card compact">
            <h3>What this covers</h3>
            <ul className="calc-bullet-list">
              {inclusions.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong> — {item.note}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default TwoThreeWheelerCalculatorPage;
