import { Link } from 'react-router-dom';
import ShoppingIllustration from '../components/illustrations/ShoppingIllustration';
import ImageCarousel from '../components/ImageCarousel';
import BrandCarousel from '../components/BrandCarousel';

const bnplSlides = [
  {
    badge: 'Electronics',
    title: 'Upgrade gadgets without the upfront pinch',
    description:
      'Split your smartphone or laptop purchase into zero-cost EMIs with approvals completed in store in less than 2 minutes.',
    list: ['Credit limits up to ₹2,00,000', 'Seasonal cashback and exchange boosts'],
    background: 'linear-gradient(135deg, #6c5ce7, #0984e3)',
    imageLabel: 'Tech',
  },
  {
    badge: 'Lifestyle & Fashion',
    title: 'Own the latest collections, pay over time',
    description:
      'Style enthusiasts can unlock flexible tenures for apparel, jewellery, and premium accessories at partner outlets.',
    list: ['Instant e-KYC via Aadhaar OTP', 'Co-branded card-less experience'],
    background: 'linear-gradient(135deg, #fd79a8, #e84393)',
    imageLabel: 'Style',
  },
  {
    badge: 'Healthcare & Wellness',
    title: 'Prioritise health with easy instalments',
    description:
      'From dental procedures to fitness memberships, E-Fin BNPL covers essential spends with assured support.',
    list: ['No-cost EMIs up to 12 months', 'Pre-approved upgrades for family members'],
    background: 'linear-gradient(135deg, #00cec9, #0984e3)',
    imageLabel: 'Care',
  },
];

const BNPL_BRANDS = [
  { name: 'Croma', initials: 'CR', colors: ['#0b8457', '#0f9d58'] },
  { name: 'Reliance Digital', initials: 'RD', colors: ['#005daa', '#f26622'] },
  { name: 'Vijay Sales', initials: 'VS', colors: ['#f00000', '#000000'] },
  { name: 'Nykaa', initials: 'NY', colors: ['#ff5da2', '#ff176b'] },
  { name: 'Titan', initials: 'TT', colors: ['#562158', '#a767b9'] },
  { name: 'Apollo Pharmacy', initials: 'AP', colors: ['#1b998b', '#117a65'] },
];

function BnplPage() {
  return (
    <div className="page detail-page">
      <header className="page-hero with-illustration">
        <div className="page-hero-body">
          <span className="badge">Buy Now Pay Later</span>
          <h1>Shop now, split payments with zero stress</h1>
          <p>
            E-Fin BNPL lets you convert any purchase into easy monthly installments at checkout.
            Enjoy zero-cost EMIs on partner stores and instant approvals on the E-Fin app.
          </p>
        </div>
        <ShoppingIllustration className="page-hero-illustration" />
      </header>

      <section className="section slim">
        <ImageCarousel slides={bnplSlides} interval={5500} />
      </section>

      <section className="section">
        <h2>How BNPL works</h2>
        <div className="grid three">
          <article>
            <h3>Scan &amp; select EMI</h3>
            <p>
              Scan the QR code at partner stores or choose E-Fin in online checkout to view EMI
              options tailored for you.
            </p>
          </article>
          <article>
            <h3>Instant decision</h3>
            <p>
              Our systems run eligibility in real time and approve within seconds without additional
              documentation.
            </p>
          </article>
          <article>
            <h3>Track repayments</h3>
            <p>
              Manage all EMIs inside the E-Fin app with auto reminders, statement downloads, and
              upgrade offers.
            </p>
          </article>
        </div>
      </section>

      <section className="section split feature-ribbon">
        <div>
          <span className="badge">Checkout intelligence</span>
          <h2>Seamless journeys for customers and store staff</h2>
          <p>
            E-Fin BNPL integrates across POS systems, e-commerce checkouts, and WhatsApp commerce flows to ensure
            minimal friction and higher conversion.
          </p>
          <ul className="feature-list">
            <li>Modular SDKs and APIs for web, app, and in-store kiosks.</li>
            <li>Dynamic credit limits based on purchase category and user behaviour.</li>
            <li>Store associate app with instant offer preview and application tracking.</li>
          </ul>
        </div>
        <div className="metrics-card">
          <div>
            <strong>18%</strong>
            <span>Average uplift in partner conversion</span>
          </div>
          <div>
            <strong>40 sec</strong>
            <span>Median checkout time with E-Fin BNPL</span>
          </div>
          <div>
            <strong>₹3,200</strong>
            <span>Average basket value increase for lifestyle partners</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Partner categories</h2>
        <div className="partner-grid">
          <div>
            <strong>Electronics</strong>
            <span>Apple</span>
            <span>OnePlus</span>
            <span>Samsung</span>
          </div>
          <div>
            <strong>Lifestyle</strong>
            <span>H&M</span>
            <span>Westside</span>
            <span>Zara</span>
          </div>
          <div>
            <strong>Healthcare</strong>
            <span>Apollo</span>
            <span>Fortis</span>
            <span>MedPlus</span>
          </div>
          <div>
            <strong>Edtech</strong>
            <span>upGrad</span>
            <span>Byju&apos;s</span>
            <span>Udemy</span>
          </div>
        </div>
        <p className="section-lead">
          Don&apos;t see your favourite brand?{' '}
          <Link to="/support#contact">Tell us and we will notify you when it is live.</Link>
        </p>
      </section>

      <section className="section partner-strip">
        <h2>Trusted by India&apos;s favourite retailers</h2>
        <BrandCarousel brands={BNPL_BRANDS} />
      </section>

      <section className="section cta-banner">
        <div>
        <h2>Activate E-Fin BNPL in your store</h2>
          <p>
            Get a dedicated relationship manager, staff training, and performance analytics from day one. Reach out to
            build a co-branded experience that delights your customers.
          </p>
        </div>
        <Link className="primary-btn" to="/support#contact">
          Become a partner
        </Link>
      </section>
    </div>
  );
}

export default BnplPage;
