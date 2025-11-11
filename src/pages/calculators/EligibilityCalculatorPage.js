import EligibilityCalculator from '../../components/EligibilityCalculator';

const highlights = [
  { label: 'FOIR rule', value: '≤ 45%' },
  { label: 'Inputs needed', value: 'Income + EMIs' },
  { label: 'Output', value: 'Max loan amount' },
];

function EligibilityCalculatorPage() {
  return (
    <div className="page calculator-page">
      <section className="calculator-hero">
        <div>
          <span className="eyebrow">Loan Calculators</span>
          <h1>Eligibility Calculator</h1>
          <p>
            Estimate how much you can borrow based on your monthly income, existing EMIs, and desired tenure. This tool
            uses the FOIR (fixed-obligation-to-income ratio) principle to provide a quick view.
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
        <EligibilityCalculator />
        <div className="calc-side-card">
          <h3>How it works</h3>
          <ol>
            <li>We cap your total EMIs to a FOIR limit (typically 40–45% of monthly income).</li>
            <li>We subtract your existing obligations to get the EMI capacity.</li>
            <li>We reverse-calculate the principal you can borrow for the chosen tenure and APR.</li>
          </ol>
          <p className="note">
            Final eligibility also factors in credit score, employment stability, and document verification.
          </p>
        </div>
      </section>
    </div>
  );
}

export default EligibilityCalculatorPage;
