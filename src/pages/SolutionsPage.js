import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SolutionsIllustration from '../components/illustrations/SolutionsIllustration';
import ImageCarousel from '../components/ImageCarousel';

const AUDIENCE_FILTERS = [
  { id: 'all', label: 'All profiles' },
  { id: 'salaried', label: 'Salaried' },
  { id: 'self-employed', label: 'Self employed' },
  { id: 'students', label: 'Students' },
];

const SOLUTION_METRICS = [
  { label: 'Avg approval time', value: '< 2 mins' },
  { label: 'Ticket size handled', value: '₹5K – ₹25L' },
  { label: 'Partner stores & DSAs', value: '8,000+' },
  { label: 'Cities serviced', value: '150+' },
];

const solutionData = [
  {
    id: 'instant-cash',
    title: 'Instant Cash Loan',
    summary:
      'Digital journeys that credit cash straight to the customer’s bank account in minutes for urgent expenses.',
    audience: ['salaried', 'self-employed'],
    link: '/loans/instant-cash-loan',
    highlights: ['₹5K – ₹5L limit', 'Tenure 3 – 36 months', 'Zero foreclosure fee'],
    range: '₹5K – ₹5L',
    tenure: 'Tenure 3 – 36 months',
    rate: 'From 1.33% p.m.',
    ctaLabel: 'Open cash loans',
  },
  {
    id: 'personal-loans',
    title: 'Personal Loans',
    summary:
      'Longer-tenure loans for travel, education, medical needs, and family celebrations with transparent pricing.',
    audience: ['salaried'],
    link: '/solutions/personal-loans',
    highlights: ['Top-up in 6 months', 'Digital KYC', 'App + WhatsApp servicing'],
    range: '₹25K – ₹5L',
    tenure: 'Tenure 6 – 48 months',
    rate: 'From 13% p.a.',
    ctaLabel: 'View personal loans',
  },
  {
    id: 'bnpl',
    title: 'E-Fin EMIs / BNPL',
    summary:
      'Embedded credit at online and offline checkouts to convert purchases into zero-cost or low-cost EMIs instantly.',
    audience: ['salaried', 'students'],
    link: '/solutions/buy-now-pay-later',
    highlights: ['Decisioning < 5 seconds', 'POS + app journeys', 'Unified dashboards for partners'],
    range: '₹5K – ₹3L',
    tenure: 'Tenure 3 – 24 months',
    rate: 'Processing fee from 0%',
    ctaLabel: 'Explore BNPL',
  },
  {
    id: 'two-wheeler',
    title: 'Two-Wheeler Finance',
    summary:
      'Dealership and OEM-integrated loans that cover bikes, scooters, and EVs with bundled insurance add-ons.',
    audience: ['salaried', 'self-employed', 'students'],
    link: '/solutions/two-wheeler-finance',
    highlights: ['Doorstep documentation', 'Down payment from 5%', 'Telematics-based loyalty'],
    range: '₹40K – ₹5L',
    tenure: 'Tenure 6 – 48 months',
    rate: 'From 11.5% p.a.',
    ctaLabel: 'See 2W journeys',
  },
  {
    id: 'salary-advance',
    title: 'Salary Advance / Corporate',
    summary:
      'Payroll-integrated liquidity for employee emergencies, relocations, and benefits with HR-grade dashboards.',
    audience: ['salaried'],
    link: '/offerings/salary-advance',
    highlights: ['Plug & play APIs', 'Multi-entity support', 'Wellness analytics'],
    range: '₹10K – ₹2L',
    tenure: 'Tenure 1 – 12 months',
    rate: 'Repay via payroll',
    ctaLabel: 'Partner with us',
  },
  {
    id: 'education',
    title: 'Education & Upskilling Loans',
    summary:
      'Financing for certifications, post-graduation, and professional courses with moratorium options and device bundles.',
    audience: ['salaried', 'students'],
    link: '/offerings/education-loan',
    highlights: ['Moratorium up to 6 months', 'Tuition + gadgets covered', 'Co-lending ready'],
    range: '₹25K – ₹10L',
    tenure: 'Tenure 6 – 60 months',
    rate: 'From 12% p.a.',
    ctaLabel: 'Fund learning',
  },
];

const INDUSTRY_STACKS = [
  {
    badge: 'Retail',
    title: 'Consumer Durable Finance',
    copy: 'Unified POS, QR, and app journeys for electronics, furniture, and lifestyle chains.',
    items: ['Zero-cost EMI campaigns', 'In-store digital KYC kits', 'Partner insights console'],
  },
  {
    badge: 'Healthcare',
    title: 'Medical & Wellness',
    copy: 'Surgery, fertility, and wellness packages financed with hospital-assisted onboarding.',
    items: ['Hospital desk widgets', 'Treatment-wise ticket sizes', 'Patient tracking & nudges'],
  },
  {
    badge: 'Mobility',
    title: 'EV & Auto',
    copy: 'Financing layers for OEMs, dealer networks, and fleet partners to accelerate adoption.',
    items: ['Telematics-linked offers', 'Insurance + accessories in one EMI', 'Inventory financing hooks'],
  },
  {
    badge: 'Workplace',
    title: 'Employer Programs',
    copy: 'Salary-linked liquidity and card programs for enterprises, startups, and gig platforms.',
    items: ['Payroll APIs', 'White-labelled apps', 'Employee affordability score'],
  },
];

const PARTNER_SEGMENTS = [
  { title: 'Electronics & Lifestyle', brands: ['Croma', 'Reliance Digital', 'Apple APR', 'Nykaa'] },
  { title: 'Mobility & EV', brands: ['Ather', 'Hero Electric', 'Ola Electric', 'Kinetic'] },
  { title: 'Healthcare', brands: ['Fortis', 'Cloudnine', 'Care Clinics', 'Sarva'] },
  { title: 'E-commerce', brands: ['Amazon', 'Flipkart', 'Myntra', 'MakeMyTrip'] },
];

