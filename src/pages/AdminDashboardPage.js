import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboardPage.css';

function AdminDashboardPage() {
    const navigate = useNavigate();
    const [adminSession, setAdminSession] = useState(null);
    const [stats, setStats] = useState({
        totalUsers: 1247,
        activeLoans: 342,
        pendingApprovals: 28,
        totalDisbursed: '₹45.2 Cr'
    });

    const [recentUsers] = useState([
        { id: 1, name: 'Rahul Sharma', email: 'rahul@example.com', status: 'Active', kyc: 'Verified', joinDate: '2025-12-10' },
        { id: 2, name: 'Priya Singh', email: 'priya@example.com', status: 'Active', kyc: 'Pending', joinDate: '2025-12-09' },
        { id: 3, name: 'Amit Kumar', email: 'amit@example.com', status: 'Active', kyc: 'Verified', joinDate: '2025-12-08' },
        { id: 4, name: 'Sneha Patel', email: 'sneha@example.com', status: 'Inactive', kyc: 'Rejected', joinDate: '2025-12-07' },
        { id: 5, name: 'Vikram Reddy', email: 'vikram@example.com', status: 'Active', kyc: 'Verified', joinDate: '2025-12-06' }
    ]);

    const [recentLoans] = useState([
        { id: 1, applicant: 'Rajesh Gupta', type: 'Personal Loan', amount: '₹5,00,000', status: 'Pending', date: '2025-12-10' },
        { id: 2, applicant: 'Anita Desai', type: 'Two-Wheeler', amount: '₹80,000', status: 'Approved', date: '2025-12-09' },
        { id: 3, applicant: 'Suresh Kumar', type: 'Business Loan', amount: '₹10,00,000', status: 'Pending', date: '2025-12-09' },
        { id: 4, applicant: 'Meena Iyer', type: 'Personal Loan', amount: '₹2,50,000', status: 'Approved', date: '2025-12-08' },
        { id: 5, applicant: 'Karan Mehta', type: 'Three-Wheeler', amount: '₹2,00,000', status: 'Rejected', date: '2025-12-08' }
    ]);

    useEffect(() => {
        const session = localStorage.getItem('adminSession');
        if (session) {
            setAdminSession(JSON.parse(session));
        }
    }, []);

    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'active':
            case 'approved':
            case 'verified':
                return 'status-success';
            case 'pending':
                return 'status-warning';
            case 'inactive':
            case 'rejected':
                return 'status-danger';
            default:
                return '';
        }
    };

    return (
        <div className="admin-dashboard-page">
            {/* Welcome Header */}
            <div className="admin-welcome-header">
                <div>
                    <h1>Welcome back, {adminSession?.name || 'Admin'}!</h1>
                    <p className="admin-subtitle">Here's what's happening with your platform today.</p>
                </div>
                <div className="admin-quick-actions">
                    <button className="quick-action-btn primary" onClick={() => navigate('/admin/users')}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <line x1="20" y1="8" x2="20" y2="14"></line>
                            <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                        Add User
                    </button>
                    <button className="quick-action-btn secondary" onClick={() => navigate('/admin/loans')}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        View Loans
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="admin-stats-grid">
                <div className="stat-card blue">
                    <div className="stat-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalUsers.toLocaleString()}</h3>
                        <p>Total Users</p>
                        <span className="stat-change positive">+12% this month</span>
                    </div>
                </div>

                <div className="stat-card green">
                    <div className="stat-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.activeLoans}</h3>
                        <p>Active Loans</p>
                        <span className="stat-change positive">+8% this week</span>
                    </div>
                </div>

                <div className="stat-card orange">
                    <div className="stat-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.pendingApprovals}</h3>
                        <p>Pending Approvals</p>
                        <span className="stat-change">Needs attention</span>
                    </div>
                </div>

                <div className="stat-card purple">
                    <div className="stat-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalDisbursed}</h3>
                        <p>Total Disbursed</p>
                        <span className="stat-change positive">+18% this month</span>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="admin-content-grid">
                {/* Recent Users */}
                <div className="admin-card">
                    <div className="admin-card-header">
                        <h2>Recent Users</h2>
                        <button className="view-all-btn" onClick={() => navigate('/admin/users')}>
                            View All →
                        </button>
                    </div>
                    <div className="admin-table-container">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>KYC</th>
                                    <th>Joined</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentUsers.map(user => (
                                    <tr key={user.id}>
                                        <td className="user-name">{user.name}</td>
                                        <td className="user-email">{user.email}</td>
                                        <td>
                                            <span className={`status-badge ${getStatusClass(user.status)}`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={`status-badge ${getStatusClass(user.kyc)}`}>
                                                {user.kyc}
                                            </span>
                                        </td>
                                        <td className="user-date">{user.joinDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Recent Loans */}
                <div className="admin-card">
                    <div className="admin-card-header">
                        <h2>Recent Loan Applications</h2>
                        <button className="view-all-btn" onClick={() => navigate('/admin/loans')}>
                            View All →
                        </button>
                    </div>
                    <div className="admin-table-container">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Applicant</th>
                                    <th>Type</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentLoans.map(loan => (
                                    <tr key={loan.id}>
                                        <td className="user-name">{loan.applicant}</td>
                                        <td>{loan.type}</td>
                                        <td className="loan-amount">{loan.amount}</td>
                                        <td>
                                            <span className={`status-badge ${getStatusClass(loan.status)}`}>
                                                {loan.status}
                                            </span>
                                        </td>
                                        <td className="user-date">{loan.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboardPage;
