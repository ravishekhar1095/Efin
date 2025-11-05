import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SolutionsIllustration from '../components/illustrations/SolutionsIllustration';
import ImageCarousel from '../components/ImageCarousel';

const solutionData = [
  {
    id: 'personal-loans',
    title: 'Personal Loans',
    summary:
      'Unsecured credit up to ₹5,00,000 with flexible tenures and transparent pricing for your every need.',
    audience: ['salaried', 'self-employed'],
    link: '/solutions/personal-loans',
    highlights: ['Instant digital KYC', 'Top-up in 6 months', 'Auto-pay setup'],
  },
  {
    id: 'bnpl',
    title: 'Buy Now Pay Later',
    summary:
      'Split your purchases into bite-sized installments across 50+ partner stores without additional paperwork.',
    audience: ['salaried', 'students'],
    link: '/solutions/buy-now-pay-later',
    highlights: ['Zero-cost EMIs', 'One-click checkout', 'Rewarded repayments'],
  },
  {
    id: 'two-wheeler',
    title: 'Two-Wheeler Finance',
    summary:
      'Own your dream ride with minimal down payment, fast approvals, and bundled insurance options.',
    audience: ['salaried', 'self-employed', 'students'],
    link: '/solutions/two-wheeler-finance',
    highlights: ['Doorstep documentation', 'Low down payment', 'Insurance concierge'],
  },
];

const carouselSlides = [
  {
    badge: 'Vehicle Finance',
    title: 'Drive home faster with customised auto loans',
    description:
      'Funding for two-wheelers, passenger and commercial vehicles with flexible down payments and doorstep servicing.',
    list: ['Credit decisions within 2 hours', 'Insurance & accessories bundled', 'Telematics-based offers'],
    background: 'linear-gradient(135deg, #ff6b6b, #556270)',
    imageLabel: 'Auto',
  },
  {
    badge: 'Retail Partnerships',
    title: 'Boost sales with instant consumer durable finance',
    description:
      'Empower your customers with zero-cost EMIs across electronics, furniture, and lifestyle segments through our embedded checkout.',
    list: ['Digital KYC in-store', 'Partner dashboards for performance', 'Cashback and loyalty hooks'],
    background: 'linear-gradient(135deg, #38b2ac, #2c7a7b)',
    imageLabel: 'Retail',
  },
  {
    badge: 'Business Lending',
    title: 'Working capital solutions for MSMEs',
    description:
      'Short-tenure business loans for traders and small manufacturers backed by cash-flow underwriting.',
    list: ['Secured & unsecured options', 'Inventory / invoice based programs', 'Relationship managers on call'],
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    imageLabel: 'MSME',
  },
];

function SolutionsPage() {
  const [selectedAudience, setSelectedAudience] = useState('all');

  const filteredSolutions = useMemo(() => {
    if (selectedAudience === 'all') {
      return solutionData;
    }

    return solutionData.filter((solution) => solution.audience.includes(selectedAudience));
  }, [selectedAudience]);

  const handleAudienceChange = (audience) => () => setSelectedAudience(audience);

  return (
    <div className="page solutions-page">
      <header className="page-hero with-illustration">
        <div className="page-hero-body">
          <span className="badge">Solutions</span>
          <h1>Choose the right credit plan for any milestone</h1>
          <p>
            Efin offers a bouquet of credit products tailored to your lifestyle. Filter by your
            profile and discover offers curated by our experts.
          </p>

          <div className="filter-pills">
            <button
              type="button"
              className={`pill${selectedAudience === 'all' ? ' selected' : ''}`}
              onClick={handleAudienceChange('all')}
            >
              All profiles
            </button>
            <button
              type="button"
              className={`pill${selectedAudience === 'salaried' ? ' selected' : ''}`}
              onClick={handleAudienceChange('salaried')}
            >
              Salaried
            </button>
            <button
              type="button"
              className={`pill${selectedAudience === 'self-employed' ? ' selected' : ''}`}
              onClick={handleAudienceChange('self-employed')}
            >
              Self employed
            </button>
            <button
              type="button"
              className={`pill${selectedAudience === 'students' ? ' selected' : ''}`}
              onClick={handleAudienceChange('students')}
            >
              Students
            </button>
          </div>
        </div>
        <SolutionsIllustration className="page-hero-illustration" />
      </header>

      <section className="section slim">
        <ImageCarousel slides={carouselSlides} />
      </section>

      <section className="section">
        <div className="grid three">
          {filteredSolutions.map((solution) => (
            <article key={solution.id} className="solution-card">
              <h3>{solution.title}</h3>
              <p>{solution.summary}</p>
              <ul>
                {solution.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <Link className="primary-link" to={solution.link}>
                View details →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section split feature-ribbon">
        <div>
          <span className="badge">Service excellence</span>
          <h2>Designed for scale without compromising the human touch</h2>
          <p>
            Whether you are an OEM, retailer, or DSA, Efin’s plug-and-play integrations and dedicated
            partner desks ensure every customer journey is frictionless.
          </p>
          <ul className="feature-list">
            <li>API-first onboarding with options for white-label journeys.</li>
            <li>Dedicated field verification teams across 150+ cities.</li>
            <li>Paperless agreements with e-signature and video KYC support.</li>
          </ul>
          <Link className="primary-link" to="/support#contact">
            Request a partnership walkthrough →
          </Link>
        </div>
        <div className="metrics-card">
          <div>
            <strong>93%</strong>
            <span>Same-day disbursals for eligible cases</span>
          </div>
          <div>
            <strong>45 mins</strong>
            <span>Average end-to-end durable loan journey</span>
          </div>
          <div>
            <strong>4.8 / 5</strong>
            <span>Partner satisfaction score FY24</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Pre-approved partner programs</h2>
        <p className="section-lead">
          Finance big-ticket purchases instantly across electronics, furniture, and lifestyle
          brands with zero additional charges.
        </p>
        <div className="partner-grid">
          <div>
            <strong>Electronics</strong>
            <span>Croma</span>
            <span>Reliance Digital</span>
            <span>Vijay Sales</span>
          </div>
          <div>
            <strong>Appliances</strong>
            <span>LG</span>
            <span>Samsung</span>
            <span>Bajaj</span>
          </div>
          <div>
            <strong>Lifestyle</strong>
            <span>Shoppers Stop</span>
            <span>Nykaa</span>
            <span>Titan</span>
          </div>
          <div>
            <strong>E-commerce</strong>
            <span>Amazon</span>
            <span>Flipkart</span>
            <span>Myntra</span>
          </div>
        </div>
      </section>

      <section className="section journey-highlight">
        <span className="badge">Lifecycle support</span>
        <h2>One platform from acquisition to retention</h2>
        <div className="journey-grid">
          <article>
            <h3>Acquisition</h3>
            <p>Geo-tagged lead distribution, digital pre-screening, and branch-assisted onboarding.</p>
          </article>
          <article>
            <h3>Servicing</h3>
            <p>Omni-channel collections, autopay nudges, and contextual cross-sell programs.</p>
          </article>
          <article>
            <h3>Analytics</h3>
            <p>Partner dashboards that highlight conversion funnels, DPD trends, and repeat usage.</p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default SolutionsPage;
