import SupportIllustration from '../components/illustrations/SupportIllustration';
import ImageCarousel from '../components/ImageCarousel';

const whySlides = [
  {
    badge: 'Customer first',
    title: 'Advisory-led onboarding',
    description:
      'Every applicant is guided by a dedicated advisor who explains offers, charges, and repayment schedules in their preferred language.',
    list: ['Support in 8 regional languages', 'Proactive reminders and nudges'],
    background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
    imageLabel: 'Care',
  },
  {
    badge: 'Technology',
    title: 'Credit decisions powered by data',
    description:
      'Efin blends bureau scores with alternate data, payment behaviour, and spending insights to deliver personalised offers.',
    list: ['Real-time underwriting engine', 'AI-led fraud prevention'],
    background: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    imageLabel: 'Tech',
  },
  {
    badge: 'Partnerships',
    title: 'Ecosystem approach',
    description:
      'We collaborate with OEMs, fintechs, and co-lending partners to deliver competitive pricing and wider reach.',
    list: ['50+ co-lending alliances', 'Embedded finance readiness'],
    background: 'linear-gradient(135deg, #84fab0, #8fd3f4)',
    imageLabel: 'Allies',
  },
];

function WhyFinanceCoPage() {
  return (
    <div className="page why-page">
      <header className="page-hero with-illustration">
        <div className="page-hero-body">
          <span className="badge">Why Efin</span>
          <h1>More than a lender — your long-term credit partner</h1>
          <p>
            Efin blends data-driven underwriting with human empathy to deliver credit experiences
            that feel intuitive, transparent, and supportive at every step.
          </p>
        </div>
        <SupportIllustration className="page-hero-illustration" />
      </header>

      <section className="section slim">
        <ImageCarousel slides={whySlides} interval={6500} />
      </section>

      <section className="section values-grid">
        <div className="grid three">
          <article>
            <h3>Responsible lending</h3>
            <p>
              Our affordability assessment ensures you only borrow what you can comfortably repay,
              keeping your credit health intact.
            </p>
          </article>
          <article>
            <h3>Human support</h3>
            <p>
              Multilingual advisors are just a tap away through in-app chat, WhatsApp, and the toll-free
              helpline for any query.
            </p>
          </article>
          <article>
            <h3>Security first</h3>
            <p>
              Bank-grade encryption, RBI-compliant data storage, and continuous monitoring keep your
              information secure.
            </p>
          </article>
        </div>
      </section>

      <section className="section split">
        <div>
          <h2>We believe in financial inclusion</h2>
          <p>
            New-to-credit customers, gig workers, and small business owners deserve fast and fair
            access to credit. Efin looks beyond traditional credit scores by evaluating
            employment stability, cash-flows, and savings behaviour to build a holistic view.
          </p>
          <p>
            This approach has helped over 7 lakh customers get their first-ever loan while keeping
            delinquency rates below industry averages.
          </p>
        </div>
        <div className="impact-card">
          <strong>Impact Snapshot</strong>
          <ul>
            <li>65% of new borrowers were first-time credit users.</li>
            <li>27% women-led small businesses financed in FY24.</li>
            <li>4.8/5 support satisfaction rating from 30k+ surveys.</li>
          </ul>
        </div>
      </section>

      <section className="section journey-highlight">
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
    </div>
  );
}

export default WhyFinanceCoPage;
