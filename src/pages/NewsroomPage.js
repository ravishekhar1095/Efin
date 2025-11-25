const PRESS_HIGHLIGHTS = [
  {
    title: 'E-Fin launches EV financing program for 3W fleet partners',
    outlet: 'Economic Times',
    date: 'Jan 12, 2026',
  },
  {
    title: 'MLB Securities raises Series B to expand secured lending',
    outlet: 'Business Standard',
    date: 'Nov 3, 2025',
  },
  {
    title: 'E-Fin recognized for fair-lending practices by CII FinFest',
    outlet: 'Mint',
    date: 'Sep 18, 2025',
  },
];

const MEDIA_KIT_LINKS = [
  { label: 'Brand guidelines', href: '#' },
  { label: 'Founder bios', href: '#' },
  { label: 'Product imagery', href: '#' },
];

const PRESS_CONTACTS = [
  { label: 'Media desk', value: 'press@e-fin.in', href: 'mailto:press@e-fin.in' },
  { label: 'Partnerships', value: 'alliances@e-fin.in', href: 'mailto:alliances@e-fin.in' },
];

function NewsroomPage() {
  return (
    <div className="page newsroom-page">
      <section className="page-hero">
        <div className="page-hero-body">
          <span className="badge">Newsroom</span>
          <h1>Updates from E-Fin & MLB Securities Private Limited</h1>
          <p>
            Find our latest announcements, media coverage, awards, and downloadable assets. For bespoke stories or
            speaker requests, reach the media desk anytime—response within one business day.
          </p>
        </div>
      </section>

      <section className="section press-grid">
        {PRESS_HIGHLIGHTS.map((item) => (
          <article key={item.title} className="press-card">
            <span>{item.outlet}</span>
            <h3>{item.title}</h3>
            <p>{item.date}</p>
            <button type="button" className="ghost-btn">
              Read more
            </button>
          </article>
        ))}
      </section>

      <section className="section media-kit">
        <div className="company-card">
          <h2>Media kit & resources</h2>
          <p>Download approved assets for E-Fin, including logos, product screenshots, and leadership biographies.</p>
          <div className="tag-row wrap">
            {MEDIA_KIT_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="ghost-btn">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="contact-cta">
          <div>
            <h3>Press enquiries</h3>
            <p>We are available for journalist brifibegs, fintech roundtables, and policy discussions.</p>
          </div>
          <div className="contact-buttons">
            {PRESS_CONTACTS.map((contact) => (
              <a key={contact.label} className="primary-btn" href={contact.href}>
                {contact.value}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsroomPage;
