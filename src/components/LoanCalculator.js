import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

const DEFAULT_SLIDERS = {
  amount: {
    label: 'Loan amount',
    min: 8000,
    max: 500000,
    step: 1000,
    minLabel: '₹8K',
    maxLabel: '₹5L',
    defaultValue: 145000,
    formatValue: (value) => currencyFormatter.format(value),
  },
  rate: {
    label: 'Interest rate',
    min: 12,
    max: 30,
    step: 2,
    minLabel: '12%',
    maxLabel: '30%',
    defaultValue: 14,
    formatValue: (value) => `${value}%`,
  },
  tenure: {
    label: 'Select EMI option',
    min: 6,
    max: 36,
    step: 3,
    minLabel: '6 Months',
    maxLabel: '36 Months',
    defaultValue: 12,
    formatValue: (value) => `${value} Months`,
  },
};

function LoanCalculator({
  sliders = {},
  ctaLabel = 'Apply now',
  ctaTo = '/support/apply',
  note = 'Estimates are indicative and subject to final credit approval. Representative APR varies based on applicant profile and lender policies.',
}) {
  const mergedSliders = {
    amount: { ...DEFAULT_SLIDERS.amount, ...(sliders.amount || {}) },
    rate: { ...DEFAULT_SLIDERS.rate, ...(sliders.rate || {}) },
    tenure: { ...DEFAULT_SLIDERS.tenure, ...(sliders.tenure || {}) },
  };

  const [amount, setAmount] = useState(
    mergedSliders.amount.defaultValue ?? mergedSliders.amount.min,
  );
  const [rate, setRate] = useState(mergedSliders.rate.defaultValue ?? mergedSliders.rate.min);
  const [tenure, setTenure] = useState(
    mergedSliders.tenure.defaultValue ?? mergedSliders.tenure.min,
  );

  const { emi, totalInterest, totalPayable } = useMemo(() => {
    const principal = Number(amount);
    const months = Number(tenure);
    const monthlyRate = Number(rate) / 12 / 100;

    if (!monthlyRate || !months) {
      const baseEmi = months ? principal / months : principal;
      return {
        emi: baseEmi,
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

  const handleSliderChange = (id) => (event) => {
    const value = Number(event.target.value);
    if (id === 'amount') setAmount(value);
    if (id === 'rate') setRate(value);
    if (id === 'tenure') setTenure(value);
  };

  const sliderList = [
    { id: 'amount', ...mergedSliders.amount },
    { id: 'rate', ...mergedSliders.rate },
    { id: 'tenure', ...mergedSliders.tenure },
  ];

  return (
    <div className="loan-calculator">
      <div className="loan-calculator__inputs">
        {sliderList.map((slider) => {
          const currentValue =
            slider.id === 'amount' ? amount : slider.id === 'rate' ? rate : tenure;
          return (
            <div className="slider-field" key={slider.id}>
              <div className="slider-heading">
                <label htmlFor={`slider-${slider.id}`}>{slider.label}</label>
                <span className="value-chip">
                  {slider.formatValue ? slider.formatValue(currentValue) : currentValue}
                </span>
              </div>
              <input
                id={`slider-${slider.id}`}
                type="range"
                min={slider.min}
                max={slider.max}
                step={slider.step}
                value={currentValue}
                onChange={handleSliderChange(slider.id)}
              />
              <div className="range-extents">
                <span>{slider.minLabel ?? slider.min}</span>
                <span>{slider.maxLabel ?? slider.max}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="loan-calculator__summary">
        <div className="emi-highlight">
          <p>Your monthly instalment:</p>
          <strong>{currencyFormatter.format(Math.round(emi || 0))}</strong>
        </div>
        <div className="summary-grid">
          <div className="summary-row">
            <span>Total interest</span>
            <strong>{currencyFormatter.format(Math.max(totalInterest, 0))}</strong>
          </div>
          <div className="summary-row">
            <span>Principal amount</span>
            <strong>{currencyFormatter.format(amount)}</strong>
          </div>
          <div className="summary-row total">
            <span>Total amount</span>
            <strong>{currencyFormatter.format(Math.max(totalPayable, 0))}</strong>
          </div>
        </div>
        <Link className="primary-btn" to={ctaTo}>
          {ctaLabel}
        </Link>
        {note && <p className="card-footnote">{note}</p>}
      </div>
    </div>
  );
}

export default LoanCalculator;
