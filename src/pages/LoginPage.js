import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  // Login method state
  const [loginMethod, setLoginMethod] = useState('password'); // 'password' or 'otp'

  // Password login states
  const [userId, setUserId] = useState(''); // Can be email or phone
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // OTP login states
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [showOtpInput, setShowOtpInput] = useState(false);

  // Common states
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Password login handler
  const handlePasswordLogin = (e) => {
    e.preventDefault();
    if (userId && password && termsAccepted) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        // Create session with 30-minute expiration
        const sessionData = {
          userId: userId,
          loginMethod: 'password',
          loginTime: Date.now(),
          expiresAt: Date.now() + (30 * 60 * 1000) // 30 minutes
        };
        localStorage.setItem('userSession', JSON.stringify(sessionData));

        setIsLoading(false);
        navigate('/dashboard', { replace: true });
      }, 1000);
    }
  };

  // OTP request handler
  const handleRequestOtp = (e) => {
    e.preventDefault();
    if (phoneNumber.length === 10 && termsAccepted) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setShowOtpInput(true);
        setIsLoading(false);
      }, 1000);
    }
  };

  // OTP change handler
  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  // OTP submit handler
  const handleOtpLogin = (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      setIsLoading(true);
      // Simulate login
      setTimeout(() => {
        // Create session with 30-minute expiration
        const sessionData = {
          mobile: phoneNumber, // Using phoneNumber from state
          loginMethod: 'otp',
          loginTime: Date.now(),
          expiresAt: Date.now() + (30 * 60 * 1000) // 30 minutes
        };
        localStorage.setItem('userSession', JSON.stringify(sessionData));

        setIsLoading(false);
        navigate('/dashboard', { replace: true });
      }, 1000);
    }
  };

  // Switch login method
  const switchLoginMethod = (method) => {
    setLoginMethod(method);
    setShowOtpInput(false);
    setOtp(['', '', '', '', '', '']);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Section - Login Form */}
        <div className="login-form-section">
          <Link to="/" className="login-logo">
            <img src={`${process.env.PUBLIC_URL || ''}/logo.png`} alt="E-Fin" />
          </Link>

          <div className="login-content">
            <h1>Welcome to E-Fin</h1>
            <p className="login-subtitle">
              {showOtpInput
                ? 'Enter the verification code sent to your mobile'
                : 'Login to your account to get started'}
            </p>

            {/* Login Method Tabs */}
            {!showOtpInput && (
              <div className="login-tabs">
                <button
                  type="button"
                  className={`tab-btn ${loginMethod === 'password' ? 'active' : ''}`}
                  onClick={() => switchLoginMethod('password')}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  Password
                </button>
                <button
                  type="button"
                  className={`tab-btn ${loginMethod === 'otp' ? 'active' : ''}`}
                  onClick={() => switchLoginMethod('otp')}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  OTP
                </button>
              </div>
            )}

            {/* Password Login Form */}
            {loginMethod === 'password' && !showOtpInput && (
              <form className="auth-form" onSubmit={handlePasswordLogin}>
                <div className="form-group">
                  <label htmlFor="userId">Email or Phone Number</label>
                  <input
                    id="userId"
                    type="text"
                    placeholder="Enter email or 10-digit mobile number"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="password-input-wrapper">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                          <line x1="1" y1="1" x2="23" y2="23"></line>
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      )}
                    </button>
                  </div>
                  <Link to="/forgot-password" className="forgot-password-link">
                    Forgot password?
                  </Link>
                </div>

                <div className="form-checkbox">
                  <input
                    type="checkbox"
                    id="terms-password"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    required
                  />
                  <label htmlFor="terms-password">
                    I agree to the <Link to="/privacy">Terms & Conditions</Link> and{' '}
                    <Link to="/privacy">Privacy Policy</Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={!userId || !password || !termsAccepted || isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner"></span> Logging in...
                    </>
                  ) : (
                    'Login'
                  )}
                </button>
              </form>
            )}

            {/* OTP Login Form */}
            {loginMethod === 'otp' && !showOtpInput && (
              <form className="auth-form" onSubmit={handleRequestOtp}>
                <div className="form-group">
                  <label htmlFor="phone">Mobile Number</label>
                  <div className="input-wrapper">
                    <span className="input-prefix">+91</span>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      maxLength="10"
                      required
                    />
                  </div>
                </div>

                <div className="form-checkbox">
                  <input
                    type="checkbox"
                    id="terms-otp"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    required
                  />
                  <label htmlFor="terms-otp">
                    I agree to the <Link to="/privacy">Terms & Conditions</Link> and{' '}
                    <Link to="/privacy">Privacy Policy</Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={phoneNumber.length !== 10 || !termsAccepted || isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner"></span> Sending OTP...
                    </>
                  ) : (
                    'Get OTP'
                  )}
                </button>
              </form>
            )}

            {/* OTP Verification Form */}
            {showOtpInput && (
              <form className="auth-form" onSubmit={handleOtpLogin}>
                <div className="form-group">
                  <label>Enter OTP</label>
                  <div className="otp-inputs">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Backspace' && !digit && index > 0) {
                            document.getElementById(`otp-${index - 1}`).focus();
                          }
                        }}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    className="resend-btn"
                    onClick={() => alert('OTP resent!')}
                  >
                    Resend OTP
                  </button>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={otp.join('').length !== 6 || isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner"></span> Verifying...
                    </>
                  ) : (
                    'Verify & Login'
                  )}
                </button>

                <button
                  type="button"
                  className="change-number-btn"
                  onClick={() => {
                    setShowOtpInput(false);
                    setOtp(['', '', '', '', '', '']);
                  }}
                >
                  Change Mobile Number
                </button>
              </form>
            )}
          </div>

          <p className="login-footer">
            New to E-Fin? <Link to="/support/apply">Create an account</Link>
          </p>
        </div>

        {/* Right Section - Visual */}
        <div className="login-visual-section">
          <div className="visual-content">
            <div className="floating-card card-1">
              <div className="card-icon">💳</div>
              <h4>Instant Approval</h4>
              <p>Get approved in minutes</p>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">🔒</div>
              <h4>Secure & Safe</h4>
              <p>Bank-grade security</p>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">⚡</div>
              <h4>Lightning Fast</h4>
              <p>Money in your account instantly</p>
            </div>
          </div>

          <div className="visual-stats">
            <div className="stat-item">
              <h3>5M+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3>₹1000Cr+</h3>
              <p>Loans Disbursed</p>
            </div>
            <div className="stat-item">
              <h3>4.8★</h3>
              <p>App Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
