import SupportIllustration from '../components/illustrations/SupportIllustration';
import ImageCarousel from '../components/ImageCarousel';

const partnerSlides = [
  {
    badge: 'Ecosystem',
    title: 'OEM & dealer alliances',
    description:
      'Embedded finance journeys inside partner apps and showrooms accelerate approvals without compromising compliance.',
    list: ['Instant KYC pipes', 'Co-branded journeys'],
    background: 'linear-gradient(135deg, #84fab0, #8fd3f4)',
    imageLabel: 'OEM',
  },
  {
    badge: 'Technology',
    title: 'Data platform & underwriting',
    description:
      'AI-assisted scorecards blend bureau, cash-flow, and behavioural data to personalise pricing and detect risk early.',
    list: ['Alt-data ingestion', 'Fraud intelligence'],
    background: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    imageLabel: 'Tech',
  },
  {
    badge: 'Care',
    title: 'Human advisors',
    description:
      'Multilingual teams support borrowers through WhatsApp, telephony, and on-ground desks to keep satisfaction scores high.',
    list: ['Support in 8 languages', 'Proactive nudges'],
    background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
    imageLabel: 'Care',
  },
];

const COMPANY_FACTS = [
  { label: 'Incorporated', value: '1995' },
  { label: 'RBI COR', value: '14.00526' },
  { label: 'CIN', value: 'U74899DL1995PTC067535' },
];

const MISSION_POINTS = [
  'We focus on young working professionals and small entrepreneurs who are underserved by traditional lenders.',
  'Our mission is to build an ecosystem that helps mid-income households fulfil their aspirations responsibly.',
  'We continue to evolve with customers’ financial needs, expanding products that power lifestyle upgrades.',
];

const PRODUCT_LINES = [
  'Short-term Personal Loan for Salaried',
  'Short-term Business Loan (Unsecured)',
  'Secured Business Loans',
  'EV 2W/3W Loans',
];

const OFFICES = [
  {
    title: 'Registered Office',
    address: '302, Pratap Chambers, Karol Bagh, New Delhi-110005, India',
  },
  {
    title: 'Corporate Office',
    address: 'C-74, Sector 63, Noida 201301',
  },
];

const CONTACT_LINKS = [
  { label: 'Phone', value: '+91-9997842548', href: 'tel:+919997842548' },
  { label: 'Email', value: 'care@e-fin.in', href: 'mailto:care@e-fin.in' },
];

const TIMELINE = [
  {
    year: '1995',
    title: 'MLB Securities Pvt. Ltd. is incorporated',
    detail:
      'We begin as a boutique financial services firm with a focus on transparent governance and customer-first advisory.',
  },
  {
    year: '2015 – 2020',
    title: 'Digital rails built',
    detail:
      'Invested in cloud-native core systems, bureau integrations, and multilingual support to prepare for retail lending.',
  },
  {
    year: '2025',
    title: 'E-Fin lending launches',
    detail:
      'Rolled out instant personal loans and MSME lines of credit for young professionals and small entrepreneurs.',
  },
  {
    year: '2028',
    title: 'Responsible growth at scale',
    detail:
      'Expanded into secured business loans and EV finance while keeping delinquencies below industry averages.',
  },
];

const CLIENT_REVIEWS = [
  {
    quote:
      'E-Fin\'s team understood my working capital crunch and released funds within 36 hours. The repayment plan synced perfectly with my payouts.',
    author: 'Meera S., D2C Founder',
  },
  {
    quote:
      'Transparent pricing and multilingual advisors made my relocation loan stress-free. I even prepaid without penalties.',
    author: 'Abhinav T., Product Manager',
  },
  {
    quote:
      'Our EV dealership onboarding was seamless. E-Fin built a co-branded journey that keeps our riders loyal.',
    author: 'Nishant B., Mobility Partner',
  },
];

const PILLARS = [
  { title: 'Regulatory-first', detail: 'RBI-registered NBFC with transparent governance and ISO 27001-certified infra.' },
  { title: 'Human + tech', detail: 'AI-assisted underwriting paired with multilingual advisors across every channel.' },
  { title: 'Always-on support', detail: 'In-app, WhatsApp, telephony, and doorstep teams for every customer journey.' },
];

const IMPACT = [
  { label: 'Borrowers served', value: '2.4M+' },
  { label: 'Partner network', value: '8,000+' },
  { label: 'Cities covered', value: '220+' },
  { label: 'Avg satisfaction', value: '4.7/5' },
];

