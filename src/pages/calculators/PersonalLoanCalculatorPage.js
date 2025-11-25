import { Link } from 'react-router-dom';
import LoanCalculator from '../../components/LoanCalculator';

const personalLoanSliders = {
  amount: { min: 50000, max: 500000, step: 10000, minLabel: '₹50K', maxLabel: '₹5L', defaultValue: 200000 },
  rate: { min: 12, max: 26, step: 0.5, minLabel: '12%', maxLabel: '26%', defaultValue: 14.5 },
  tenure: { min: 6, max: 60, step: 6, minLabel: '6 Months', maxLabel: '60 Months', defaultValue: 24 },
};

const quickFacts = [
  { label: 'Ticket size', value: '₹50K – ₹5L' },
  { label: 'Tenure', value: '6 – 60 months' },
  { label: 'Pre-closure fee', value: '₹0' },
  { label: 'APR range', value: '14% – 26%' },
];

const guardrails = [
  'Aim to keep EMIs within 45% of your monthly income for healthy FOIR.',
  'Pick shorter tenures when you can to reduce total interest outgo.',
  'You can prepay early without foreclosure charges on E-Fin personal loans.',
];

const steps = [
  { title: 'Set your amount', detail: 'Start with what you actually need, not the maximum eligibility.' },
  { title: 'Tune the rate', detail: 'Use the APR range you expect based on your profile.' },
  { title: 'Pick tenure', detail: 'Balance EMI comfort with total interest — try a mid-point first.' },
  { title: 'Apply', detail: 'Take the best-fit plan forward with a fully digital journey.' },
];

const scenarios = [
  { title: 'Salary buffer', amount: '₹1.5L for 18 months', insight: 'Keeps EMI light while limiting interest drag.' },
  { title: 'Aggressive paydown', amount: '₹2L for 12 months', insight: 'Higher EMI but reduces total outgo meaningfully.' },
  { title: 'Big-ticket upgrade', amount: '₹4L for 48 months', insight: 'Longer runway for larger expenses like relocation.' },
];

function PersonalLoanCalculatorPage() {
  return (
    <div className="page calculator-page">
      <section className="calculator-hero enhanced">
        <div className="calc-hero-copy">
          <span className="info-pill">EMI planning</span>
          <h1>Personal Loan EMI Calculator</h1>
          <p>
            Model your repayment with total cost clarity. Adjust amount, APR, and tenure to see how EMIs shift before you
            apply — so you only borrow what fits your salary.
          </p>
          <div className="calc-chip-row">
            {quickFacts.map((fact) => (
              <span key={fact.label} className="calc-chip">
                <strong>{fact.value}</strong>
                <small>{fact.label}</small>
              </span>
            ))}
          </div>
        </div>
        <div className="calc-hero-panel">
          <div className="calc-hero-stat">
            <p>Ready-made EMI guardrails</p>
            <strong>Stay under 45% FOIR</strong>
            <span>Keep your EMI manageable alongside rent and credit cards.</span>
          </div>
          <ul className="calc-hero-list">
            {guardrails.slice(0, 2).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="calc-hero-cta">
            <a className="ghost-btn" href="#emi-planner">
              Start planning
            </a>
            <Link className="primary-btn" to="/support/apply">
              Apply with this plan
            </Link>
          </div>
        </div>
      </section>

      <section className="calculator-body modern" id="emi-planner">
        <div className="calculator-main-card">
          <header className="calculator-head">
            <div>
              <p className="eyebrow">EMI planner</p>
              <h2>Dial in your repayment plan</h2>
              <p className="calculator-subhead">
                Move the sliders to see EMI, total interest, and total payable side by side. Tweak one input at a time to
                find your comfort band.
              </p>
            </div>
            <div className="calculator-meta-tags">
              <span>Sliders update live</span>
              <span>Numbers shown in INR</span>
              <span>Transparent APR</span>
            </div>
          </header>
          <LoanCalculator
            sliders={personalLoanSliders}
            ctaLabel="Apply with this EMI"
            note="Estimates are indicative. Final APR depends on your profile, credit checks, and lender policies."
          />
        </div>
        <aside className="calculator-aside">
          <div className="calc-side-card tinted">
            <h3>How to read this calculator</h3>
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
            <h3>Guardrails</h3>
            <ul className="calc-bullet-list">
              {guardrails.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="calc-grid-section">
        <div className="section-heading">
          <p className="eyebrow">Starter presets</p>
          <h2>Skip the guesswork with these EMI-ready scenarios</h2>
          <p className="calculator-subhead">
            Quick presets you can mirror with the sliders to see if the repayment shape works for your salary and goals.
          </p>
        </div>
        <div className="calc-scenario-grid">
          {scenarios.map((scenario) => (
            <article className="calc-scenario-card" key={scenario.title}>
              <div>
                <p className="calc-scenario-kicker">{scenario.title}</p>
                <h3>{scenario.amount}</h3>
                <p>{scenario.insight}</p>
              </div>
              <button
                type="button"
                className="ghost-btn"
                onClick={() => {
                  const planner = document.getElementById('emi-planner');
                  if (planner) {
                    planner.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Try in calculator
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PersonalLoanCalculatorPage;
