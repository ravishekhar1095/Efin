import { Link } from 'react-router-dom';

const footerNav = [
  {
    title: 'Loans',
    links: [
      { path: '/loans/instant-cash-loan', label: 'Small Business Loan' },
      { path: '/loans/personal-loan', label: 'Personal Loan' },
      { path: '/loans/loan-against-property', label: 'Loan Against Property' },
      { path: '/loans/two-wheeler-loan', label: 'Two-Wheeler Loan' },
      { path: '/loans/three-wheeler-loan', label: 'Three-Wheeler Loan' },
    ],
  },
  {
    title: 'Calculators',
    links: [
      { path: '/resources/personal-loan-emi-calculator', label: 'Personal Loan EMI' },
      { path: '/resources/two-three-wheeler-emi-calculator', label: '2 & 3 Wheeler EMI' },
      { path: '/resources/eligibility-calculator', label: 'Eligibility Calculator' },
      { path: '/resources/check-credit-score', label: 'Credit Score Check' },
    ],
  },
  {
    title: 'Company',
    links: [
      { path: '/about', label: 'About E-Fin' },
      { path: '/about/careers', label: 'Careers' },
      { path: '/support/contact', label: 'Contact Us' },
      { path: '/support', label: 'Support' },
    ],
  },
];

const footerSocial = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: 'https://img.icons8.com/color/48/facebook.png',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: 'https://img.icons8.com/color/48/linkedin.png',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/',
    icon: 'https://img.icons8.com/color/48/twitter--v1.png',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: 'https://img.icons8.com/color/48/instagram-new.png',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919997842548',
    icon: 'https://img.icons8.com/color/48/whatsapp.png',
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();
  const logoSrc = `${process.env.PUBLIC_URL || ''}/Png-01.png`;

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand" aria-label="E-Fin">
              <img className="brand-logo brand-logo--footer" src={logoSrc} alt="E-Fin logo" loading="lazy" decoding="async" />
            </div>
            <p>
              India's fastest growing lending platform. We serve the community when you borrow from us.
            </p>
            <div className="footer-social">
              {footerSocial.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                  <img src={link.icon} alt={`${link.label} icon`} loading="lazy" />
                </a>
              ))}
            </div>
          </div>
          <div className="footer-links">
            {footerNav.map((section) => (
              <div key={section.title} className="footer-links-column">
                <p className="footer-links-title">{section.title}</p>
                <div className="footer-links-list">
                  {section.links.map((item) => (
                    <Link key={item.path} to={item.path} className="footer-link">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="footer-visit">
            <h3>Visit E-Fin</h3>
            <p>
              C-74, Sector 63<br />
              Noida, Uttar Pradesh 201301, India
            </p>
            <div className="footer-contact">
              <span>+91-9997842548</span>
              <span>care@efin.co.in</span>
            </div>
            <Link to="/support/apply" className="footer-cta">
              Apply for a loan
            </Link>
          </div>
        </div>
        <div className="footer-map">
          <iframe
            title="E-Fin Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.633845616866!2d77.3706301!3d28.6238324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff26d89b9e9%3A0x8b10fba59a26d81a!2sC-74%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="footer-bottom">
          <span>© {currentYear} E-Fin (MLB Securities Pvt. Ltd.). All rights reserved.</span>
          <div className="footer-bottom-links">
            <Link to="/support">Privacy policy</Link>
            <Link to="/support">Terms of use</Link>
            <Link to="/support">Code of ethics</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