const LEADERS = [
  { name: 'Nupur Malhotra', title: 'CEO & Director', focus: 'Governance & growth' },
  { name: 'Anish Sharma', title: 'Chief Risk Officer', focus: 'Underwriting & portfolio quality' },
  { name: 'Ria Deshpande', title: 'Head of Partnerships', focus: 'Alliances & embedded journeys' },
];

function WhyFinanceCoPage() {
  return (
    <div className="page why-page">
      <header className="about-hero">
        <div>
          <span className="badge">About E-Fin</span>
          <h1>Trusted NBFC partner for India’s young professionals & MSMEs</h1>
          <p>
            E-Fin is the brand name of MLB Securities Private Limited, an RBI registered NBFC (COR 14.00526) incorporated
            in 1995. We bring three decades of governance-first experience to digital lending so that credit feels
            transparent, empathetic, and fast.
          </p>
        </div>
        <SupportIllustration className="about-hero-illustration" />
      </header>
      <ul className="hero-stat-grid">
        <li>
          <strong>1995</strong>
          <span>Year of incorporation</span>
        </li>
        <li>
          <strong>₹25K - ₹25L</strong>
          <span>Typical ticket size</span>
        </li>
        <li>
          <strong>45%</strong>
          <span>FOIR guardrail for every borrower</span>
        </li>
        <li>
          <strong>+91-9997842548</strong>
          <span>care@e-fin.in</span>
        </li>
      </ul>

      <section className="pillars-grid">
        {PILLARS.map((pillar) => (
          <article key={pillar.title} className="pillar-card">
            <h3>{pillar.title}</h3>
            <p>{pillar.detail}</p>
          </article>
        ))}
      </section>

      <section className="section about-grid">
        <div className="company-card">
          <h2>Why customers trust E-Fin</h2>
          <p>
            We operate with the rigor of an RBI-regulated NBFC and the empathy of a neighbourhood banker. Every journey
            is designed to be <strong>explainable, bilingual, and paper-light</strong> so customers always know what
            they&apos;re signing up for.
          </p>
          <div className="fact-grid">
            {COMPANY_FACTS.map((fact) => (
              <div key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="insight-card">
          <h3>Our promise</h3>
          <ul>
            <li>Same-day sanction with complete fee disclosure.</li>
            <li>FOIR-based affordability checks to avoid over-leverage.</li>
            <li>Dedicated advisors who speak eight regional languages.</li>
            <li>Realtime tracking via app, WhatsApp, and partner portals.</li>
          </ul>
        </div>
      </section>

      <section className="section mission-section">
        <div className="mission-card">
          <h2>Mission & focus</h2>
          <ul className="mission-list">
            {MISSION_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="mission-card">
          <h3>Products we offer</h3>
          <ul className="mission-list">
            {PRODUCT_LINES.map((product) => (
              <li key={product}>{product}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="impact-grid">
        {IMPACT.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="section reach-section">
        <header className="section-heading">
          <span className="eyebrow">Reach us</span>
          <h2>Two offices, one always-on support desk</h2>
        </header>
        <div className="office-grid">
          {OFFICES.map((office) => (
            <div key={office.title} className="office-card">
              <strong>{office.title}</strong>
              <p>{office.address}</p>
            </div>
          ))}
        </div>
        <div className="contact-strip">
          {CONTACT_LINKS.map((contact) => (
            <div key={contact.label}>
              <span>{contact.label}</span>
              <a href={contact.href} style={{ color: 'inherit', textDecoration: 'none' }}>
                {contact.value}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="leadership-grid">
        <div className="leadership-head">
          <p className="eyebrow">Leadership</p>
          <h2>People who own your experience</h2>
          <p>Risk, partnerships, and service design leaders working together to keep lending transparent.</p>
        </div>
        <div className="leader-cards">
          {LEADERS.map((leader) => (
            <article key={leader.name} className="leader-card">
              <div className="leader-avatar">{leader.name.charAt(0)}</div>
              <div>
                <h3>{leader.name}</h3>
                <p>{leader.title}</p>
                <span>{leader.focus}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section timeline-section">
        <span className="badge">Our journey</span>
        <h2>From investment services to an inclusive NBFC</h2>
        <div className="timeline-grid">
          {TIMELINE.map((milestone) => (
            <article key={milestone.year}>
              <strong>{milestone.year}</strong>
              <h3>{milestone.title}</h3>
              <p>{milestone.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section partner-showcase">
        <div className="ally-hero">
          <span className="badge">Partnerships</span>
          <h2>One platform for OEMs, fintechs & co-lenders</h2>
          <p>
            We collaborate with industry leaders to co-create embeddable journeys. Our pipes cover origination,
            underwriting, servicing, and analytics so partners can focus on customer acquisition.
          </p>
          <ul className="ally-list">
            <li>
              <strong>50+</strong>
              <span>Co-lending alliances</span>
            </li>
            <li>
              <strong>API-ready</strong>
              <span>Embedded finance toolkit</span>
            </li>
            <li>
              <strong>24/7</strong>
              <span>Partner success desk</span>
            </li>
          </ul>
        </div>
        <div className="ally-carousel">
          <ImageCarousel slides={partnerSlides} interval={6000} />
        </div>
      </section>

      <section className="about-cta">
        <div>
          <p className="eyebrow">Partner with us</p>
          <h2>Ready to co-create credit journeys?</h2>
          <p>Connect with our partnerships desk to embed lending, co-lend, or roll out regional support desks.</p>
        </div>
        <div className="about-cta-actions">
          <a className="primary-btn" href="mailto:care@e-fin.in">
            Write to partnerships
          </a>
          <a className="ghost-btn" href="tel:+919997842548">
            Call +91-9997842548
          </a>
        </div>
      </section>

      <section className="section value-blocks">
        <article>
          <span className="eyebrow">Responsible lending</span>
          <h3>Affordability first</h3>
          <p>
            FOIR-led underwriting ensures every EMI fits comfortably within a customer’s cash flows before we ever
            disburse.
          </p>
        </article>
        <article>
          <span className="eyebrow">Human support</span>
          <h3>Advisors on every channel</h3>
          <p>
            Multilingual teams respond via in-app chat, WhatsApp, and toll-free lines so borrowers never feel alone in
            the journey.
          </p>
        </article>
        <article>
          <span className="eyebrow">Security first</span>
          <h3>Compliant by design</h3>
          <p>
            ISO 27001-certified infrastructure, RBI Fair Practices Code, and continuous monitoring give peace of mind to
            customers and partners alike.
          </p>
        </article>
      </section>

      <section className="section testimonial-showcase">
        <div className="testimonial-header">
          <span className="badge">Client reviews</span>
          <h2>Voices from our customers & partners</h2>
          <p>Aligned incentives and transparent pricing keep retention high across both B2C and B2B cohorts.</p>
        </div>
        <div className="testimonial-cards">
          {CLIENT_REVIEWS.map((review) => (
            <article key={review.author}>
              <p>“{review.quote}”</p>
              <cite>{review.author}</cite>
            </article>
          ))}
        </div>
      </section>

      <section className="section inclusion-section">
        <div>
          <span className="badge">Financial inclusion</span>
          <h2>Designing credit for the underserved</h2>
          <p>
            New-to-credit customers, gig workers, and small businesses deserve the same level of trust as prime borrowers.
            Our models look beyond bureau scores by factoring employment stability, cash-flows, and savings behaviour.
          </p>
        </div>
        <div className="impact-grid">
          <div className="impact-card">
            <strong>65%</strong>
            <span>First-time credit users onboarded</span>
          </div>
          <div className="impact-card">
            <strong>27%</strong>
            <span>Women-led businesses financed (FY24)</span>
          </div>
          <div className="impact-card">
            <strong>4.8 / 5</strong>
            <span>Support satisfaction from 30k+ surveys</span>
          </div>
        </div>
      </section>

      <section className="section governance-section">
        <span className="badge">Steady governance</span>
        <h2>Robust processes that protect customers</h2>
        <div className="journey-grid">
          <article>
            <h3>Risk &amp; compliance</h3>
            <p>Independent risk committee, periodic bureau audits, and adherence to RBI Fair Practices Code.</p>
          </article>
          <article>
            <h3>Data privacy</h3>
            <p>ISO 27001-certified infrastructure with consent-based data usage and regular VAPT assessments.</p>
          </article>
          <article>
            <h3>Customer redressal</h3>
            <p>Escalation matrix with 24-hour turnaround and grievance redressal officers at zonal level.</p>
          </article>
        </div>
      </section>

      <section className="section contact-cta">
        <div>
          <h2>Let’s build what’s next</h2>
          <p>
            Whether you&apos;re planning your first personal loan, scaling an MSME, or exploring a
            partnership, our advisors respond within one business day with a personalised roadmap.
          </p>
        </div>
        <div className="contact-buttons">
          <a className="primary-btn" href="tel:+919997842548">
            Call +91-9997842548
          </a>
          <a className="ghost-btn" href="mailto:care@e-fin.in">
            Email care@e-fin.in
          </a>
        </div>
      </section>
    </div>
  );
}

export default WhyFinanceCoPage;
