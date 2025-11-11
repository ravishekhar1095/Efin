import { useState } from 'react';
import { Link } from 'react-router-dom';
import googlePlayBadge from '../assets/store/google-play.svg';
import appleStoreBadge from '../assets/store/apple-store.svg';
import instantCashIcon from '../assets/product-icons/instant-cash-loan.png';
import personalLoanIcon from '../assets/product-icons/personal-loan.png';
import loanAgainstIcon from '../assets/product-icons/loan-against-mf.png';
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
    title: 'Loan Against Mutual Fund',
    description: 'Borrow using mutual fund holdings in minutes.',
    to: '/offerings/loan-against-mutual-funds',
    icon: loanAgainstIcon,
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

const CALCULATOR_TOOLS = [
  {
    title: 'Personal Loan EMI Calculator',
    copy: 'Get EMI amount, repayment tenure and interest rate beforehand.',
    to: '/resources/personal-loan-emi-calculator',
  },
  {
    title: 'Instant Loan EMI Calculator',
    copy: 'Know your EMI amount in seconds to plan finances better.',
    to: '/resources/instant-loan-emi-calculator',
  },
  {
    title: 'Eligibility Calculator',
    copy: 'Check your loan eligibility in a few taps.',
    to: '/resources/eligibility-calculator',
  },
  {
    title: 'Check Credit Score',
    copy: 'Get your credit score for free before applying for a loan.',
    to: '/resources/check-credit-score',
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
    title: 'E-Fin Axis Bank Credit Card',
    copy: 'Go numberless with India’s coolest co-branded card.',
    to: '/offerings/fibe-axis-bank-credit-card',
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

const AWARDS = [
  {
    title: 'ET BFSI Innovation Tribe',
    copy: 'Winner - Most Innovative Lending Product 2024.',
  },
  {
    title: 'IAMAI India Digital Awards',
    copy: 'Best Use of Technology by an NBFC.',
  },
  {
    title: 'Great Place To Work',
    copy: 'Certified for people-first culture three years in a row.',
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

const BLOG_POSTS = [
  {
    title: 'Year-End Financial Checklist for Every Salaried Employee',
    date: '30 Oct 2025',
    category: 'Finance',
    excerpt:
      'Review your earnings, expenses, and savings so you can start the next financial year with clarity and confidence.',
  },
  {
    title: 'How to Get Instant Cash Loans in Minutes with E-Fin',
    date: '19 Sep 2025',
    category: 'Loans',
    excerpt:
      'A quick guide that walks you through eligibility, documents, and tips to keep EMIs affordable.',
  },
  {
    title: '5 Reasons to Try the E-Fin Axis Bank Credit Card',
    date: '28 Aug 2025',
    category: 'Cards',
    excerpt: 'Discover numberless security, tap payments, and lifestyle benefits built for Gen-Z.',
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
            <h1>
              Lightning-fast upgrades with <span>Personal Loans</span>
            </h1>
            <p>
              One solution for all life’s big and small upgrades. Plan your dream trip, learn a new
              skill or handle an emergency with E-Fin’s instant loans. It’s quick, safe, and always
              available.
            </p>
            <div className="hero-cta">
              <Link className="primary-btn" to="/support/apply">
                Get your loan now
              </Link>
              <Link className="ghost-btn" to="/solutions">
                Explore our products
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
        <div className="hero-visual">
          <div className="hero-insight primary">
            <div className="hero-pill">Trusted by 34Mn+ Indians</div>
            <div className="hero-snapshot">
              <p>Illustrative offer</p>
              <h3>₹2,00,000</h3>
              <ul>
                <li>Interest rate: 14% p.a.</li>
                <li>Tenure: 24 months</li>
                <li>EMI: ₹9,579</li>
              </ul>
            </div>
            <p className="hero-note">No hidden fees. Foreclose at zero charges.</p>
          </div>
          <div className="hero-mini-cards">
            <div>
              <span>Approval speed</span>
              <strong>Instant</strong>
            </div>
            <div>
              <span>Disbursal</span>
              <strong>&lt; 2 mins</strong>
            </div>
            <div>
              <span>Channels</span>
              <strong>App · WhatsApp</strong>
            </div>
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

      <section className="section-block calculator-block" id="calculator">
        <div className="calculator-copy">
          <span className="eyebrow">Loan Calculators</span>
          <h2>Skip the guesswork before you apply</h2>
          <p>
            Explore dedicated tools for every scenario—whether you want to simulate a personal loan,
            crunch instant cash EMIs, understand eligibility, or check your credit score.
          </p>
          <div className="calculator-tools">
            {CALCULATOR_TOOLS.map((tool) => (
              <Link key={tool.title} to={tool.to} className="tool-card">
                <h3>{tool.title}</h3>
                <p>{tool.copy}</p>
                <span>Open</span>
              </Link>
            ))}
          </div>
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
          <h2>The cool new vibe to finance</h2>
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

      <section className="section-block awards-block" id="awards">
        <header className="section-heading">
          <span className="eyebrow">Awards and Achievements</span>
          <h2>The industry recognises us as much as our customers do</h2>
        </header>
        <div className="awards-grid">
          {AWARDS.map((award) => (
            <article key={award.title}>
              <h3>{award.title}</h3>
              <p>{award.copy}</p>
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

      <section className="section-block download-block" id="download">
        <div className="download-card">
          <div>
            <span className="eyebrow">The cool new vibe to finance</span>
            <h2>Download the E-Fin app and get instant cash anywhere</h2>
            <p>Track EMIs, download statements, and unlock personalised offers on the go.</p>
          </div>
          <div className="store-badges">
            <a href="https://play.google.com/" className="store-badge" target="_blank" rel="noreferrer">
              <img src={googlePlayBadge} alt="Get it on Google Play" />
            </a>
            <a href="https://www.apple.com/app-store/" className="store-badge" target="_blank" rel="noreferrer">
              <img src={appleStoreBadge} alt="Download on the App Store" />
            </a>
          </div>
        </div>
      </section>

      <section className="section-block blog-block" id="blog">
        <header className="section-heading">
          <span className="eyebrow">E-Fin Blogs</span>
          <h2>Learn the smart way to handle credit</h2>
        </header>
        <div className="blog-grid">
          {BLOG_POSTS.map((post) => (
            <article key={post.title}>
              <div className="blog-meta">
                <span>{post.category}</span>
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link to="/learn/blogs" className="primary-link">
                Read More
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
