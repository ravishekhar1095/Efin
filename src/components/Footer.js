import { Link } from 'react-router-dom';

const FOOTER_COLUMNS = [
  {
    title: 'Products',
    links: [
      { label: 'Short-term Personal Loan (Salaried)', to: '/loans/personal-loan' },
      { label: 'Two-Wheeler Loan', to: '/loans/two-wheeler-loan' },
      { label: 'Three-Wheeler Loan', to: '/loans/three-wheeler-loan' },
      { label: 'EV 2W/3W Loan', to: '/offerings/bnpl' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About E-Fin', to: '/why-efin' },
      { label: 'Support', to: '/support' },
      { label: 'Apply', to: '/support/apply' },
      { label: 'Contact', to: '/support/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Loan Calculators', to: '/how-it-works' },
      { label: 'FAQs', to: '/support' },
      { label: 'Blogs', to: '/learn/blogs' },
      { label: 'Privacy & Terms', to: '/support' },
    ],
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();
  const logoSrc = `${process.env.PUBLIC_URL || ''}/logo.png`;

  return (
    <footer className="fibe-footer">
      <div className="footer-shell">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logoSrc} alt="E-Fin" />
          </Link>
          <p>
            E-Fin is the brand name of MLB Securities Private Limited, an RBI registered NBFC (COR
            14.00526) incorporated in 1995. We began lending in 2025 with a sharp focus on young
            professionals and small entrepreneurs who deserve fast, transparent, and responsible
            access to credit.
          </p>
          <p>
            CIN: U74899DL1995PTC067535 • Registered Office: 302, Pratap Chambers, Karol Bagh, New
            Delhi-110005 • Corporate Office: C-74, Sec 63 Noida 201301
          </p>
        </div>
        <div className="footer-links-grid">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer-social-links">
            <h4>Social</h4>
            <ul>
              <li>
                <a href="https://www.facebook.com/efin" target="_blank" rel="noreferrer">
                  <span className="social-icon fb" aria-hidden="true">f</span> Facebook
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/efin" target="_blank" rel="noreferrer">
                  <span className="social-icon li" aria-hidden="true">in</span> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com/efin" target="_blank" rel="noreferrer">
                  <span className="social-icon x" aria-hidden="true">X</span> Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/efin" target="_blank" rel="noreferrer">
                  <span className="social-icon ig" aria-hidden="true">IG</span> Instagram
                </a>
              </li>
              <li>
                <a href="https://wa.me/919997842548" target="_blank" rel="noreferrer">
                  <span className="social-icon wa" aria-hidden="true">WA</span> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-map-col">
          <h4>Find us</h4>
          <div className="footer-map-embed" aria-label="E-Fin office location map">
            <iframe
              title="E-Fin office map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.633845616866!2d77.3706301!3d28.6238324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff26d89b9e9%3A0x8b10fba59a26d81a!2sC-74%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="footer-contact">
            <a href="tel:+919997842548">+91-9997842548</a>
            <a href="mailto:care@efin.co.in">care@efin.co.in</a>
            <div className="footer-address">Visit us: C-74, Sec 63 Noida 201301</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {currentYear} E-Fin (MLB Securities Pvt. Ltd.). All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
