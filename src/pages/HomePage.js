import { useState } from 'react';
import { Link } from 'react-router-dom';
import googlePlayBadge from '../assets/store/google-play.svg';
import appleStoreBadge from '../assets/store/apple-store.svg';
import instantCashIcon from '../assets/product-icons/instant-cash-loan.png';
import personalLoanIcon from '../assets/product-icons/personal-loan.png';
import emiStoreIcon from '../assets/product-icons/emi-store.png';
import creditScoreIcon from '../assets/offerings/credit-score.png';
import financialWellnessIcon from '../assets/offerings/financial-wellness.png';
import eligibilityIcon from '../assets/offerings/eligibility.png';
import creditCardIcon from '../assets/offerings/credit-card.png';

const HERO_STATS = [
  { label: 'App downloads', value: '34 Mn+' },
  { label: 'Loans given', value: '8 Mn+' },
  { label: 'Money disbursed', value: '₹33,000 Cr+' },
  { label: 'Partner tie-ups', value: '8,000+' },
];

const PRODUCT_CARDS = [
  {
    title: 'Instant Cash Loan',
    description: 'Get cash in your bank account within minutes.',
    to: '/loans/instant-cash-loan',
    icon: instantCashIcon,
  },
  {
    title: 'Personal Loan',
    description: 'Get up to ₹5 lakhs instantly with no collateral.',
    to: '/loans/personal-loan',
    icon: personalLoanIcon,
  },
  {
    title: '2 & 3 Wheeler Loans',
    description: 'Finance bikes, scooters, e-rickshaws, and cargo 3Ws with flexible EMIs.',
    to: '/loans/two-wheeler-loan',
    icon: instantCashIcon,
  },
  {
    title: 'EMI Store',
    description: 'Upgrade gadgets, travel, and more in easy EMIs.',
    to: '/offerings/bnpl',
    icon: emiStoreIcon,
  },
];

const LOAN_STEPS = [
  {
    title: 'Online application',
    copy: 'Download the E-Fin App and provide a few basic details to initiate your application.',
  },
  {
    title: 'Instant approval',
    copy: 'Upload KYC documents digitally and get an approval decision in minutes.',
  },
  {
    title: 'Cash-in-bank in minutes',
    copy: 'Choose the amount you need and receive funds directly in your bank account.',
  },
];

const OTHER_OFFERINGS = [
  {
    title: 'Credit Score',
    copy: 'Check your credit score for free in just 3 minutes.',
    to: '/resources/check-credit-score',
    icon: creditScoreIcon,
  },
  {
    title: 'Financial Wellness',
    copy: 'Create affordability for your employees’ every credit need.',
    to: '/offerings/salary-advance',
    icon: financialWellnessIcon,
  },
  {
    title: 'Eligibility Calculator',
    copy: 'See how much you can borrow with E-Fin.',
    to: '/resources/eligibility-calculator',
    icon: eligibilityIcon,
  },
  {
    title: 'E-Fin Card',
    copy: 'Go numberless with India’s coolest co-branded card.',
    to: '/offerings/card',
    icon: creditCardIcon,
  },
];

const WHY_POINTS = [
  {
    title: 'Responsible credit',
    copy: 'Handle all your last-minute expenses like a pro and repay at your pace.',
  },
  {
    title: 'Transparent journey',
    copy: 'Crystal clear pricing with repayment schedules shared upfront.',
  },
  {
    title: 'Always-on support',
    copy: 'Multilingual support teams, WhatsApp assistance and in-app chat.',
  },
  {
    title: 'Secure by design',
    copy: 'Bank-grade encryption and RBI-compliant processes keep you safe.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'I met with an emergency and E-Fin helped me clear hospital bills in under 10 minutes. The cash was in my account before I left the desk.',
    author: 'Subham Pawar',
    tag: 'Instant loan in minutes',
  },
  {
    quote:
      'The entire process was fast and smooth. I applied online, uploaded KYC and the loan hit my bank on the same day.',
    author: 'Sahitya Goswami',
    tag: 'Quick and easy',
  },
  {
    quote:
      'As a retailer partner, the onboarding app cuts queues during festive rush. Customers love the instant approvals.',
    author: 'Meghna V., Mumbai',
    tag: 'Partner-first support',
  },
];

