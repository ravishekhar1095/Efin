import { useState, useEffect } from 'react';
import CreateAdminModal from '../components/admin/CreateAdminModal';
import CreateUserModal from '../components/admin/CreateUserModal';
import './SuperAdminDashboardPage.css';

function SuperAdminDashboardPage() {
    const [adminSession, setAdminSession] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');
    const [showCreateAdminModal, setShowCreateAdminModal] = useState(false);
    const [showCreateUserModal, setShowCreateUserModal] = useState(false);

    const [stats] = useState({
        totalUsers: 1247,
        totalAdmins: 8,
        activeLoans: 342,
        pendingApprovals: 28,
        totalDisbursed: '₹45.2 Cr',
        systemHealth: 'Excellent'
    });

    const [admins] = useState([
        { id: 1, name: 'Super Admin', email: 'superadmin@efin.co.in', role: 'super_admin', status: 'Active', lastLogin: '2025-12-11 20:30' },
        { id: 2, name: 'Admin User', email: 'admin@efin.co.in', role: 'admin', status: 'Active', lastLogin: '2025-12-11 18:15' },
        { id: 3, name: 'Amit Sharma', email: 'amit.sharma@efin.co.in', role: 'admin', status: 'Active', lastLogin: '2025-12-10 14:20' },
        { id: 4, name: 'Priya Kumar', email: 'priya.k@efin.co.in', role: 'admin', status: 'Inactive', lastLogin: '2025-12-05 09:45' }
    ]);

    const [recentUsers] = useState([
        { id: 1, name: 'Rahul Sharma', email: 'rahul@example.com', status: 'Active', kyc: 'Verified', loans: 2, joinDate: '2025-12-10' },
        { id: 2, name: 'Priya Singh', email: 'priya@example.com', status: 'Active', kyc: 'Pending', loans: 0, joinDate: '2025-12-09' },
        { id: 3, name: 'Amit Kumar', email: 'amit@example.com', status: 'Active', kyc: 'Verified', loans: 1, joinDate: '2025-12-08' },
        { id: 4, name: 'Sneha Patel', email: 'sneha@example.com', status: 'Inactive', kyc: 'Rejected', loans: 0, joinDate: '2025-12-07' }
    ]);

    const [systemLogs] = useState([
        { id: 1, action: 'Admin Created', user: 'Super Admin', details: 'Created new admin: Priya Kumar', time: '2 hours ago', severity: 'info' },
        { id: 2, action: 'Loan Approved', user: 'Admin User', details: 'Approved loan #L12345 for ₹5,00,000', time: '3 hours ago', severity: 'success' },
        { id: 3, action: 'Failed Login', user: 'Unknown', details: 'Failed login attempt from IP 192.168.1.1', time: '5 hours ago', severity: 'warning' },
        { id: 4, action: 'User Verified', user: 'Amit Sharma', details: 'KYC verified for user Rahul Sharma', time: '6 hours ago', severity: 'success' }
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
            case 'excellent':
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

    const getSeverityClass = (severity) => {
        switch (severity) {
            case 'success':
                return 'log-success';
            case 'warning':
                return 'log-warning';
            case 'error':
                return 'log-error';
            default:
                return 'log-info';
        }
    };

    const getRoleBadge = (role) => {
        if (role === 'super_admin') {
            return <span className="role-badge super-admin">Super Admin</span>;
        }
        return <span className="role-badge admin">Admin</span>;
    };

    const handleAdminCreated = (newAdmin) => {
        alert(`Admin created successfully: ${newAdmin.name}`);
        // Refresh admin list or update state
    };

    const handleUserCreated = (newUser) => {
        alert(`User created successfully: ${newUser.name}`);
        // Refresh user list or update state
    };

    return (
        <div className="super-admin-dashboard-page">
            {/* Super Admin Header */}
            <div className="super-admin-welcome-header">
                <div>
                    <h1>👑 Super Admin Control Panel</h1>
                    <p className="super-admin-subtitle">Complete system control and management</p>
                </div>
                <div className="super-quick-actions">
                    <button className="super-action-btn create-admin" onClick={() => setShowCreateAdminModal(true)}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <line x1="20" y1="8" x2="20" y2="14"></line>
                            <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                        Create Admin
                    </button>
                    <button className="super-action-btn create-user" onClick={() => setShowCreateUserModal(true)}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        Create User
                    </button>
                    <button className="super-action-btn settings" onClick={() => alert('System Settings - Feature coming soon!')}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M12 1v6m0 6v6m4.22-13.22l-4.24 4.24m0 6l-4.24 4.24M23 12h-6m-6 0H1m18.78 4.22l-4.24-4.24m0-6l-4.24-4.24"></path>
                        </svg>
                        Settings
                    </button>
                </div>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="super-stats-grid">
                <div className="super-stat-card purple">
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

                <div className="super-stat-card pink">
                    <div className="stat-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.totalAdmins}</h3>
                        <p>Admin Accounts</p>
                        <span className="stat-change">4 active now</span>
                    </div>
                </div>

                <div className="super-stat-card blue">
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

                <div className="super-stat-card green">
                    <div className="stat-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                    </div>
                    <div className="stat-content">
                        <h3>{stats.systemHealth}</h3>
                        <p>System Health</p>
                        <span className="stat-change positive">All systems operational</span>
                    </div>
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="super-tabs">
                <button
                    className={`super-tab ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                >
                    📊 Overview
                </button>
                <button
                    className={`super-tab ${activeTab === 'admins' ? 'active' : ''}`}
                    onClick={() => setActiveTab('admins')}
                >
                    🔐 Admin Management
                </button>
                <button
                    className={`super-tab ${activeTab === 'users' ? 'active' : ''}`}
                    onClick={() => setActiveTab('users')}
                >
                    👥 User Management
                </button>
                <button
                    className={`super-tab ${activeTab === 'logs' ? 'active' : ''}`}
                    onClick={() => setActiveTab('logs')}
                >
                    📝 System Logs
                </button>
            </div>

            {/* Tab Content */}
            <div className="super-tab-content">
                {activeTab === 'overview' && (
                    <div className="overview-content">
                        <div className="super-card">
                            <div className="super-card-header">
                                <h2>Quick Stats Overview</h2>
                            </div>
                            <div className="overview-grid">
                                <div className="overview-item">
                                    <div className="overview-icon blue">💰</div>
                                    <div>
                                        <h4>{stats.totalDisbursed}</h4>
                                        <p>Total Disbursed</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <div className="overview-icon orange">⏳</div>
                                    <div>
                                        <h4>{stats.pendingApprovals}</h4>
                                        <p>Pending Approvals</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <div className="overview-icon green">✅</div>
                                    <div>
                                        <h4>98.5%</h4>
                                        <p>Approval Rate</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <div className="overview-icon purple">📈</div>
                                    <div>
                                        <h4>156</h4>
                                        <p>Loans This Month</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'admins' && (
                    <div className="super-card">
                        <div className="super-card-header">
                            <h2>Administrator Accounts</h2>
                            <button className="add-btn" onClick={() => setShowCreateAdminModal(true)}>
                                + Add Admin
                            </button>
                        </div>
                        <div className="super-table-container">
                            <table className="super-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th>Last Login</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {admins.map(admin => (
                                        <tr key={admin.id}>
                                            <td className="admin-name">{admin.name}</td>
                                            <td className="admin-email">{admin.email}</td>
                                            <td>{getRoleBadge(admin.role)}</td>
                                            <td>
                                                <span className={`status-badge ${getStatusClass(admin.status)}`}>
                                                    {admin.status}
                                                </span>
                                            </td>
                                            <td className="admin-date">{admin.lastLogin}</td>
                                            <td>
                                                <div className="action-buttons">
                                                    <button className="action-btn edit" title="Edit">✏️</button>
                                                    <button className="action-btn delete" title="Delete">🗑️</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'users' && (
                    <div className="super-card">
                        <div className="super-card-header">
                            <h2>User Management</h2>
                            <button className="add-btn" onClick={() => setShowCreateUserModal(true)}>
                                + Add User
                            </button>
                        </div>
                        <div className="super-table-container">
                            <table className="super-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Status</th>
                                        <th>KYC</th>
                                        <th>Loans</th>
                                        <th>Joined</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentUsers.map(user => (
                                        <tr key={user.id}>
                                            <td className="admin-name">{user.name}</td>
                                            <td className="admin-email">{user.email}</td>
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
                                            <td className="loans-count">{user.loans}</td>
                                            <td className="admin-date">{user.joinDate}</td>
                                            <td>
                                                <div className="action-buttons">
                                                    <button className="action-btn view" title="View">👁️</button>
                                                    <button className="action-btn edit" title="Edit">✏️</button>
                                                    <button className="action-btn delete" title="Delete">🗑️</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'logs' && (
                    <div className="super-card">
                        <div className="super-card-header">
                            <h2>System Activity Logs</h2>
                            <button className="export-btn">
                                📤 Export Logs
                            </button>
                        </div>
                        <div className="logs-container">
                            {systemLogs.map(log => (
                                <div key={log.id} className={`log-item ${getSeverityClass(log.severity)}`}>
                                    <div className="log-icon">
                                        {log.severity === 'success' && '✅'}
                                        {log.severity === 'warning' && '⚠️'}
                                        {log.severity === 'error' && '❌'}
                                        {log.severity === 'info' && 'ℹ️'}
                                    </div>
                                    <div className="log-content">
                                        <div className="log-header">
                                            <h4>{log.action}</h4>
                                            <span className="log-time">{log.time}</span>
                                        </div>
                                        <p className="log-details">{log.details}</p>
                                        <span className="log-user">By: {log.user}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Modals */}
            <CreateAdminModal
                isOpen={showCreateAdminModal}
                onClose={() => setShowCreateAdminModal(false)}
                onSuccess={handleAdminCreated}
                createdBy={adminSession?.userId}
            />

            <CreateUserModal
                isOpen={showCreateUserModal}
                onClose={() => setShowCreateUserModal(false)}
                onSuccess={handleUserCreated}
                createdBy={adminSession?.userId}
            />
        </div>
    );
}

export default SuperAdminDashboardPage;
