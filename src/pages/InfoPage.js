import { Link } from 'react-router-dom';

function InfoPage({ page }) {
  if (!page) {
    return null;
  }

  const {
    category,
    title,
    description,
    bullets = [],
    stats = [],
    image,
    ctaPrimary,
    ctaSecondary,
    heroBadge,
    highlights = [],
    steps = [],
    faqs = [],
    assurance = [],
    helperNote,
    quickActions = [],
    speedFacts = [],
    theme,
  } = page;

  const displayHighlights = highlights.length > 0 ? highlights : bullets.map((text) => ({ title: text }));

  return (
    <div className="page info-page">
      <section className={`info-hero ${theme ? `theme-${theme}` : ''}`}>
        <div className="info-copy info-hero-card">
          {(heroBadge || category) && <span className="info-pill">{heroBadge || category}</span>}
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="info-cta">
            {ctaPrimary && (
              <Link to={ctaPrimary.to} className="primary-btn">
                {ctaPrimary.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link to={ctaSecondary.to} className="ghost-btn">
                {ctaSecondary.label}
              </Link>
            )}
          </div>
          {displayHighlights.length > 0 && (
            <div className="info-highlight-chips">
              {displayHighlights.slice(0, 4).map((item) => (
                <span key={item.title || item}>{item.title || item}</span>
              ))}
            </div>
          )}
          {speedFacts.length > 0 && (
            <div className="info-speed-row">
              {speedFacts.map((fact) => (
                <div key={fact.label}>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </div>
              ))}
            </div>
          )}
          {helperNote && <p className="info-helper">{helperNote}</p>}
        </div>
        {image && (
          <div className="info-visual info-hero-visual">
            <div className="info-visual-card">
              <img src={image} alt={`${title} visual`} loading="lazy" />
              {stats.length > 0 && (
                <div className="info-visual-stats">
                  {stats.slice(0, 3).map((stat) => (
                    <div key={stat.label}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </section>
      {stats.length > 0 && (
        <section className="info-stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>
      )}
      {quickActions.length > 0 && (
        <section className="info-section info-actions">
          <div className="section-heading">
            <p className="eyebrow">Do more in a minute</p>
            <h2>One-tap actions built into instant cash</h2>
          </div>
          <div className="info-actions-grid">
            {quickActions.map((action) => (
              <article key={action.title} className="info-action-card">
                {action.icon && <span className="info-action-icon">{action.icon}</span>}
                <div>
                  <h3>{action.title}</h3>
                  <p>{action.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
      {displayHighlights.length > 0 && (
        <section className="info-section">
          <div className="section-heading">
            <p className="eyebrow">What to expect</p>
            <h2>Designed to make {title} feel effortless</h2>
          </div>
          <div className="info-value-grid">
            {displayHighlights.map((item, index) => (
              <article className="info-value-card" key={item.title || item}>
                <span className="info-value-index">0{index + 1}</span>
                <h3>{item.title || item}</h3>
                {item.description && <p>{item.description}</p>}
              </article>
            ))}
          </div>
        </section>
      )}
      {steps.length > 0 && (
        <section className="info-section info-steps">
          <div className="section-heading">
            <p className="eyebrow">How it works</p>
            <h2>From tap to cash in your account</h2>
          </div>
          <div className="info-step-grid">
            {steps.map((step, index) => (
              <div className="info-step" key={step.title}>
                <span className="info-step-number">{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  {step.description && <p>{step.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      {assurance.length > 0 && (
        <section className="info-section">
          <div className="info-guardrail">
            <div>
              <p className="eyebrow">Customer-first guardrails</p>
              <h3>Built-in protections to keep borrowing transparent</h3>
            </div>
            <div className="info-guardrail-grid">
              {assurance.map((item) => (
                <div className="info-guardrail-item" key={item.title}>
                  <span className="info-bullet-dot" aria-hidden="true" />
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {faqs.length > 0 && (
        <section className="info-section info-faq">
          <div className="section-heading">
            <p className="eyebrow">FAQs</p>
            <h2>{title} in plain words</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default InfoPage;
