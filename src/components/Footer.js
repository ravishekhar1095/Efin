import { Link } from 'react-router-dom';

import logo from '../assets/efin-logo.svg';

const FOOTER_COLUMNS = [
  {
    title: 'Products',
    links: [
      { label: 'Short-term Personal Loan (Salaried)', to: '/loans/personal-loan' },
      { label: 'Short-term Business Loan (Unsecured)', to: '/offerings/loan-against-mutual-funds' },
      { label: 'Secured Business Loans', to: '/offerings/solar-loan' },
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

  return (
    <footer className="fibe-footer">
      <div className="footer-shell">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="E-Fin" />
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
          <div className="footer-contact">
            <a href="tel:+919997842548">+91-9997842548</a>
            <a href="mailto:care@efin.co.in">care@efin.co.in</a>
          </div>
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
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {currentYear} E-Fin (MLB Securities Pvt. Ltd.). All rights reserved.</p>
        <p>Driving affordability at scale for India’s mid-income households.</p>
      </div>
    </footer>
  );
}

export default Footer;
