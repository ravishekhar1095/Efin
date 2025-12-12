import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminLoginPage.css';

function AdminLoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const logoSrc = `${process.env.PUBLIC_URL || ''}/Png-01.png`;

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Please enter both email and password');
            return;
        }

        setIsLoading(true);

        try {
            // Call backend API
            const response = await fetch('http://localhost:5001/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                setIsLoading(false);
                setError(data.message || 'Login failed');
                return;
            }

            // Create admin session
            const sessionData = {
                ...data.data,
                loginTime: Date.now(),
                expiresAt: Date.now() + (60 * 60 * 1000) // 1 hour for admin
            };

            localStorage.setItem('adminSession', JSON.stringify(sessionData));

            setIsLoading(false);

            // Navigate based on role
            if (data.data.role === 'super_admin') {
                navigate('/admin/super-dashboard', { replace: true });
            } else {
                navigate('/admin/dashboard', { replace: true });
            }

        } catch (error) {
            setIsLoading(false);
            setError('Unable to connect to server. Please ensure the backend is running.');
            console.error('Login error:', error);
        }
    };

    return (
        <div className="admin-login-page">
            {/* Top Bar */}
            <div className="admin-login-header">
                <div className="admin-login-logo">
                    <img src={logoSrc} alt="E-Fin" />
                </div>
                <Link to="/" className="back-to-site-btn">
                    ← Back to Website
                </Link>
            </div>

            {/* Login Container */}
            <div className="admin-login-container">
                <div className="admin-login-card">
                    {/* Header */}
                    <div className="admin-login-header-section">
                        <div className="admin-shield-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                        </div>
                        <h1>Admin Portal</h1>
                        <p>Secure access to E-Fin administration</p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="admin-error-alert">
                            <span className="error-icon">⚠️</span>
                            {error}
                        </div>
                    )}

                    {/* Login Form */}
                    <form onSubmit={handleLogin} className="admin-login-form">
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="admin@efin.co.in"
                                disabled={isLoading}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <div className="password-input-wrapper">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    disabled={isLoading}
                                    required
                                />
                                <button
                                    type="button"
                                    className="toggle-password-btn"
                                    onClick={() => setShowPassword(!showPassword)}
                                    disabled={isLoading}
                                >
                                    {showPassword ? '👁️' : '👁️‍🗨️'}
                                </button>
                            </div>
                        </div>

                        <div className="form-options">
                            <label className="remember-me-checkbox">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    disabled={isLoading}
                                />
                                <span>Remember me</span>
                            </label>
                            <button type="button" className="forgot-password-link" disabled={isLoading}>
                                Forgot Password?
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="admin-login-btn"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <span className="spinner"></span>
                                    Authenticating...
                                </>
                            ) : (
                                <>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                                        <polyline points="10 17 15 12 10 7"></polyline>
                                        <line x1="15" y1="12" x2="3" y2="12"></line>
                                    </svg>
                                    Sign In to Admin Portal
                                </>
                            )}
                        </button>
                    </form>

                    {/* Security Notice */}
                    <div className="security-notice">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                        This is a secure admin area. All activities are logged and monitored.
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="admin-login-footer">
                <p>&copy; 2025 E-Fin. All rights reserved. | <Link to="/policies/policies">Privacy Policy</Link></p>
            </div>
        </div>
    );
}

export default AdminLoginPage;
