import { Link } from 'react-router-dom';

function InfoPage({ page }) {
  if (!page) {
    return null;
  }

  const { category, title, description, bullets = [], stats = [], image, ctaPrimary, ctaSecondary } = page;

  return (
    <div className="page info-page">
      <section className="info-hero">
        <div className="info-copy">
          {category && <span className="eyebrow">{category}</span>}
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
          {bullets.length > 0 && (
            <ul className="info-bullets">
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
        {image && (
          <div className="info-visual">
            <img src={image} alt={`${title} visual`} loading="lazy" />
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
    </div>
  );
}

export default InfoPage;
