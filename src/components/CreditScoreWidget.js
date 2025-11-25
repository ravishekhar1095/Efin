import { useMemo, useState } from 'react';

const scoreRanges = [
  { label: 'Excellent', min: 780 },
  { label: 'Good', min: 720 },
  { label: 'Fair', min: 650 },
  { label: 'Needs work', min: 0 },
];

function CreditScoreWidget() {
  const [formData, setFormData] = useState({
    fullName: '',
    pan: '',
    dob: '',
    email: '',
    phone: '',
    creditCards: 1,
    loans: 1,
    onTimePayments: 90,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  const derivedScore = useMemo(() => {
    const base = 600;
    const cardBoost = Math.max(0, 2 - formData.creditCards) * 15;
    const loanLoad = Math.max(0, formData.loans - 1) * -20;
    const paymentBonus = Math.min(Math.max(formData.onTimePayments, 0), 100) * 1.5;
    const rawScore = base + cardBoost + loanLoad + paymentBonus;
    return Math.max(300, Math.min(900, Math.round(rawScore)));
  }, [formData.creditCards, formData.loans, formData.onTimePayments]);

  const scoreLabel =
    scoreRanges.find((range) => derivedScore >= range.min)?.label ?? 'Needs work';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        ['creditCards', 'loans', 'onTimePayments'].includes(name) ? Number(value) : value.toUpperCase(),
    }));
    setSubmitted(false);
    setHasChecked(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsChecking(true);
    window.setTimeout(() => {
      setIsChecking(false);
      setSubmitted(true);
      setHasChecked(true);
    }, 800);
  };

  const displayScore = hasChecked ? derivedScore : '---';
  const displayLabel = hasChecked ? scoreLabel : 'Ready to check';

  return (
    <div className="credit-score-widget">
      <form onSubmit={handleSubmit} className="credit-form">
        <label htmlFor="fullName">
          Full name
          <input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="pan">
          PAN
          <input
            id="pan"
            name="pan"
            maxLength={10}
            value={formData.pan}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="dob">
          Date of birth
          <input id="dob" name="dob" type="date" value={formData.dob} onChange={handleChange} required />
        </label>
        <label htmlFor="email">
          Email
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label htmlFor="phone">
          Mobile number
          <input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91" required />
        </label>
        <label htmlFor="creditCards">
          Active credit cards
          <input
            id="creditCards"
            name="creditCards"
            type="number"
            min="0"
            max="5"
            value={formData.creditCards}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="loans">
          Active loans
          <input
            id="loans"
            name="loans"
            type="number"
            min="0"
            max="5"
            value={formData.loans}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="onTimePayments">
          On-time payment %
          <input
            id="onTimePayments"
            name="onTimePayments"
            type="range"
            min="50"
            max="100"
            step="1"
            value={formData.onTimePayments}
            onChange={handleChange}
          />
          <div className="range-extents">
            <span>50%</span>
            <span>{formData.onTimePayments}%</span>
            <span>100%</span>
          </div>
        </label>
        <button type="submit" className="primary-btn" disabled={isChecking}>
          {isChecking ? 'Checking...' : 'Check score'}
        </button>
        <p className="form-note">
          We respect your privacy. Submitting this simulation does not impact your real credit score.
        </p>
      </form>

      <div className="credit-score-result">
        <div className="score-circle">
          <strong>{displayScore}</strong>
          <span>/900</span>
        </div>
        <h3>{displayLabel}</h3>
        <p>
          {hasChecked
            ? scoreLabel === 'Excellent'
              ? 'Great job! You are likely to unlock the best rates with E-Fin.'
              : 'Improve your standing by keeping utilisation low and paying on time.'
            : 'Submit the form to see your simulated range and get improvement tips.'}
        </p>
        {submitted && (
          <div className="success-banner" aria-live="polite">
            We’ve sent a detailed report to your inbox.
          </div>
        )}
      </div>
    </div>
  );
}

export default CreditScoreWidget;
