import { useState } from 'react';
import './SupportPage.css';

const contactChannels = [
  {
    title: 'Phone Support',
    description: 'Talk to our support team 24x7 for immediate assistance',
    action: 'Call +91-9997842548',
    href: 'tel:+919997842548',
    icon: '📞',
  },
  {
    title: 'WhatsApp',
    description: 'Instantly fetch statements, NOC, and EMI schedules with OTP verification.',
    action: 'Chat on WhatsApp',
    href: 'https://wa.me/919997842548',
    icon: '💬',
  },
  {
    title: 'Email',
    description: 'Write to us with your registered mobile number and loan ID for a tracked reply.',
    action: 'Care@efin.co.in',
    href: 'mailto:Care@efin.co.in',
    icon: '✉️',
  },
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
      'Loan application queries resolved within 30 minutes',
      'Statement & NOC requests delivered instantly via email',
      'Escalations assigned to senior managers within 4 working hours',
    ],
  },
  {
    title: 'Escalation Matrix',
    icon: '🚦',
    points: [
      'Level 1: Customer success manager via app or helpline',
      'Level 2: Zonal grievance officer (response within 48 hours)',
      'Level 3: Nodal officer and RBI CMS integration for escalations',
    ],
  },
  {
    title: 'Payment Support',
    icon: '💳',
    points: [
      'Auto-debit retry within 2 days of failure',
      'UPI and netbanking options for instant repayment',
      'Hardship assistance with EMI moratorium assessment',
    ],
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
    <div className="page support-page-modern">
      {/* Hero Section */}
      <section className="support-hero-modern">
        <div className="support-hero-content">
          <span className="support-badge">💬 Customer Support</span>
          <h1>
            We're Here to <span className="gradient-text">Help You</span>
          </h1>
          <p className="support-hero-description">
            Reach E-Fin support for applications, repayments, and statements. Talk to a real human in under a minute.
            Our multilingual advisors are available 24x7 to assist you.
          </p>

          <div className="support-stats-grid">
            <div className="stat-card-support">
              <div className="stat-icon-support">⚡</div>
              <div>
                <strong>&lt; 30 sec</strong>
                <span>Avg Response Time</span>
              </div>
            </div>
            <div className="stat-card-support">
              <div className="stat-icon-support">🌍</div>
              <div>
                <strong>8 Languages</strong>
                <span>Support Available</span>
              </div>
            </div>
            <div className="stat-card-support">
              <div className="stat-icon-support">🕒</div>
              <div>
                <strong>24x7</strong>
                <span>Available Always</span>
              </div>
            </div>
          </div>

          <div className="support-hero-cta">
            <a href="tel:+919997842548" className="primary-btn large">
              Call Us Now →
            </a>
            <a href="https://wa.me/919997842548" className="ghost-btn large" target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Support Highlights */}
      <section className="support-highlights-section">
        <div className="section-heading">
          <span className="eyebrow">Why Choose Our Support</span>
          <h2>Human-First Customer Service</h2>
          <p>Experience support that actually cares about solving your problems</p>
        </div>

        <div className="support-highlights-grid">
          {supportHighlights.map((item) => (
            <div key={item.title} className="support-highlight-card">
              <div className="highlight-icon-support">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Channels */}
      <section className="contact-channels-section">
        <div className="section-heading">
          <span className="eyebrow">Get In Touch</span>
          <h2>Choose Your Preferred Channel</h2>
          <p>Multiple ways to reach us - pick what works best for you</p>
        </div>

        <div className="contact-channels-grid">
          {contactChannels.map((channel) => (
            <div key={channel.title} className="contact-channel-card">
              <div className="channel-icon-large">{channel.icon}</div>
              <h3>{channel.title}</h3>
              <p>{channel.description}</p>
              <a
                className="primary-link-support"
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                {channel.action} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="support-form-section">
        <div className="support-form-container">
          <div className="form-left">
            <span className="eyebrow">Request Callback</span>
            <h2>Share Your Details, We'll Call Back</h2>
            <p className="form-description">
              Fill out the form below and our support team will reach out to you within minutes.
              We're committed to resolving your queries quickly and efficiently.
            </p>

            <div className="form-benefits">
              <div className="form-benefit-item">
                <span className="benefit-icon">✓</span>
                <div>
                  <strong>Identity confirmation and advisor assignment</strong>
                  <p>We verify your details and assign a dedicated specialist</p>
                </div>
              </div>
              <div className="form-benefit-item">
                <span className="benefit-icon">✓</span>
                <div>
                  <strong>Multi-channel updates</strong>
                  <p>Track progress via SMS, email, and WhatsApp</p>
                </div>
              </div>
              <div className="form-benefit-item">
                <span className="benefit-icon">✓</span>
                <div>
                  <strong>Quick escalation if needed</strong>
                  <p>Unresolved issues moved to senior desk within 4 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="form-right">
            <div className="contact-form-card-modern">
              <form className="support-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Mobile Number</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>What can we help you with?</label>
                  <select name="topic" value={formData.topic} onChange={handleChange}>
                    <option>Repayment issue</option>
                    <option>Statement or NOC</option>
                    <option>Application status</option>
                    <option>Update auto-debit</option>
                    <option>General query</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Additional Details</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Add any context to help us serve you better..."
                  />
                </div>

                <button type="submit" className="primary-btn large full-width">
                  Submit Request →
                </button>

                {submitted && (
                  <div className="form-success">
                    <span className="success-icon">✓</span>
                    <p>Request received! We'll reach out to you shortly.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="service-cards-section">
        <div className="section-heading">
          <span className="eyebrow">Our Commitments</span>
          <h2>Service Standards & Policies</h2>
          <p>Transparent timelines and clear escalation paths</p>
        </div>

        <div className="service-cards-grid">
          {serviceCards.map((card) => (
            <div key={card.title} className="service-card-modern">
              <div className="service-card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <ul>
                {card.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="support-faq-section">
        <div className="section-heading">
          <span className="eyebrow">Quick Answers</span>
          <h2>Frequently Asked Questions</h2>
          <p>Common questions answered - skip the queue with instant solutions</p>
        </div>

        <div className="faq-grid-modern">
          {quickAnswers.map((item, index) => (
            <details key={index} className="faq-item-modern">
              <summary>
                <span className="faq-question">{item.q}</span>
                <span className="faq-icon">+</span>
              </summary>
              <p className="faq-answer">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="support-timeline-section">
        <div className="section-heading">
          <span className="eyebrow">Our Process</span>
          <h2>How We Resolve Your Request</h2>
          <p>Every request is tracked and closed with complete clarity</p>
        </div>

        <div className="timeline-modern">
          <div className="timeline-item-modern">
            <div className="timeline-number">1</div>
            <div className="timeline-content">
              <h3>Log the Request</h3>
              <p>Select a category and share details through app, hub, or helpline. You receive an acknowledgement instantly.</p>
            </div>
          </div>

          <div className="timeline-connector-modern" />

          <div className="timeline-item-modern">
            <div className="timeline-number">2</div>
            <div className="timeline-content">
              <h3>Get Updates</h3>
              <p>Track status in real time. We send proactive alerts if additional information is required.</p>
            </div>
          </div>

          <div className="timeline-connector-modern" />

          <div className="timeline-item-modern">
            <div className="timeline-number">3</div>
            <div className="timeline-content">
              <h3>Resolution & Feedback</h3>
              <p>Receive a closure summary with resolution details and share feedback to help us improve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="support-cta-section">
        <div className="support-cta-card">
          <div className="cta-icon-large">🎯</div>
          <h2>Still Need Help?</h2>
          <p>Our support team is ready to assist you 24x7. Choose your preferred method to get in touch.</p>
          <div className="support-cta-buttons">
            <a href="tel:+919997842548" className="primary-btn large">
              Call Support →
            </a>
            <a href="mailto:Care@efin.co.in" className="ghost-btn large">
              Email Us
            </a>
          </div>
          <div className="cta-assurance-support">
            <span>✓ 24x7 Available</span>
            <span>✓ No Hidden Charges</span>
            <span>✓ Multilingual Support</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SupportPage;
