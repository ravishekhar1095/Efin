import { useState } from 'react';
import { Link } from 'react-router-dom';
import SupportIllustration from '../components/illustrations/SupportIllustration';
import ImageCarousel from '../components/ImageCarousel';

const supportSlides = [
  {
    badge: '24x7 helpline',
    title: 'Talk to a real human anytime',
    description:
      'Our multilingual advisors are available round-the-clock for queries on applications, repayments, and statements.',
    list: ['Support in 8 languages', 'Average response under 30 seconds'],
    background: 'linear-gradient(135deg, #6dd5fa, #2980b9)',
    imageLabel: 'Call',
  },
  {
    badge: 'Self-serve hub',
    title: 'Manage loans with E-Fin Hub',
    description:
      'Download statements, update auto-debit mandates, raise service requests, and view personalised upgrade offers.',
    list: ['One place for all products', 'Instant ticket tracking'],
    background: 'linear-gradient(135deg, #bdc3c7, #2c3e50)',
    imageLabel: 'Hub',
  },
  {
    badge: 'WhatsApp & app chat',
    title: 'Get answers in your favourite channel',
    description:
      'Access quick actions such as NOC download, EMI calendar, and payment reminders right from WhatsApp or the app chat.',
    list: ['Secure OTP verification', 'Human hand-off within 2 minutes'],
    background: 'linear-gradient(135deg, #11998e, #38ef7d)',
    imageLabel: 'Chat',
  },
];

const contactChannels = [
  {
    title: 'Call centre',
    description: '24x7 helpline in 8 languages for repayments, statements, and applications.',
    action: 'Call 1800-123-456',
    href: 'tel:1800123456',
    icon: '📞',
  },
  {
    title: 'WhatsApp',
    description: 'Instantly fetch statements, NOC, and EMI schedules with OTP verification.',
    action: 'Chat on WhatsApp',
    href: 'https://wa.me/911800123456',
    icon: '💬',
  },
  {
    title: 'Email',
    description: 'Write to us with your registered mobile number and loan ID for a tracked reply.',
    action: 'care@e-fin.in',
    href: 'mailto:care@e-fin.in',
    icon: '✉️',
  },
];

const serviceBadges = [
  { label: 'Avg response', value: '< 30 sec' },
  { label: 'Languages', value: '8 supported' },
  { label: 'Resolution', value: '98% first-contact' },
];

const supportHighlights = [
  {
    title: 'Human-first help',
    description: 'No bot loops—reach a named advisor who owns your request end-to-end.',
    icon: '🙋',
  },
  {
    title: 'Self-serve superpowers',
    description: 'Download statements, update e-mandates, or raise tickets right from the app or Hub.',
    icon: '⚡',
  },
  {
    title: 'Compliant & secure',
    description: 'Data encrypted, RBI-compliant grievance desk, and transparent SLAs.',
    icon: '🛡️',
  },
];

const serviceCards = [
  {
    title: 'Service SLAs',
    icon: '⏱️',
    points: [
      'Loan application queries resolved within 30 minutes.',
      'Statement & NOC requests delivered instantly via email.',
      'Escalations assigned to senior managers within 4 working hours.',
    ],
    tone: 'blue',
  },
  {
    title: 'Escalation matrix',
    icon: '🚦',
    points: [
      'Level 1: Customer success manager via app or helpline.',
      'Level 2: Zonal grievance officer (response within 48 hours).',
      'Level 3: Nodal officer and RBI CMS integration for escalations.',
    ],
    tone: 'teal',
  },
  {
    title: 'Payment support',
    icon: '💳',
    points: [
      'Auto-debit retry within 2 days of failure.',
      'UPI and netbanking options for instant repayment.',
      'Hardship assistance with EMI moratorium assessment.',
    ],
    tone: 'amber',
  },
];

const branches = [
  { city: 'Bengaluru', areas: 'Indiranagar, Whitefield, Koramangala, Yelahanka' },
  { city: 'Delhi NCR', areas: 'Connaught Place, Noida Sector 18, Gurugram Cybercity' },
  { city: 'Mumbai', areas: 'Andheri West, Thane, Navi Mumbai, BKC' },
  { city: 'Pune', areas: 'Hinjewadi, Baner, Kothrud' },
  { city: 'Hyderabad', areas: 'Madhapur, Gachibowli, Secunderabad' },
  { city: 'Chennai', areas: 'OMR, T-Nagar, Anna Nagar' },
];

