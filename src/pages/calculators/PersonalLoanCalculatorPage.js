import LoanCalculator from '../../components/LoanCalculator';

const personalLoanSliders = {
  amount: { min: 50000, max: 500000, step: 10000, minLabel: '₹50K', maxLabel: '₹5L', defaultValue: 200000 },
  rate: { min: 12, max: 26, step: 0.5, minLabel: '12%', maxLabel: '26%', defaultValue: 14.5 },
  tenure: { min: 6, max: 60, step: 6, minLabel: '6 Months', maxLabel: '60 Months', defaultValue: 24 },
};

const tips = [
  'Lower the tenure to reduce total interest outgo if your cash flows allow higher EMIs.',
  'Use the EMI figure to stay within 45% FOIR (fixed-obligation-to-income ratio).',
  'Prepay anytime without foreclosure charges on E-Fin personal loans.',
];

function PersonalLoanCalculatorPage() {
  return (
    <div className="page calculator-page">
      <section className="calculator-hero">
        <div>
          <span className="eyebrow">Loan Calculators</span>
          <h1>Personal Loan EMI Calculator</h1>
          <p>
            Model your EMIs before applying. Adjust the sliders to match your desired ticket size, interest rate, and
            tenure to find the repayment plan that fits your salary.
          </p>
        </div>
        <ul className="hero-facts">
          <li>
            <strong>₹5L</strong>
            <span>Maximum amount</span>
          </li>
          <li>
            <strong>60 months</strong>
            <span>Flexible tenure</span>
          </li>
          <li>
            <strong>Zero charges</strong>
            <span>On foreclosures</span>
          </li>
        </ul>
      </section>

      <section className="calculator-body">
        <LoanCalculator sliders={personalLoanSliders} />
        <div className="calc-side-card">
          <h3>Smart tips</h3>
          <ul>
            {tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default PersonalLoanCalculatorPage;