const JOURNEY_PHASES = [
  {
    badge: 'Acquire',
    title: 'Acquisition',
    copy: 'Geo-tagged lead routing, partner microsites, and assisted onboarding with multilingual support.',
    steps: ['SDKs & hosted pages', 'Auto bureau & banking checks', 'Branch + WhatsApp handoff'],
  },
  {
    badge: 'Serve',
    title: 'Servicing',
    copy: 'Omni-channel customer care teams with proactive nudges, statement downloads, and partner escalations.',
    steps: ['Auto-pay nudges', 'Collections playbooks', 'Partner SLAs & dashboards'],
  },
  {
    badge: 'Grow',
    title: 'Analytics & retention',
    copy: 'Portfolio intelligence to monitor DPD, repeat usage, and cross-sell opportunities.',
    steps: ['Delinquency radar', 'Cohort-based insights', 'Rewards + referrals'],
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
      <header className="solutions-hero">
        <div className="solutions-hero__content">
          <span className="badge">Credit solutions</span>
          <h1>One platform for every borrower journey</h1>
          <p>
            From instant cash to salary-linked liquidity, E-Fin builds responsible journeys that keep
            approvals fast, operations lean, and experiences joyful. Filter by profile to explore
            the right program.
          </p>
          <div className="audience-pills">
            {AUDIENCE_FILTERS.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={selectedAudience === filter.id ? 'selected' : undefined}
                onClick={handleAudienceChange(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="solution-metrics">
            {SOLUTION_METRICS.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="solutions-hero__visual">
          <SolutionsIllustration className="solutions-hero__illustration" />
          <div className="solutions-hero__tile primary">
            <span>Same-day disbursals</span>
            <strong>93%</strong>
            <p>Eligible cases funded within business hours.</p>
          </div>
          <div className="solutions-hero__tile secondary">
            <span>Partner happiness</span>
            <strong>4.8 / 5</strong>
            <p>Average CSAT across OEM & HR partners.</p>
          </div>
        </div>
      </header>

      <section className="solutions-section">
        <header className="section-heading">
          <span className="eyebrow">Product stack</span>
          <h2>Pick the journey that fits your customers</h2>
          <p>
            Each program is configurable with co-lending, white-labelling, and analytics hooks so
            you can launch, test, and scale swiftly.
          </p>
        </header>
        <div className="solution-grid">
          {filteredSolutions.map((solution) => (
            <article key={solution.id} className="solution-card">
              <div className="solution-card__meta">
                <span>{solution.range}</span>
                <span>{solution.tenure}</span>
              </div>
              <h3>{solution.title}</h3>
              <p>{solution.summary}</p>
              <ul>
                {solution.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="solution-card__footer">
                <span>{solution.rate}</span>
                <Link className="primary-link" to={solution.link}>
                  {solution.ctaLabel} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section slim">
        <ImageCarousel slides={carouselSlides} />
      </section>

      <section className="solutions-section industry-section">
        <header className="section-heading">
          <span className="eyebrow">Industry stacks</span>
          <h2>Purpose-built programs for every partner</h2>
          <p>Launch fast with pre-built flows for retail, mobility, healthcare, and enterprise ecosystems.</p>
        </header>
        <div className="industry-grid">
          {INDUSTRY_STACKS.map((stack) => (
            <article key={stack.title} className="industry-card">
              <span className="badge muted">{stack.badge}</span>
              <h3>{stack.title}</h3>
              <p>{stack.copy}</p>
              <ul>
                {stack.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section split feature-ribbon">
        <div>
          <span className="badge">Service excellence</span>
          <h2>Scale responsibly without losing the human touch</h2>
          <p>
            Dedicated pods co-create journeys with OEMs, retailers, and HR teams. APIs, SDKs, and
            in-store toolkits ensure you can go live in weeks, not months.
          </p>
          <ul className="feature-list">
            <li>API-first onboarding and white-label options.</li>
            <li>Field verification teams across 150+ cities.</li>
            <li>Paperless agreements with e-sign and video KYC.</li>
          </ul>
          <Link className="primary-link" to="/support#contact">
            Request a partnership walkthrough →
          </Link>
        </div>
        <div className="metrics-card">
          <div>
            <strong>8,000+</strong>
            <span>Active merchants & alliances</span>
          </div>
          <div>
            <strong>45 mins</strong>
            <span>Average durable loan journey</span>
          </div>
          <div>
            <strong>99.5%</strong>
            <span>Platform uptime</span>
          </div>
        </div>
      </section>

      <section className="section partner-section">
        <header className="section-heading">
          <span className="eyebrow">Partner universe</span>
          <h2>Pre-approved programs across categories</h2>
          <p className="section-lead">
            Embed E-Fin credit across online and offline channels to boost conversion, repeat usage, and
            NPS.
          </p>
        </header>
        <div className="partner-grid">
          {PARTNER_SEGMENTS.map((segment) => (
            <div key={segment.title}>
              <strong>{segment.title}</strong>
              {segment.brands.map((brand) => (
                <span key={brand}>{brand}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section journey-highlight">
        <span className="badge">Lifecycle support</span>
        <h2>One platform from acquisition to retention</h2>
        <div className="journey-grid">
          {JOURNEY_PHASES.map((phase) => (
            <article key={phase.title}>
              <span>{phase.badge}</span>
              <h3>{phase.title}</h3>
              <p>{phase.copy}</p>
              <ul>
                {phase.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SolutionsPage;
