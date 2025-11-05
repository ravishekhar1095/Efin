import { Link } from 'react-router-dom';
import LoanCalculator from '../components/LoanCalculator';
import HeroIllustration from '../components/illustrations/HeroIllustration';
import ImageCarousel from '../components/ImageCarousel';

const stories = [
  {
    badge: 'Success Story',
    title: 'Emergency medical care funded within hours',
    description:
      'Same-day approval for a ₹2.2L medical procedure with zero collateral and doorstep processing.',
    list: ['E-sign completed from hospital', 'EMI holiday for first 2 months'],
    background: 'linear-gradient(135deg, #f56565, #f6ad55)',
    imageLabel: 'Care',
  },
  {
    badge: 'Education Upgrade',
    title: 'Upskill with affordable EMI plans',
    description:
      'Part-time MBA aspirants enjoy structured repayments with step-up EMIs aligned to salary hikes.',
    list: ['Tenure up to 48 months', 'Top-up enabled after 6 EMIs'],
    background: 'linear-gradient(135deg, #4299e1, #667eea)',
    imageLabel: 'Learn',
  },
  {
    badge: 'Business Boost',
    title: 'Bridge working capital for small businesses',
    description:
      'Retail entrepreneur expanded inventory before festivities with a ₹3L loan processed in 24 hours.',
    list: ['Bank statement analysis', 'Flexible repayment date scheduling'],
    background: 'linear-gradient(135deg, #48bb78, #38a169)',
    imageLabel: 'Biz',
  },
];

function PersonalLoansPage() {
  return (
    <div className="page detail-page">
      <header className="page-hero with-illustration">
        <div className="page-hero-body">
          <span className="badge">Personal Loans</span>
          <h1>Finance life&apos;s big decisions without the wait</h1>
          <p>
            Whether it&apos;s medical expenses, education fees, or dream vacations, Efin personal
            loans give you fast access to funds with predictable EMIs and absolutely no hidden charges.
          </p>
        </div>
        <HeroIllustration className="page-hero-illustration" />
      </header>

      <section className="section slim">
        <ImageCarousel slides={stories} interval={6000} />
      </section>

      <section className="section split">
        <div>
          <h2>Why borrowers love Efin personal loans</h2>
          <ul className="feature-list">
            <li>Instant approvals up to ₹5,00,000 with minimal documentation.</li>
            <li>Flexible tenure between 6 and 60 months based on your comfort.</li>
            <li>Part-prepayments allowed after 6 EMIs without penalty.</li>
            <li>Dedicated loan guide from application to final repayment.</li>
          </ul>
        </div>
        <LoanCalculator defaultAmount={250000} defaultTenure={36} defaultRate={13.25} />
      </section>

      <section className="section info-grid">
        <article>
          <h3>Who can apply?</h3>
          <ul>
            <li>Salaried individuals with monthly income of ₹20,000 or above.</li>
            <li>Self-employed professionals with minimum 1 year business vintage.</li>
            <li>Residents aged 21-58 with a valid PAN and Aadhaar.</li>
          </ul>
        </article>
        <article>
          <h3>Documentation</h3>
          <ul>
            <li>Identity & address proof (Aadhaar / Passport / DL).</li>
            <li>Income proof (salary slips / GST returns / bank statements).</li>
            <li>Office address proof for self-employed applicants.</li>
          </ul>
        </article>
        <article>
          <h3>Repayment options</h3>
          <ul>
            <li>Auto-debit via NACH, debit card, or UPI mandate.</li>
            <li>Flexible EMI dates aligned with salary credit.</li>
            <li>Part-prepayment up to 25% of principal once every quarter.</li>
          </ul>
        </article>
      </section>

      <section className="section rate-table">
        <h2>Indicative pricing</h2>
        <div className="rate-grid">
          <div>
            <span>Loan amount</span>
            <strong>₹50,000 - ₹5,00,000</strong>
          </div>
          <div>
            <span>Tenure range</span>
            <strong>6 - 60 months</strong>
          </div>
          <div>
            <span>Interest rate</span>
            <strong>11.99% p.a. onwards</strong>
          </div>
          <div>
            <span>Processing fee</span>
            <strong>Up to 2.5%</strong>
          </div>
        </div>
        <p>
          Final rates depend on applicant profile and employer category. A detailed amortisation schedule is shared
          before disbursal for complete transparency.
        </p>
      </section>

      <section className="section steps alt">
        <h2>Approval checklist</h2>
        <div className="timeline">
          <div className="timeline-item">
            <span className="step-number">1</span>
            <h3>KYC Documents</h3>
            <p>PAN, Aadhaar and address proof. You can upload scans or click a photo instantly.</p>
          </div>
          <div className="timeline-item">
            <span className="step-number">2</span>
            <h3>Income Proof</h3>
            <p>3 month salary slips or 6 month bank statements for self-employed applicants.</p>
          </div>
          <div className="timeline-item">
            <span className="step-number">3</span>
            <h3>E-mandate setup</h3>
            <p>Authorize hassle-free auto-debit via netbanking, debit card, or NACH form.</p>
          </div>
        </div>
      </section>

      <section className="section cta-banner">
        <div>
          <h2>Ready to apply?</h2>
          <p>
            Upload your documents, lock in the EMI plan that works best, and track every stage inside the Efin app.
            Our loan specialists are available over call and WhatsApp for any support.
          </p>
        </div>
        <Link className="primary-btn" to="/support/apply">
          Start your application
        </Link>
      </section>
    </div>
  );
}

export default PersonalLoansPage;
