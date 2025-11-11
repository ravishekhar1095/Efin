import { useMemo, useState } from 'react';

const rupeeFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

const APPLY_STATS = [
  { label: 'Sanction speed', value: '< 2 mins' },
  { label: 'Ticket size', value: '₹25K – ₹25L' },
  { label: 'Coverage', value: '150+ cities' },
];

const PRODUCT_TYPES = [
  { value: 'personal-loan', label: 'Personal Loan' },
  { value: 'business-loan', label: 'Business Loan' },
  { value: 'secured-business', label: 'Secured Business Loan' },
  { value: 'ev-loan', label: 'EV 2W/3W Loan' },
];

function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    employmentType: 'salaried',
    product: 'personal-loan',
    monthlyIncome: 40000,
    loanAmount: 200000,
    tenure: 18,
  });
  const [status, setStatus] = useState('idle');

  const preview = useMemo(() => {
    const baseRateMap = {
      'personal-loan': 13.2,
      'business-loan': 16.5,
      'secured-business': 12.4,
      'ev-loan': 11.9,
    };
    const interestRate = baseRateMap[formData.product] || 14.5;
    const monthlyRate = interestRate / 12 / 100;
    const factor = (1 + monthlyRate) ** formData.tenure;
    const emi =
      formData.tenure > 0
        ? (formData.loanAmount * monthlyRate * factor) / (factor - 1)
        : formData.loanAmount;
    return {
      interestRate,
      emi,
    };
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === 'employmentType' || name === 'product'
          ? value
          : ['fullName', 'email', 'phone', 'city'].includes(name)
            ? value
            : Number(value),
    }));
    if (status !== 'idle') {
      setStatus('idle');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('submitted');
  };

  return (
    <div className="page apply-page">
      <section className="apply-hero">
        <div>
          <span className="eyebrow">Apply with E-Fin</span>
          <h1>Request your personalised offer</h1>
          <p>
            Share a few details, select the product you&apos;re interested in, and our advisors will call
            you back with the best-fit plan. It takes under two minutes and doesn&apos;t impact your credit
            score.
          </p>
        </div>
        <div className="apply-highlights">
          {APPLY_STATS.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="apply-content">
        <form className="apply-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label htmlFor="fullName">
              Full name
              <input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Aarav Sharma"
                required
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@efin.co.in"
                required
              />
            </label>
            <label htmlFor="phone">
              Mobile number
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
              />
            </label>
            <label htmlFor="city">
              Current city
              <input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="New Delhi"
                required
              />
            </label>
          </div>

          <div className="form-grid">
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
                <option value="entrepreneur">Entrepreneur</option>
              </select>
            </label>
            <label htmlFor="product">
              Product you&apos;re interested in
              <select id="product" name="product" value={formData.product} onChange={handleChange}>
                {PRODUCT_TYPES.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="slider-grid">
            <div>
              <div className="slider-heading">
                <span>Monthly income</span>
                <strong>{rupeeFormatter.format(formData.monthlyIncome)}</strong>
              </div>
              <input
                type="range"
                min="20000"
                max="200000"
                step="5000"
                name="monthlyIncome"
                value={formData.monthlyIncome}
                onChange={handleChange}
              />
              <div className="range-extents">
                <span>₹20K</span>
                <span>₹2L</span>
              </div>
            </div>
            <div>
              <div className="slider-heading">
                <span>Desired loan amount</span>
                <strong>{rupeeFormatter.format(formData.loanAmount)}</strong>
              </div>
              <input
                type="range"
                min="50000"
                max="500000"
                step="10000"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
              />
              <div className="range-extents">
                <span>₹50K</span>
                <span>₹5L</span>
              </div>
            </div>
            <div>
              <div className="slider-heading">
                <span>Preferred tenure</span>
                <strong>{formData.tenure} months</strong>
              </div>
              <input
                type="range"
                min="6"
                max="48"
                step="6"
                name="tenure"
                value={formData.tenure}
                onChange={handleChange}
              />
              <div className="range-extents">
                <span>6</span>
                <span>48</span>
              </div>
            </div>
          </div>

          <button type="submit" className="primary-btn">
            Request a callback
          </button>
          {status === 'submitted' && (
            <p className="form-note success">
              Thanks! Our E-Fin advisor will reach out within one business day.
            </p>
          )}
          <p className="form-note">
            We never share your data with unauthorised parties. Submitting this form will NOT impact
            your credit score.
          </p>
        </form>

        <aside className="apply-summary">
          <div className="summary-card">
            <h2>Indicative offer</h2>
            <div>
              <span>Product</span>
              <strong>{PRODUCT_TYPES.find((item) => item.value === formData.product)?.label}</strong>
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
              Final terms are shared post-verification. Complete KYC to lock this rate and receive
              disbursal within 24 hours of approval.
            </p>
          </div>

          <div className="contact-card">
            <h3>Need help?</h3>
            <p>Talk to our advisors for faster onboarding or custom loan structures.</p>
            <a href="tel:+919997842548">+91-9997842548</a>
            <a href="mailto:care@efin.co.in">care@efin.co.in</a>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default ApplyPage;
