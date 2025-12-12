import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './DashboardLayout.css';

function DashboardLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const [showLogoutWarning, setShowLogoutWarning] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [lastActivity, setLastActivity] = useState(Date.now());
    const [sessionStart] = useState(Date.now());

    // Session timeout settings
    const INACTIVITY_TIMEOUT = 15 * 60 * 1000; // 15 minutes
    const MAX_SESSION_TIME = 30 * 60 * 1000; // 30 minutes

    const [notifications] = useState([
        {
            id: 1,
            type: 'payment',
            title: 'EMI Due Soon',
            message: 'Your Personal Loan EMI of ₹15,234 is due on 15 Dec 2025',
            time: '2 hours ago',
            read: false
        },
        {
            id: 2,
            type: 'success',
            title: 'Loan Application Approved',
            message: 'Your Two-Wheeler loan application has been approved!',
            time: '1 day ago',
            read: false
        },
        {
            id: 3,
            type: 'info',
            title: 'Credit Score Updated',
            message: 'Your credit score increased by 12 points this month',
            time: '2 days ago',
            read: true
        }
    ]);

    const [user] = useState({
        name: 'Ravi Shekhar',
        email: 'ravi@example.com',
        phone: '+91 99999 99999',
        joinDate: 'Jan 2024',
        kycStatus: 'Verified',
        accountStatus: 'Active'
    });

    const logoSrc = `${process.env.PUBLIC_URL || ''}/Png-01.png`;

    // Handle logout
    const handleLogout = () => {
        // Clear all session data
        localStorage.clear();
        sessionStorage.clear();

        // Clear any cookies
        document.cookie.split(";").forEach((c) => {
            document.cookie = c
                .replace(/^ +/, "")
                .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });

        // Clear browser history to prevent back button access
        window.history.pushState(null, '', '/login');

        // Disable back button after logout
        window.onpopstate = function () {
            window.history.pushState(null, '', '/login');
        };

        // Force page reload to clear any cached state and navigate to login
        window.location.replace('/login');
    };


    // Track user activity
    useEffect(() => {
        const updateActivity = () => {
            setLastActivity(Date.now());
        };

        // Track various user activities
        const events = ['mousedown', 'keydown', 'scroll', 'touchstart'];
        events.forEach(event => {
            window.addEventListener(event, updateActivity);
        });

        return () => {
            events.forEach(event => {
                window.removeEventListener(event, updateActivity);
            });
        };
    }, []);

    // Check for session timeout
    useEffect(() => {
        const checkTimeout = setInterval(() => {
            const now = Date.now();
            const inactiveTime = now - lastActivity;
            const sessionTime = now - sessionStart;

            // Check max session time (30 min)
            if (sessionTime >= MAX_SESSION_TIME) {
                alert('Your session has expired for security reasons. Please login again.');
                handleLogout();
                return;
            }

            // Check inactivity timeout (15 min)
            if (inactiveTime >= INACTIVITY_TIMEOUT) {
                alert('You have been logged out due to inactivity. Please login again.');
                handleLogout();
                return;
            }
        }, 60000); // Check every minute

        return () => clearInterval(checkTimeout);
    }, [lastActivity, sessionStart]);

    // Handle browser back button
    useEffect(() => {
        const handlePopState = (e) => {
            e.preventDefault();
            setShowLogoutWarning(true);
            // Push state back to prevent actual navigation
            window.history.pushState(null, '', location.pathname);
        };

        // Push initial state
        window.history.pushState(null, '', location.pathname);
        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [location]);

    const confirmLogout = () => {
        setShowLogoutWarning(false);
        handleLogout();
    };

    const cancelLogout = () => {
        setShowLogoutWarning(false);
    };

    const unreadCount = notifications.filter(n => !n.read).length;

    return (
        <div className="dashboard-layout">
            {/* Dashboard Header/Navigation */}
            <nav className="dashboard-nav">
                <div className="dashboard-nav-content">
                    <div className="dashboard-logo">
                        <img src={logoSrc} alt="E-Fin" className="dashboard-logo-img" />
                    </div>

                    <div className="dashboard-nav-actions">
                        <button
                            className="nav-icon-btn"
                            title="Notifications"
                            onClick={() => {
                                setShowNotifications(!showNotifications);
                                setShowProfile(false);
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                            </svg>
                            {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
                        </button>

                        <button
                            className="nav-icon-btn"
                            title="Profile"
                            onClick={() => {
                                setShowProfile(!showProfile);
                                setShowNotifications(false);
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </button>

                        <button className="logout-btn" onClick={() => setShowLogoutWarning(true)}>
                            Logout
                        </button>
                    </div>
                </div>

                {/* Notifications Dropdown */}
                {showNotifications && (
                    <div className="dropdown-panel notifications-panel">
                        <div className="dropdown-header">
                            <h3>Notifications</h3>
                            <button className="mark-read-btn">Mark all as read</button>
                        </div>
                        <div className="notifications-list">
                            {notifications.map(notif => (
                                <div key={notif.id} className={`notification-item ${notif.read ? 'read' : 'unread'}`}>
                                    <div className={`notification-icon ${notif.type}`}>
                                        {notif.type === 'payment' && '💳'}
                                        {notif.type === 'success' && '✅'}
                                        {notif.type === 'info' && 'ℹ️'}
                                    </div>
                                    <div className="notification-content">
                                        <h4>{notif.title}</h4>
                                        <p>{notif.message}</p>
                                        <span className="notification-time">{notif.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="dropdown-footer">
                            <button className="view-all-btn">View All Notifications</button>
                        </div>
                    </div>
                )}

                {/* Profile Dropdown */}
                {showProfile && (
                    <div className="dropdown-panel profile-panel">
                        <div className="profile-header">
                            <div className="profile-avatar">
                                {user.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="profile-info">
                                <h3>{user.name}</h3>
                                <p>{user.email}</p>
                            </div>
                        </div>
                        <div className="profile-details">
                            <div className="detail-row">
                                <span className="detail-label">Phone</span>
                                <span className="detail-value">{user.phone}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Member Since</span>
                                <span className="detail-value">{user.joinDate}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">KYC Status</span>
                                <span className="status-badge verified">{user.kycStatus}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Account Status</span>
                                <span className="status-badge active">{user.accountStatus}</span>
                            </div>
                        </div>
                        <div className="profile-actions">
                            <button className="profile-action-btn">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                </svg>
                                Edit Profile
                            </button>
                            <button className="profile-action-btn">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                                Change Password
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Click outside to close dropdowns */}
            {(showNotifications || showProfile) && (
                <div
                    className="dropdown-overlay"
                    onClick={() => {
                        setShowNotifications(false);
                        setShowProfile(false);
                    }}
                />
            )}

            {/* Main Dashboard Content */}
            <main className="dashboard-main">
                <Outlet />
            </main>

            {/* Logout Warning Modal */}
            {showLogoutWarning && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-icon warning">⚠️</div>
                        <h3>Leaving Dashboard?</h3>
                        <p>This action will take you back to the website and log you out for security reasons.</p>
                        <div className="modal-actions">
                            <button className="modal-btn cancel" onClick={cancelLogout}>
                                Stay in Dashboard
                            </button>
                            <button className="modal-btn confirm" onClick={confirmLogout}>
                                Logout & Leave
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DashboardLayout;
