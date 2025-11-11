import CreditScoreWidget from '../../components/CreditScoreWidget';

function CreditScorePage() {
  return (
    <div className="page calculator-page">
      <section className="calculator-hero">
        <div>
          <span className="eyebrow">Loan Calculators</span>
          <h1>Check Credit Score</h1>
          <p>
            Stay on top of your credit health before you apply. Share a few details to simulate your score and receive a
            personalised checklist to keep it in shape.
          </p>
        </div>
        <ul className="hero-facts compact">
          <li>
            <strong>4 bureaus</strong>
            <span>Supported</span>
          </li>
          <li>
            <strong>Free forever</strong>
            <span>No impact on score</span>
          </li>
          <li>
            <strong>Monthly</strong>
            <span>Refresh reminder</span>
          </li>
        </ul>
      </section>

      <section className="calculator-body stacked">
        <CreditScoreWidget />
      </section>
    </div>
  );
}

export default CreditScorePage;
