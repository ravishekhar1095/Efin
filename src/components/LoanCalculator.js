import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const rupeeFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

function LoanCalculator({ defaultAmount = 150000, defaultTenure = 24, defaultRate = 12.5 }) {
  const [amount, setAmount] = useState(defaultAmount);
  const [tenure, setTenure] = useState(defaultTenure);
  const [rate, setRate] = useState(defaultRate);

  const { emi, totalInterest, totalPayable } = useMemo(() => {
    const principal = Number(amount);
    const months = Number(tenure);
    const monthlyRate = Number(rate) / 12 / 100;

    if (!monthlyRate) {
      const simpleEmi = principal / months;
      return {
        emi: simpleEmi,
        totalInterest: 0,
        totalPayable: principal,
      };
    }

    const factor = (1 + monthlyRate) ** months;
    const calculatedEmi = (principal * monthlyRate * factor) / (factor - 1);
    const payable = calculatedEmi * months;

    return {
      emi: calculatedEmi,
      totalInterest: payable - principal,
      totalPayable: payable,
    };
  }, [amount, tenure, rate]);

  const quickAmounts = [50000, 100000, 200000, 300000];
  const quickTenures = [12, 24, 36, 48];

  return (
    <div className="loan-calculator">
      <div className="calculator-header">
        <span>Personal Loan Snapshot</span>
        <strong>{rupeeFormatter.format(amount)}</strong>
      </div>

      <div className="calculator-grid">
        <label htmlFor="loan-amount">
          <span className="label">Loan Amount</span>
          <input
            id="loan-amount"
            type="range"
            min="20000"
            max="500000"
            step="5000"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
          />
          <div className="range-values">
            <span>{rupeeFormatter.format(20000)}</span>
            <span>{rupeeFormatter.format(amount)}</span>
            <span>{rupeeFormatter.format(500000)}</span>
          </div>
          <div className="quick-pills">
            {quickAmounts.map((value) => (
              <button
                key={value}
                type="button"
                className={`pill${amount === value ? ' selected' : ''}`}
                onClick={() => setAmount(value)}
              >
                {rupeeFormatter.format(value)}
              </button>
            ))}
          </div>
        </label>

        <label htmlFor="loan-tenure">
          <span className="label">Tenure (Months)</span>
          <input
            id="loan-tenure"
            type="range"
            min="6"
            max="60"
            step="6"
            value={tenure}
            onChange={(event) => setTenure(Number(event.target.value))}
          />
          <div className="range-values">
            <span>6</span>
            <span>{tenure}</span>
            <span>60</span>
          </div>
          <div className="quick-pills">
            {quickTenures.map((value) => (
              <button
                key={value}
                type="button"
                className={`pill${tenure === value ? ' selected' : ''}`}
                onClick={() => setTenure(value)}
              >
                {value} m
              </button>
            ))}
          </div>
        </label>

        <label htmlFor="interest-rate">
          <span className="label">Interest Rate (% p.a.)</span>
          <input
            id="interest-rate"
            type="range"
            min="10"
            max="28"
            step="0.5"
            value={rate}
            onChange={(event) => setRate(Number(event.target.value))}
          />
          <div className="range-values">
            <span>10%</span>
            <span>{rate.toFixed(1)}%</span>
            <span>28%</span>
          </div>
        </label>
      </div>

      <div className="calculator-summary">
        <div>
          <span className="label">Monthly EMI</span>
          <strong>{rupeeFormatter.format(emi)}</strong>
        </div>
        <div>
          <span className="label">Total Payable</span>
          <strong>{rupeeFormatter.format(totalPayable)}</strong>
        </div>
        <div>
          <span className="label">Total Interest</span>
          <strong>{rupeeFormatter.format(totalInterest)}</strong>
        </div>
      </div>

      <div className="calculator-cta">
        <Link className="primary-btn" to="/support/apply">
          Get Instant Offer
        </Link>
        <Link className="ghost-btn" to="/support">
          Talk to an advisor
        </Link>
      </div>

      <p className="card-footnote">
        Estimates are indicative and subject to final credit approval. Representative APR varies
        based on applicant profile and lender policies.
      </p>
    </div>
  );
}

export default LoanCalculator;