const policies = [
  {
    title: 'Privacy policy',
    description: 'Learn how E-Fin collects, processes, and secures your personal data.',
    href: '/',
    tag: 'Data safety',
  },
  {
    title: 'Terms & conditions',
    description: 'Understand the framework governing your relationship with E-Fin.',
    href: '/',
    tag: 'Customer charter',
  },
  {
    title: 'Regulatory disclosures',
    description: 'Co-lending, grievance redressal, and RBI-mandated documents.',
    href: '/',
    tag: 'Compliance',
  },
];

const quickAnswers = [
  {
    q: 'Need a statement or NOC?',
    a: 'Use the app or WhatsApp to download instantly. No charges, no wait time.',
  },
  {
    q: 'Payment bounced?',
    a: 'We retry auto-debit within 2 days. You can also pay via UPI or netbanking to avoid late fees.',
  },
  {
    q: 'Want to change EMI date?',
    a: 'Raise a ticket in the Hub or call us—most date changes are processed within 24 hours.',
  },
  {
    q: 'Prefer a call-back?',
    a: 'Submit the form and we will dial you in minutes. Missed us? We retry up to 3 times.',
  },
];

function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    topic: 'Repayment issue',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSubmitted(false);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page support-page" id="support">
      <section className="contact-hero">
        <div className="contact-hero-copy">
          <span className="info-pill">Contact us</span>
          <h1>Talk to a human in under a minute</h1>
          <p>
            Reach E-Fin support for applications, repayments, and statements. Pick your channel, share a few details, and
            we will route you to the right specialist.
          </p>
          <div className="contact-badges">
            {serviceBadges.map((badge) => (
              <span key={badge.label}>
                <strong>{badge.value}</strong>
                <small>{badge.label}</small>
              </span>
            ))}
          </div>
          <div className="contact-quick">
            <a href="tel:1800123456" className="primary-btn">
              Call 1800-123-456
            </a>
            <a href="https://wa.me/911800123456" className="ghost-btn" target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="contact-hero-visual">
          <SupportIllustration className="page-hero-illustration" />
          <div className="contact-hero-card">
            <p className="eyebrow">Support promise</p>
            <h3>Real humans. Real quick.</h3>
            <p className="contact-hero-note">
              No bots roadblocks. You get a named advisor with clear next steps and follow-ups.
            </p>
            <div className="hero-mini-stats">
              <div>
                <strong>24x7</strong>
                <span>Availability</span>
              </div>
              <div>
                <strong>8</strong>
                <span>Languages</span>
              </div>
              <div>
                <strong>0</strong>
                <span>Escalation fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section slim">
        <ImageCarousel slides={supportSlides} interval={6000} />
      </section>

      <section className="support-highlight-grid">
        {supportHighlights.map((item) => (
          <article key={item.title} className="support-highlight-card">
            <div className="contact-icon" aria-hidden="true">
              {item.icon}
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="contact-stack" id="contact">
        <div className="contact-stack__left">
          <div className="contact-stack-head">
            <p className="eyebrow">Choose a channel</p>
            <h2>Get support the way you want</h2>
            <p className="contact-stack-lead">
              Call, chat, or email—every request is tracked and assigned to a specialist. Prefer a callback? Use the form
              and we will dial you within minutes.
            </p>
          </div>
          <div className="contact-channel-grid">
            {contactChannels.map((channel) => (
              <article key={channel.title} className="contact-channel">
                <div className="contact-icon" aria-hidden="true">
                  {channel.icon}
                </div>
                <div>
                  <h3>{channel.title}</h3>
                  <p>{channel.description}</p>
                  <a
                    className="primary-link"
                    href={channel.href}
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    {channel.action} →
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="contact-assurance">
            {serviceBadges.map((badge) => (
              <span key={badge.label}>
                <strong>{badge.value}</strong>
                <small>{badge.label}</small>
              </span>
            ))}
          </div>
        </div>
        <div className="contact-stack__right" id="contact-form">
          <div className="contact-form-card">
            <p className="eyebrow">Raise a request</p>
            <h2>Share your details, we&apos;ll call back</h2>
            <form className="contact-form-grid" onSubmit={handleSubmit}>
              <label>
                Full name
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </label>
              <label>
                Mobile number
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91"
                  required
                />
              </label>
              <label>
                Topic
                <select name="topic" value={formData.topic} onChange={handleChange}>
                  <option>Repayment issue</option>
                  <option>Statement or NOC</option>
                  <option>Application status</option>
                  <option>Update auto-debit</option>
                  <option>General query</option>
                </select>
              </label>
              <label className="span-2">
                Details
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Add context to speed up resolution"
                />
              </label>
              <button type="submit" className="primary-btn">
                Submit request
              </button>
              {submitted && <p className="form-note success">Request received! We&apos;ll reach out shortly.</p>}
            </form>
          </div>
          <div className="contact-info-card">
            <h3>What happens next?</h3>
            <ul>
              <li>We confirm your identity and assign a named advisor.</li>
              <li>You get updates via SMS, email, and WhatsApp.</li>
              <li>Unresolved? We move it to the escalation desk within 4 hours.</li>
            </ul>
            <div className="contact-quick-links">
              <Link className="ghost-btn" to="/support/login">
                Go to customer login
              </Link>
              <a className="primary-link" href="#privacy">
                View policies →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="support-cta-band" id="login">
        <div>
          <p className="eyebrow">Self-serve hub</p>
          <h2>Resolve most things in minutes with E-Fin Hub</h2>
          <p>
            Update mandates, download statements or NOCs, and raise service requests without waiting on a call. Log in
            with your registered mobile number to get started.
          </p>
        </div>
        <div className="support-cta-actions">
          <Link className="primary-btn" to="/support/login">
            Go to E-Fin Hub
          </Link>
          <a className="ghost-btn" href="#contact-form">
            Request a callback
          </a>
        </div>
      </section>

      <section className="support-info-cards">
        {serviceCards.map((card) => (
          <article key={card.title} className={`support-info-card ${card.tone}`}>
            <div className="contact-icon" aria-hidden="true">
              {card.icon}
            </div>
            <div>
              <h3>{card.title}</h3>
              <ul>
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="support-faqs">
        <div>
          <p className="eyebrow">Instant answers</p>
          <h2>Skip the queue with quick fixes</h2>
          <p className="contact-stack-lead">Common actions you can complete yourself in minutes.</p>
        </div>
        <div className="faq-card-grid">
          {quickAnswers.map((item) => (
            <details key={item.q} className="faq-card">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section branch-locator" id="branch">
        <h2>Branches &amp; partner kiosks</h2>
        <p className="section-lead">
          Visit any of the branches below or request a doorstep visit from your nearest city team.
        </p>
        <div className="branch-grid">
          {branches.map((branch) => (
            <article key={branch.city} className="branch-card">
              <div className="branch-chip">{branch.city}</div>
              <p>{branch.areas}</p>
              <a className="primary-link" href="#contact-form">
                Request a visit →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section policy-grid" id="privacy">
        <h2>Policies &amp; disclosures</h2>
        <div className="policy-card-grid">
          {policies.map((policy) => (
            <article key={policy.title} className="policy-card">
              <span className="policy-tag">{policy.tag}</span>
              <h3>{policy.title}</h3>
              <p>{policy.description}</p>
              <a className="primary-link" href={policy.href}>
                Download →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="support-timeline">
        <div className="timeline-head">
          <p className="eyebrow">How we resolve your request</p>
          <h2>Every request gets tracked and closed with clarity</h2>
        </div>
        <div className="timeline-flow">
          <div className="timeline-node">
            <span className="step-number">1</span>
            <div>
              <h3>Log the request</h3>
              <p>Select a category and share details through app, hub, or helpline. You receive an acknowledgement instantly.</p>
            </div>
          </div>
          <div className="timeline-connector" aria-hidden="true" />
          <div className="timeline-node">
            <span className="step-number">2</span>
            <div>
              <h3>Get updates</h3>
              <p>Track status in real time. We send proactive alerts if additional information is required.</p>
            </div>
          </div>
          <div className="timeline-connector" aria-hidden="true" />
          <div className="timeline-node">
            <span className="step-number">3</span>
            <div>
              <h3>Resolution &amp; feedback</h3>
              <p>Receive a closure summary with resolution details and share feedback to help us improve.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SupportPage;
