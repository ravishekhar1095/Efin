import { Link } from 'react-router-dom';
import LoginIllustration from '../components/illustrations/LoginIllustration';
import './LoginPage.css';
// NOTE: Assuming these asset paths exist for icons and logos
// import googleIcon from '../assets/icons/google.svg';
// import facebookIcon from '../assets/icons/facebook.svg';
// import axisBankLogo from '../assets/partners/axis-bank.svg';

function LoginPage() {
  return (
    <div className="page login-page">
      <div className="login-container">
        <div className="login-form-section">
          <div className="login-header">
            <h1>Get started with E-Fin</h1>
            <p>Enter your mobile number to either sign in or create an account.</p>
          </div>
          <form className="login-form">
            <div className="form-field-group">
              Mobile Number
              <div className="input-with-icon">
                {/* Phone icon would go here */}
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="Enter 10-digit number"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
            </div>
            <div className="terms-agreement">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">
                By proceeding, you agree to our <Link to="/privacy">Terms & Conditions</Link> and{' '}
                <Link to="/privacy">Privacy Policy</Link>.
              </label>
            </div>
            <button type="submit" className="primary-btn" disabled>
              Get Started
            </button>
          </form>
          <div className="social-login-divider">
            <span>Or continue with</span>
          </div>
          <div className="social-login-buttons">
            <button type="button" className="social-btn google">
              {/* <img src={googleIcon} alt="Google" /> */}
              Google
            </button>
            <button type="button" className="social-btn facebook">
              {/* <img src={facebookIcon} alt="Facebook" /> */}
              Facebook
            </button>
          </div>
          <p className="form-note">
            Already have an account? <Link to="/support/login">Sign In</Link>
          </p>
        </div>
        <div className="login-illustration-section">
          <LoginIllustration />
          <h2>India&apos;s most trusted digital lender.</h2>
          <p>Instant approvals, flexible EMIs, and always-on support.</p>
          <div className="partner-logos">
            <span>Our Partners</span>
            <div className="logo-strip">
              {/* <img src={axisBankLogo} alt="Axis Bank" /> */}
              <p>Axis Bank</p> {/* Placeholder */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
