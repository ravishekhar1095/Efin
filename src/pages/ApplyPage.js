function ApplyPage() {
  return (
    <div className="page apply-page">
      <section className="apply-hero">
        <div>
          <span className="eyebrow">Apply with E-fin</span>
          <h1>Request your personalised offer</h1>
          <p>Welcome! We're here to help you with your financing needs.</p>
          <p>Our advisors will call you back with a plan that fits your requirements.</p>
          <p>It takes under two minutes and won't impact your credit score.</p>
        </div>
        <div className="apply-highlights">
          <div>
            <span>Sanction speed</span>
            <strong>&lt; 2 mins</strong>
          </div>
          <div>
            <span>Ticket size</span>
            <strong>₹25K – ₹25L</strong>
          </div>
          <div>
            <span>Coverage</span>
            <strong>150+ cities</strong>
          </div>
        </div>
      </section>

      <section className="apply-content" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div className="contact-card">
          <h3>Get in touch with us</h3>
          <p>Talk to our advisors for faster onboarding or custom loan structures.</p>
          <a href="tel:+919997842548">+91-9997842548</a>
          <a href="mailto:care@e-fin.in">care@e-fin.in</a>
        </div>
      </section>
    </div>
  );
}

export default ApplyPage;

