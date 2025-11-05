import LoginIllustration from '../components/illustrations/LoginIllustration';

function LoginPage() {
  return (
    <div className="page login-page">
      <header className="page-hero with-illustration">
        <div className="page-hero-body">
          <span className="badge">Customer Login</span>
          <h1>Welcome to Efin Hub</h1>
          <p>
            Manage your loans, download statements, and raise support requests securely. Enter your
            registered mobile number to receive an OTP.
          </p>
        </div>
        <LoginIllustration className="page-hero-illustration" />
      </header>

      <section className="section login-section">
        <form className="login-form">
          <label htmlFor="mobile">
            Registered mobile number
            <input
              id="mobile"
              name="mobile"
              type="tel"
              placeholder="Enter 10 digit number"
              pattern="[0-9]{10}"
              required
            />
          </label>
          <button type="submit" className="primary-btn" disabled>
            Send OTP (demo)
          </button>
          <p className="form-note">
            For security, the live OTP flow is disabled in this preview. Please use the Efin app
            or website to log in.
          </p>
        </form>
      </section>
    </div>
  );
}

export default LoginPage;
