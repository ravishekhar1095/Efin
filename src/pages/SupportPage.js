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
    title: 'Manage loans with Efin Hub',
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

function SupportPage() {
  return (
    <div className="page support-page" id="support">
      <header className="page-hero with-illustration">
        <div className="page-hero-body">
          <span className="badge">Support</span>
          <h1>We are here to help—online, on call, and in branch</h1>
          <p>
            Connect with the Efin support team for assistance on applications, repayments,
            statements, and more. Choose the channel that suits you best.
          </p>
        </div>
        <SupportIllustration className="page-hero-illustration" />
      </header>

      <section className="section slim">
        <ImageCarousel slides={supportSlides} interval={6000} />
      </section>

      <section className="section support-grid" id="contact">
        <article>
          <h2>Call centre</h2>
          <p>
            Toll-free helpline available 24x7 in English, Hindi, Tamil, Kannada, Marathi, and Bengali.
          </p>
          <a className="primary-link" href="tel:1800123456">
            Call 1800-123-456 →
          </a>
        </article>
        <article>
          <h2>Email</h2>
          <p>
            Drop us a line with your registered mobile number and loan ID. We respond within 12 hours.
          </p>
          <a className="primary-link" href="mailto:care@efin.in">
            care@efin.in
          </a>
        </article>
        <article>
          <h2>WhatsApp</h2>
          <p>
            Send “Hi” to get statements, download NOC, or raise a support ticket from your phone.
          </p>
          <a className="primary-link" href="https://wa.me/911800123456" target="_blank" rel="noreferrer">
            Chat on WhatsApp →
          </a>
        </article>
      </section>

      <section className="section" id="login">
        <h2>Customer login</h2>
        <p>
          Access the Efin Hub to update auto-debit details, raise requests, and view repayment
          schedules. You can also manage Buy Now Pay Later limits from the same dashboard.
        </p>
        <Link className="primary-btn" to="/support/login">
          Go to Efin Hub
        </Link>
      </section>

      <section className="section info-grid">
        <article>
          <h3>Service SLAs</h3>
          <ul>
            <li>Loan application queries resolved within 30 minutes.</li>
            <li>Statement & NOC requests delivered instantly via email.</li>
            <li>Escalations assigned to senior managers within 4 working hours.</li>
          </ul>
        </article>
        <article>
          <h3>Escalation matrix</h3>
          <ul>
            <li>Level 1: Customer success manager via app or helpline.</li>
            <li>Level 2: Zonal grievance officer (response within 48 hours).</li>
            <li>Level 3: Nodal officer and RBI CMS integration for escalations.</li>
          </ul>
        </article>
        <article>
          <h3>Payment support</h3>
          <ul>
            <li>Auto-debit retry within 2 days of failure.</li>
            <li>UPI and netbanking options for instant repayment.</li>
            <li>Hardship assistance with EMI moratorium assessment.</li>
          </ul>
        </article>
      </section>

      <section className="section branch-locator" id="branch">
        <h2>Branches &amp; partner kiosks</h2>
        <p className="section-lead">
          Visit any of the branches below or request a doorstep visit from your nearest city team.
        </p>
        <div className="grid three">
          <article>
            <h3>Bengaluru</h3>
            <p>Indiranagar, Whitefield, Koramangala, Yelahanka</p>
          </article>
          <article>
            <h3>Delhi NCR</h3>
            <p>Connaught Place, Noida Sector 18, Gurugram Cybercity</p>
          </article>
          <article>
            <h3>Mumbai</h3>
            <p>Andheri West, Thane, Navi Mumbai, BKC</p>
          </article>
          <article>
            <h3>Pune</h3>
            <p>Hinjewadi, Baner, Kothrud</p>
          </article>
          <article>
            <h3>Hyderabad</h3>
            <p>Madhapur, Gachibowli, Secunderabad</p>
          </article>
          <article>
            <h3>Chennai</h3>
            <p>OMR, T-Nagar, Anna Nagar</p>
          </article>
        </div>
      </section>

      <section className="section policy-grid" id="privacy">
        <h2>Policies &amp; disclosures</h2>
        <div className="grid three">
          <article>
            <h3>Privacy policy</h3>
            <p>Learn how Efin collects, processes, and secures your personal data.</p>
            <a className="primary-link" href="/">
              Download →
            </a>
          </article>
          <article id="terms">
            <h3>Terms &amp; conditions</h3>
            <p>Understand the framework governing your relationship with Efin.</p>
            <a className="primary-link" href="/">
              Download →
            </a>
          </article>
          <article id="disclosure">
            <h3>Regulatory disclosures</h3>
            <p>Co-lending, grievance redressal, and RBI-mandated documents.</p>
            <a className="primary-link" href="/">
              Download →
            </a>
          </article>
        </div>
      </section>

      <section className="section steps alt">
        <h2>How we resolve your request</h2>
        <div className="timeline">
          <div className="timeline-item">
            <span className="step-number">1</span>
            <h3>Log the request</h3>
            <p>Select a category and share details through app, hub, or helpline. You receive an acknowledgement instantly.</p>
          </div>
          <div className="timeline-item">
            <span className="step-number">2</span>
            <h3>Get updates</h3>
            <p>Track status in real time. We send proactive alerts if additional information is required.</p>
          </div>
          <div className="timeline-item">
            <span className="step-number">3</span>
            <h3>Resolution &amp; feedback</h3>
            <p>Receive a closure summary with resolution details and share feedback to help us improve.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SupportPage;
