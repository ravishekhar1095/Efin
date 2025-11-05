import { Link } from 'react-router-dom';
import LoanCalculator from '../components/LoanCalculator';
import HeroIllustration from '../components/illustrations/HeroIllustration';
import BrandCarousel from '../components/BrandCarousel';

const PARTNER_BRANDS = [
  {
    name: 'Hero MotoCorp',
    initials: 'HM',
    colors: ['#d40000', '#111111'],
  },
  {
    name: 'Bajaj Electricals',
    initials: 'BE',
    colors: ['#f04c2f', '#f9a602'],
  },
  {
    name: 'LG',
    initials: 'LG',
    colors: ['#a50034', '#d4145a'],
  },
  {
    name: 'Reliance Digital',
    initials: 'RD',
    colors: ['#005daa', '#f26622'],
  },
  {
    name: 'Flipkart',
    initials: 'FK',
    colors: ['#047bd5', '#f7c542'],
    accent: '#0b3d91',
  },
  {
    name: 'Samsung',
    initials: 'SG',
    colors: ['#1428a0', '#2a5bd7'],
  },
];

function HomePage() {
  return (
    <div className="page home-page">
      <section className="hero hero-premium">
        <div className="hero-copy">
          <h1>Powering ambitions with India&apos;s most trusted retail-focused NBFC.</h1>
          <p>
            Efin delivers quick, transparent, and responsible credit that helps individuals and
            businesses move forward—be it vehicle purchase, business expansion, or personal goals.
            With partner-first service and nationwide reach, we make financing effortless.
          </p>
          <div className="hero-actions">
            <Link className="primary-btn" to="/support/apply">
              Apply in minutes
            </Link>
            <Link className="ghost-btn" to="/solutions">
              Explore Offers
            </Link>
          </div>
          <ul className="hero-highlights">
            <li>Pan-India presence across 500+ cities</li>
            <li>Digitised onboarding with doorstep support</li>
            <li>Dedicated advisors for every customer</li>
          </ul>
        </div>
        <div className="hero-visual">
          <div className="hero-bubble" />
          <HeroIllustration className="hero-illustration" />
        </div>
      </section>

      <section className="stats-ribbon">
        <div>
          <span className="ribbon-label">Customers Served</span>
          <strong>30 Lakh+</strong>
        </div>
        <div>
          <span className="ribbon-label">Disbursal Value</span>
          <strong>₹14,500 Cr+</strong>
        </div>
        <div>
          <span className="ribbon-label">Retail &amp; OEM Partners</span>
          <strong>70+</strong>
        </div>
        <div>
          <span className="ribbon-label">Branches &amp; Kiosks</span>
          <strong>900+</strong>
        </div>
      </section>

      <section className="section offerings" id="solutions">
        <header className="section-header">
          <span className="badge">Our Offerings</span>
          <h2>Tailored finance solutions for every milestone</h2>
          <p>
            Choose from a wide suite of lending programs backed by strong risk management and
            decades of on-ground experience.
          </p>
        </header>
        <div className="offer-grid">
          <article className="offer-card">
            <h3>Vehicle Finance</h3>
            <p>
              Drive home faster with structured EMIs, flexible down payments, and bundled insurance
              for two-wheelers and passenger vehicles.
            </p>
            <Link to="/solutions/two-wheeler-finance">Explore vehicle finance →</Link>
          </article>
          <article className="offer-card">
            <h3>Consumer Durable Loans</h3>
            <p>
              Upgrade to the latest electronics and appliances through zero-cost EMIs across our
              nationwide retail partner network.
            </p>
            <Link to="/solutions/buy-now-pay-later">Discover retail finance →</Link>
          </article>
          <article className="offer-card">
            <h3>Personal &amp; Business Loans</h3>
            <p>
              bridge working capital gaps or fund personal goals with transparent interest rates and
              speedy approvals.
            </p>
            <Link to="/solutions/personal-loans">Check eligibility →</Link>
          </article>
          <article className="offer-card">
            <h3>Insurance &amp; Protection</h3>
            <p>
              Safeguard your assets with curated insurance products and add-on covers that align
              with your finance plan.
            </p>
            <Link to="/support#contact">Talk to an advisor →</Link>
          </article>
        </div>
      </section>

      <section className="section emi-section" id="calculator">
        <div className="emi-header">
          <span className="badge">EMI Calculator</span>
          <h2>Plan your repayment with precision</h2>
          <p>
            Adjust amount, tenure, and rate to instantly view monthly EMIs and total payable. Once
            you&apos;re ready, submit your application to receive a personalised offer.
          </p>
        </div>
        <div className="emi-layout">
          <LoanCalculator />
          <div className="emi-insights">
            <h3>Why customers love our planner</h3>
            <ul>
              <li>Real-time indicative EMI breakdown with zero paperwork.</li>
            <li>Pre-filled defaults based on popular Efin loan slabs.</li>
              <li>One-click connect to an advisor for customised rates.</li>
            </ul>
            <Link className="primary-link" to="/support/apply">
              Start application →
            </Link>
          </div>
        </div>
      </section>

      <section className="section steps" id="steps">
        <header className="section-header">
          <span className="badge">Fast-track journey</span>
          <h2>From enquiry to disbursal in three intuitive steps</h2>
        </header>
        <div className="timeline">
          <div className="timeline-item">
            <span className="step-number">1</span>
            <h3>Share your details</h3>
            <p>
              Fill a short form with your PAN and employment details in less than two minutes.
            </p>
          </div>
          <div className="timeline-item">
            <span className="step-number">2</span>
            <h3>Get a tailored offer</h3>
            <p>
              Our smart assessment engine pairs you with offers suited to your credit profile.
            </p>
          </div>
          <div className="timeline-item">
            <span className="step-number">3</span>
            <h3>Sign and receive funds</h3>
            <p>
              Accept the offer, sign digitally, and track disbursal in the app until the money
              hits your account.
            </p>
          </div>
        </div>
      </section>

      <section className="section assurance" id="benefits">
        <div className="assurance-grid">
          <article>
            <span className="icon">⚡</span>
            <h3>Speed with certainty</h3>
            <p>
              Instant approvals and quick disbursals backed by digitised KYC, doorstep document
              pickup, and a robust risk engine.
            </p>
          </article>
          <article>
            <span className="icon">🛡️</span>
            <h3>Transparent pricing</h3>
            <p>
              Clear repayment schedules, customised interest slabs, and no hidden surprises. Check
              exact charges before you sign.
            </p>
          </article>
          <article>
            <span className="icon">🤝</span>
            <h3>Partner-first support</h3>
            <p>
              Multilingual service desks and co-branded programs with leading OEMs ensure consistent
              support throughout your loan lifecycle.
            </p>
          </article>
        </div>
      </section>

      <section className="section testimonials">
        <header className="section-header">
          <span className="badge">Customer stories</span>
          <h2>Trusted by lakhs of customers and partners</h2>
        </header>
        <div className="testimonial-grid">
          <blockquote>
            <p>
              “Efin&apos;s team processed my auto loan in two days flat. They handled insurance,
              RC, and even scheduled a delivery slot. It felt effortless.”
            </p>
            <cite>Anirudh P., Pune</cite>
          </blockquote>
          <blockquote>
            <p>
              “As a retailer partner, the Efin onboarding app cuts queues during festive rush.
              My customers love the instant approvals.”
            </p>
            <cite>Meghna V., Mumbai</cite>
          </blockquote>
          <blockquote>
            <p>
              “The EMI planner helped me pick a tenor that fit my salary. Support in Tamil ensured I
              understood every detail before signing.”
            </p>
            <cite>Kavya R., Chennai</cite>
          </blockquote>
        </div>
      </section>

      <section className="section partner-strip">
        <h2>Partnering with leading brands</h2>
        <p className="section-lead">
          From dealerships to consumer brands, Efin drives growth through embedded finance.
        </p>
        <BrandCarousel brands={PARTNER_BRANDS} />
      </section>

      <section className="section app-download">
        <div className="app-card">
          <h2>Manage credit on the go</h2>
          <p>
            Track EMIs, download statements, and receive upgrade offers with the Efin mobile
            app—your all-in-one command centre.
          </p>
          <div className="store-buttons">
            <button type="button">Get it on Google Play</button>
            <button type="button">Download on the App Store</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