function HomePage() {
  const [mobile, setMobile] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleHeroSubmit = (event) => {
    event.preventDefault();
    if (!mobile.trim()) {
      return;
    }
    setSubmitted(true);
    setMobile('');
    window.setTimeout(() => setSubmitted(false), 2600);
  };

  return (
    <div className="page fibe-home">
      <section className="hero-block" id="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="eyebrow">India&apos;s largest lending platform</span>
            <h1>Lightning-fast personal loans for everyday upgrades</h1>
            <p>
              Handle trips, gadgets, medical needs, or sudden expenses in a tap. Transparent pricing,
              instant approvals, and money sent straight to your bank.
            </p>
            <div className="hero-cta">
              <Link className="primary-btn" to="/support/apply">
                Get your loan now
              </Link>
              <Link className="ghost-btn" to="/solutions">
                Explore products
              </Link>
            </div>
            <form className="hero-form" onSubmit={handleHeroSubmit}>
              <label htmlFor="hero-mobile">Enter your mobile number</label>
              <div className="hero-form-row">
                <input
                  id="hero-mobile"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="98765 43210"
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                />
                <button type="submit">Get the app link</button>
              </div>
              {submitted && <p className="form-success">Link sent! Check your SMS inbox.</p>}
            </form>
            <div className="hero-badges">
              <span>4.8 ★ on Play Store</span>
              <span>RBI registered NBFC</span>
            </div>
            <div className="store-badges hero-store-badges">
              <a href="https://play.google.com/" target="_blank" rel="noreferrer" className="store-badge">
                <img src={googlePlayBadge} alt="Get it on Google Play" />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" className="store-badge">
                <img src={appleStoreBadge} alt="Download on the App Store" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-bar" aria-label="Key metrics">
        {HERO_STATS.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section-block" id="products">
        <header className="section-heading">
          <span className="eyebrow">Our Products</span>
          <h2>One solution for all life’s big and small upgrades</h2>
          <p>
            It’s quick, safe and simple. Sort out your finances anytime, anywhere — absolutely no
            questions asked.
          </p>
        </header>
        <div className="product-grid">
          {PRODUCT_CARDS.map((card) => (
            <Link key={card.title} to={card.to} className="product-card">
              <img src={card.icon} alt={`${card.title} illustration`} loading="lazy" />
              <div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              <span aria-hidden="true">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-block steps-block" id="how-it-works">
        <header className="section-heading">
          <span className="eyebrow">How to get a personal loan from E-Fin?</span>
          <h2>Borrow and repay on your own terms</h2>
        </header>
        <div className="steps-grid">
          {LOAN_STEPS.map((step, index) => (
            <article key={step.title}>
              <span className="step-index">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block offerings-block" id="offerings">
        <header className="section-heading">
          <span className="eyebrow">Our Other Offerings</span>
          <h2>Everything else you need to keep money moving</h2>
        </header>
        <div className="offering-grid">
          {OTHER_OFFERINGS.map((item) => (
            <Link key={item.title} to={item.to} className="offering-card">
              <img src={item.icon} alt={`${item.title} illustration`} loading="lazy" />
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <span>Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-block why-block" id="why">
        <header className="section-heading">
          <span className="eyebrow">Why choose E-Fin?</span>
          <p>Handle every upgrade like a pro with instant approvals and flexible repayments.</p>
        </header>
        <div className="why-grid">
          {WHY_POINTS.map((point) => (
            <article key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block testimonials-block" id="stories">
        <header className="section-heading">
          <span className="eyebrow">Here&apos;s what our customers think of us!</span>
        </header>
        <div className="testimonial-grid">
          {TESTIMONIALS.map((testimonial) => (
            <blockquote key={testimonial.author}>
              <span className="quote-tag">{testimonial.tag}</span>
              <p>{testimonial.quote}</p>
              <cite>{testimonial.author}</cite>
            </blockquote>
          ))}
        </div>
      </section>

    </div>
  );
}

export default HomePage;
