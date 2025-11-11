import { useMemo, useState } from 'react';

const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

function EligibilityCalculator({
  defaultIncome = 60000,
  defaultObligations = 10000,
  defaultRate = 16,
  defaultTenure = 24,
  defaultFoir = 45,
}) {
  const [income, setIncome] = useState(defaultIncome);
  const [obligations, setObligations] = useState(defaultObligations);
  const [rate, setRate] = useState(defaultRate);
  const [tenure, setTenure] = useState(defaultTenure);
  const [foir, setFoir] = useState(defaultFoir);

  const { emiCapacity, eligibleAmount } = useMemo(() => {
    const allowedEmi = Math.max(income * (foir / 100) - obligations, 0);
    const monthlyRate = rate / 12 / 100;
    const months = tenure;

    if (!months) {
      return { emiCapacity: allowedEmi, eligibleAmount: 0 };
    }

    if (!monthlyRate) {
      return { emiCapacity: allowedEmi, eligibleAmount: allowedEmi * months };
    }

    const factor = (1 + monthlyRate) ** months;
    const principal = allowedEmi * ((factor - 1) / (monthlyRate * factor));
    return { emiCapacity: allowedEmi, eligibleAmount: principal };
  }, [income, obligations, foir, rate, tenure]);

  return (
    <div className="eligibility-calculator">
      <div className="eligibility-grid">
        <label htmlFor="income">
          Monthly income
          <input
            id="income"
            type="number"
            min="10000"
            step="1000"
            value={income}
            onChange={(event) => setIncome(Number(event.target.value))}
          />
        </label>
        <label htmlFor="obligations">
          Existing EMIs
          <input
            id="obligations"
            type="number"
            min="0"
            step="1000"
            value={obligations}
            onChange={(event) => setObligations(Number(event.target.value))}
          />
        </label>
        <label htmlFor="rate">
          Expected interest rate (% p.a.)
          <input
            id="rate"
            type="range"
            min="10"
            max="28"
            step="0.5"
            value={rate}
            onChange={(event) => setRate(Number(event.target.value))}
          />
          <div className="range-extents">
            <span>10%</span>
            <span>{rate.toFixed(1)}%</span>
            <span>28%</span>
          </div>
        </label>
        <label htmlFor="tenure">
          Tenure (months)
          <input
            id="tenure"
            type="range"
            min="6"
            max="60"
            step="6"
            value={tenure}
            onChange={(event) => setTenure(Number(event.target.value))}
          />
          <div className="range-extents">
            <span>6</span>
            <span>{tenure}</span>
            <span>60</span>
          </div>
        </label>
        <label htmlFor="foir">
          FOIR cap (% of income)
          <input
            id="foir"
            type="range"
            min="30"
            max="65"
            step="1"
            value={foir}
            onChange={(event) => setFoir(Number(event.target.value))}
          />
          <div className="range-extents">
            <span>30%</span>
            <span>{foir}%</span>
            <span>65%</span>
          </div>
        </label>
      </div>

      <div className="eligibility-summary">
        <div>
          <span>Maximum EMI capacity</span>
          <strong>{currencyFormatter.format(Math.round(emiCapacity))}</strong>
        </div>
        <div>
          <span>Estimated eligible loan amount</span>
          <strong>{currencyFormatter.format(Math.round(eligibleAmount))}</strong>
        </div>
        <p>
          This is an indicative number based on the FOIR rule. Final eligibility depends on your
          bureau score, employer profile, and underwriting policies.
        </p>
      </div>
    </div>
  );
}

export default EligibilityCalculator;
