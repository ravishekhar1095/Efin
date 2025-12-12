import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './AdminDashboardLayout.css';

function AdminDashboardLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const [showLogoutWarning, setShowLogoutWarning] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [adminSession, setAdminSession] = useState(null);

    const logoSrc = `${process.env.PUBLIC_URL || ''}/Png-01.png`;

    useEffect(() => {
        // Load admin session
        const session = localStorage.getItem('adminSession');
        if (session) {
            try {
                setAdminSession(JSON.parse(session));
            } catch (e) {
                console.error('Error parsing admin session:', e);
            }
        }
    }, []);

    const handleLogout = () => {
        // Clear all session data
        localStorage.clear();
        sessionStorage.clear();

        // Clear browser history to prevent back button access
        window.history.pushState(null, '', '/admin/login');

        // Disable back button after logout
        window.onpopstate = function () {
            window.history.pushState(null, '', '/admin/login');
        };

        // Force page reload to clear any cached state and navigate to admin login
        window.location.replace('/admin/login');
    };

    const confirmLogout = () => {
        setShowLogoutWarning(false);
        handleLogout();
    };

    const cancelLogout = () => {
        setShowLogoutWarning(false);
    };

    const getRoleBadge = () => {
        if (!adminSession) return null;

        if (adminSession.role === 'super_admin') {
            return <span className="role-badge super-admin">Super Admin</span>;
        }
        return <span className="role-badge admin">Admin</span>;
    };

    return (
        <div className="admin-dashboard-layout">
            {/* Admin Header/Navigation */}
            <nav className="admin-dashboard-nav">
                <div className="admin-dashboard-nav-content">
                    <div className="admin-dashboard-logo">
                        <img src={logoSrc} alt="E-Fin" className="admin-dashboard-logo-img" />
                        <span className="admin-portal-label">Admin Portal</span>
                    </div>

                    <div className="admin-dashboard-nav-actions">
                        {getRoleBadge()}

                        <button
                            className="admin-nav-icon-btn"
                            title="Profile"
                            onClick={() => setShowProfile(!showProfile)}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </button>

                        <button className="admin-logout-btn" onClick={() => setShowLogoutWarning(true)}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                <polyline points="16 17 21 12 16 7"></polyline>
                                <line x1="21" y1="12" x2="9" y2="12"></line>
                            </svg>
                            Logout
                        </button>
                    </div>
                </div>

                {/* Profile Dropdown */}
                {showProfile && adminSession && (
                    <div className="admin-dropdown-panel admin-profile-panel">
                        <div className="admin-profile-header">
                            <div className="admin-profile-avatar">
                                {adminSession.name ? adminSession.name.split(' ').map(n => n[0]).join('') : 'AD'}
                            </div>
                            <div className="admin-profile-info">
                                <h3>{adminSession.name || 'Admin'}</h3>
                                <p>{adminSession.email}</p>
                            </div>
                        </div>
                        <div className="admin-profile-details">
                            <div className="admin-detail-row">
                                <span className="admin-detail-label">Role</span>
                                <span className="admin-detail-value">
                                    {adminSession.role === 'super_admin' ? 'Super Administrator' : 'Administrator'}
                                </span>
                            </div>
                            <div className="admin-detail-row">
                                <span className="admin-detail-label">Permissions</span>
                                <span className="admin-detail-value">
                                    {adminSession.permissions === 'all' ? 'All Permissions' : 'Limited Permissions'}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Click outside to close dropdowns */}
            {showProfile && (
                <div
                    className="admin-dropdown-overlay"
                    onClick={() => setShowProfile(false)}
                />
            )}

            {/* Main Admin Content */}
            <main className="admin-dashboard-main">
                <Outlet />
            </main>

            {/* Logout Warning Modal */}
            {showLogoutWarning && (
                <div className="admin-modal-overlay">
                    <div className="admin-modal-content">
                        <div className="admin-modal-icon warning">⚠️</div>
                        <h3>Logout from Admin Portal?</h3>
                        <p>You will be logged out and redirected to the admin login page.</p>
                        <div className="admin-modal-actions">
                            <button className="admin-modal-btn cancel" onClick={cancelLogout}>
                                Cancel
                            </button>
                            <button className="admin-modal-btn confirm" onClick={confirmLogout}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminDashboardLayout;
