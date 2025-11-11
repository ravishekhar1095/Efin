import LoanCalculator from '../../components/LoanCalculator';

const instantLoanSliders = {
  amount: { min: 8000, max: 200000, step: 5000, minLabel: '₹8K', maxLabel: '₹2L', defaultValue: 90000 },
  rate: { min: 15, max: 32, step: 0.5, minLabel: '15%', maxLabel: '32%', defaultValue: 20 },
  tenure: { min: 3, max: 24, step: 3, minLabel: '3 Months', maxLabel: '24 Months', defaultValue: 12 },
};

const highlights = [
  { label: 'Ticket size', value: '₹8K – ₹2L' },
  { label: 'Disbursal speed', value: '< 2 mins' },
  { label: 'Processing', value: '100% digital' },
];

function InstantLoanCalculatorPage() {
  return (
    <div className="page calculator-page">
      <section className="calculator-hero">
        <div>
          <span className="eyebrow">Loan Calculators</span>
          <h1>Instant Loan EMI Calculator</h1>
          <p>
            Micro-manage short-tenure cash loans by tweaking loan amount, APR, and tenure. The calculator mirrors E-Fin’s
            instant cash slabs so you can align EMIs with your monthly cash flows.
          </p>
        </div>
        <ul className="hero-facts compact">
          {highlights.map((item) => (
            <li key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="calculator-body">
        <LoanCalculator sliders={instantLoanSliders} ctaLabel="Apply for instant cash" />
        <div className="calc-side-card">
          <h3>When to use</h3>
          <p>Ideal for salary advances, emergency spends, or short-term working capital needs.</p>
          <h3>Things to remember</h3>
          <ul>
            <li>Keep tenure under 12 months to pay less interest.</li>
            <li>Repay early via the E-Fin app to save on interest days.</li>
            <li>Maintain a healthy credit score to unlock better APRs.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default InstantLoanCalculatorPage;
