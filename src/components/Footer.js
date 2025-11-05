import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Link to="/" className="logo footer-logo">
            Efin
          </Link>
          <p className="footer-copy">
            Efin is committed to responsible lending and empowering every customer with
            the financial tools they need to thrive.
          </p>
          <div className="footer-contact">
            <a href="tel:1800123456">1800-123-456</a>
            <a href="mailto:care@efin.in">care@efin.in</a>
          </div>
        </div>
        <div>
          <h4>Products</h4>
          <ul>
            <li>
              <Link to="/solutions/personal-loans">Personal Loans</Link>
            </li>
            <li>
              <Link to="/solutions/buy-now-pay-later">Buy Now Pay Later</Link>
            </li>
            <li>
              <Link to="/solutions/two-wheeler-finance">Two Wheeler Finance</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>
              <Link to="/support#faq">FAQ</Link>
            </li>
            <li>
              <Link to="/support#contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/support#branch">Locate a Branch</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li>
              <Link to="/support#privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/support#terms">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link to="/support#disclosure">Regulatory Disclosures</Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="footer-note">© {currentYear} Efin. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
