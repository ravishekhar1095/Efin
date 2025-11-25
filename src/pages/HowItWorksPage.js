import { useState } from 'react';
import ApplicationIllustration from '../components/illustrations/ApplicationIllustration';
import ImageCarousel from '../components/ImageCarousel';

const faqItems = [
  {
    question: 'How long does approval take?',
    answer:
      'Most applications receive an in-principle approval within 2 minutes after digital KYC. Final sanction is typically completed within 24 hours.',
  },
  {
    question: 'Do I need to visit a branch?',
    answer:
      'No. The entire journey from application to e-signature can be completed digitally. Branch visits are optional and available if you prefer in-person assistance.',
  },
  {
    question: 'Can I foreclose my loan?',
    answer:
      'Yes. You can foreclose or part-prepay after 6 EMIs. Personal loans have zero foreclosure charges, while partner products may have a capped fee.',
  },
];

const journeySlides = [
  {
    badge: 'Digital first',
    title: 'Apply anytime, anywhere',
    description:
      'Start from the web or E-Fin app, switch to branch support when needed, and resume from exactly where you left.',
    list: ['Progress autosaved securely', 'Assisted journeys for seniors'],
    background: 'linear-gradient(135deg, #56ccf2, #2f80ed)',
    imageLabel: 'Apply',
  },
  {
    badge: 'Verification',
    title: 'KYC & income verification made effortless',
    description:
      'Complete video KYC, DigiLocker pulls, or doorstep document pickup based on your comfort level.',
    list: ['Video KYC under 5 minutes', 'Paperless DigiLocker fetch'],
    background: 'linear-gradient(135deg, #ff9a9e, #fecfef)',
    imageLabel: 'Verify',
  },
  {
    badge: 'Support',
    title: 'Stay informed every step',
    description:
      'Track disbursal, repayment schedule, and offers through real-time notifications on app, SMS, and email.',
    list: ['Live disbursal tracker', 'AI chat support with human handoff'],
    background: 'linear-gradient(135deg, #a6c0fe, #f68084)',
    imageLabel: 'Support',
  },
];

function HowItWorksPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="page how-page">
      <header className="page-hero with-illustration">
        <div className="page-hero-body">
          <span className="badge">How It Works</span>
          <h1>Smart credit in three smooth stages</h1>
          <p>
            E-Fin combines intuitive design, paperless verification, and transparent communication
            so you stay in control throughout the borrowing journey.
          </p>
        </div>
        <ApplicationIllustration className="page-hero-illustration" />
      </header>

      <section className="section slim">
        <ImageCarousel slides={journeySlides} />
      </section>

      <section className="section steps">
        <div className="timeline">
          <div className="timeline-item">
            <span className="step-number">1</span>
            <h3>Apply in minutes</h3>
            <p>Share your PAN, employment, and income details. Upload proofs or fetch via DigiLocker.</p>
          </div>
          <div className="timeline-item">
            <span className="step-number">2</span>
            <h3>Get matched</h3>
            <p>
              Our AI evaluates eligibility across partner NBFCs, surfacing offers with the lowest
              cost for you.
            </p>
          </div>
          <div className="timeline-item">
            <span className="step-number">3</span>
            <h3>Track disbursal</h3>
            <p>
              Accept, e-sign, and monitor loan status through the app. Set up autopay and reminders in one tap.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>FAQ</h2>
        <div className="faq-list" id="faq">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`faq-item${isOpen ? ' open' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <span>{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen ? <p>{item.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default HowItWorksPage;
