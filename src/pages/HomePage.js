import { useState } from 'react';
import { Link } from 'react-router-dom';
import googlePlayBadge from '../assets/store/google-play.svg';
import appleStoreBadge from '../assets/store/apple-store.svg';
import instantCashIcon from '../assets/product-icons/instant-cash-loan.png';
import personalLoanIcon from '../assets/product-icons/personal-loan.png';
import emiStoreIcon from '../assets/product-icons/emi-store.png';

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
    amount: 'Up to ₹5 Lakhs',
  },
  {
    title: 'Personal Loan',
    description: 'Get up to ₹5 lakhs instantly with no collateral.',
    to: '/loans/personal-loan',
    icon: personalLoanIcon,
    amount: 'Up to ₹5 Lakhs',
  },
  {
    title: '2 & 3 Wheeler Loans',
    description: 'Finance bikes, scooters, e-rickshaws, and cargo 3Ws with flexible EMIs.',
    to: '/loans/two-wheeler-loan',
    icon: instantCashIcon,
    amount: 'Flexible EMIs',
  },
  {
    title: 'EMI Store',
    description: 'Upgrade gadgets, travel, and more in easy EMIs.',
    to: '/offerings/bnpl',
    icon: emiStoreIcon,
    amount: '0% Interest',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'I met with an emergency and E-Fin helped me clear hospital bills in under 10 minutes. The cash was in my account before I left the desk.',
    author: 'Subham Pawar',
    tag: 'Instant loan in minutes',
    role: 'Medical emergency borrower',
    image: 'https://images.unsplash.com/photo-1582719478248-70e57188f5b5?auto=format&fit=crop&w=600&q=80',
  },
  {
    quote:
      'The entire process was fast and smooth. I applied online, uploaded KYC and the loan hit my bank on the same day.',
    author: 'Sahitya Goswami',
    tag: 'Quick and easy',
    role: 'Personal loan customer',
    image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=600&q=80',
  },
  {
    quote:
      'As a retailer partner, the onboarding app cuts queues during festive rush. Customers love the instant approvals.',
    author: 'Meghna V., Mumbai',
    tag: 'Partner-first support',
    role: 'Retail partner',
    image: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=600&q=80',
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
      {/* Hero Section */}
      <section className="hero-block" id="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="eyebrow">🏆 India's largest lending platform</span>
            <h1>
              <span className="highlight-text">India's fastest growing lending platform.</span>
              We serve the community when you borrow from us.
            </h1>
            <p>
              Handle trips, gadgets, medical needs, or sudden expenses in a tap. Transparent pricing,
              instant approvals, and money sent straight to your bank account.
            </p>
            <div className="hero-cta">
              <Link className="primary-btn" to="/support/apply">
                Get your loan now →
              </Link>
              <Link className="ghost-btn" to="/solutions">
                Explore products
              </Link>
            </div>
            <div className="hero-badges">
              <span>⭐ 4.8 on Play Store</span>
              <span>🏛️ RBI registered NBFC</span>
              <span>🔒 100% Secure</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-carousel">
              <div className="carousel-track">
                <img src="/3wheel.png" alt="3 Wheeler" className="carousel-image" />
              </div>
              <div className="carousel-track">
                <img src="/2wheel eletric.png" alt="Electric 2 Wheeler" className="carousel-image" />
              </div>
              <div className="carousel-track">
                <img src="/2 wheel.png" alt="2 Wheeler" className="carousel-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-block" id="products">
        <header className="section-heading">
          <span className="eyebrow">Our Products</span>
          <h2>One solution for all life's big and small upgrades</h2>
          <p>
            Quick, safe, and simple. Sort out your finances anytime, anywhere — absolutely no
            questions asked.
          </p>
        </header>
        <div className="product-grid">
          {PRODUCT_CARDS.map((card) => (
            <Link key={card.title} to={card.to} className="product-card modern">
              <img src={card.icon} alt={`${card.title} illustration`} loading="lazy" />
              <div className="product-content">
                <div className="product-badge">{card.amount}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              <span className="product-arrow" aria-hidden="true">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-block testimonials-block" id="stories">
        <header className="section-heading">
          <span className="eyebrow">Here's what our customers think of us!</span>
          <h2>Real stories from borrowers and partners</h2>
          <p>Speed, transparency, and human support are our north stars. Here's how that feels in real life.</p>
        </header>
        <div className="testimonial-marquee">
          <div className="testimonial-track">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
              <article key={`${testimonial.author}-${index}`} className="testimonial-item">
                <div className="testimonial-avatar round">
                  <img src={testimonial.image} alt={testimonial.author} loading="lazy" />
                </div>
                <div className="testimonial-text">
                  <span className="quote-tag">{testimonial.tag}</span>
                  <p>"{testimonial.quote}"</p>
                  <div className="testimonial-meta">
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to get started?</h2>
          <p>Join millions of Indians who trust E-Fin for their financial needs</p>
          <div className="cta-buttons">
            <Link className="primary-btn large" to="/support/apply">
              Apply for Loan →
            </Link>
            <Link className="ghost-btn large" to="/login">
              Login to Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
