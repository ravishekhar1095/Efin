import { useMemo, useState } from 'react';
import ApplicationIllustration from '../components/illustrations/ApplicationIllustration';

const rupeeFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

function ApplyPage() {
  const [formData, setFormData] = useState({
    employmentType: 'salaried',
    monthlyIncome: 35000,
    loanAmount: 150000,
    tenure: 24,
  });

  const preview = useMemo(() => {
    const interestRate = formData.employmentType === 'salaried' ? 13.2 : 15.8;
    const monthlyRate = interestRate / 12 / 100;
    const factor = (1 + monthlyRate) ** formData.tenure;
    const emi = (formData.loanAmount * monthlyRate * factor) / (factor - 1);
    return {
      interestRate,
      emi,
    };
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'employmentType' ? value : Number(value),
    }));
  };

  return (
    <div className="page apply-page">
      <header className="page-hero with-illustration">
        <div className="page-hero-body">
          <span className="badge">Apply Now</span>
          <h1>Get a personalised offer in 2 minutes</h1>
          <p>
            Share a few quick details so we can pre-qualify you for the best loan partner. This does
            not impact your credit score.
          </p>
        </div>
        <ApplicationIllustration className="page-hero-illustration" />
      </header>

      <section className="section apply-section">
        <form className="apply-form">
          <label htmlFor="employmentType">
            Employment type
            <select
              id="employmentType"
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
            >
              <option value="salaried">Salaried</option>
              <option value="self-employed">Self-employed</option>
              <option value="professional">Professional</option>
            </select>
          </label>
          <label htmlFor="monthlyIncome">
            Monthly income (₹)
            <input
              id="monthlyIncome"
              name="monthlyIncome"
              type="number"
              min="20000"
              step="5000"
              value={formData.monthlyIncome}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="loanAmount">
            Desired loan amount (₹)
            <input
              id="loanAmount"
              name="loanAmount"
              type="number"
              min="20000"
              step="5000"
              value={formData.loanAmount}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="tenure">
            Tenure (months)
            <input
              id="tenure"
              name="tenure"
              type="number"
              min="6"
              max="60"
              step="6"
              value={formData.tenure}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="primary-btn" disabled>
            Submit application (coming soon)
          </button>
          <p className="form-note">
            Submission is disabled in this demo. In production you would be redirected to our
            partner KYC flow.
          </p>
        </form>

        <aside className="offer-preview">
          <h2>Your indicative offer</h2>
          <div>
            <span>Employment type</span>
            <strong>{formData.employmentType}</strong>
          </div>
          <div>
            <span>Requested amount</span>
            <strong>{rupeeFormatter.format(formData.loanAmount)}</strong>
          </div>
          <div>
            <span>Tenure</span>
            <strong>{formData.tenure} months</strong>
          </div>
          <div>
            <span>Estimated rate</span>
            <strong>{preview.interestRate.toFixed(2)}% p.a.</strong>
          </div>
          <div>
            <span>Estimated EMI</span>
            <strong>{rupeeFormatter.format(preview.emi)}</strong>
          </div>
          <p>
            Final offer may vary after verification. Complete KYC to lock this rate and receive
            disbursal within 24 hours.
          </p>
        </aside>
      </section>
    </div>
  );
}

export default ApplyPage;
