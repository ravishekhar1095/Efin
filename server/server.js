const express = require('express');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.API_PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT) || 10,
    queueLimit: 0
});

// Test database connection
pool.getConnection()
    .then(connection => {
        console.log('✅ Database connected successfully');
        connection.release();
    })
    .catch(err => {
        console.error('❌ Database connection failed:', err.message);
        console.error('Please check your .env file configuration');
    });

// ================================
// ADMIN AUTHENTICATION
// ================================

/**
 * Admin Login
 * POST /api/admin/login
 */
app.post('/api/admin/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required'
            });
        }

        // Query user by email
        const [users] = await pool.query(
            `SELECT u.*, r.role_name, r.level
             FROM users u
             INNER JOIN user_roles ur ON u.id = ur.user_id
             INNER JOIN roles r ON ur.role_id = r.id
             WHERE u.email = ? AND u.is_active = TRUE AND r.role_name IN ('admin', 'super_admin')`,
            [email]
        );

        if (users.length === 0) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials or unauthorized access'
            });
        }

        const user = users[0];

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password_hash);

        if (!isPasswordValid) {
            // Log failed login attempt
            await pool.query(
                `INSERT INTO admin_activity_log (admin_user_id, action_type, description, ip_address)
                 VALUES (?, 'failed_login', 'Failed login attempt', ?)`,
                [user.id, req.ip]
            );

            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Get user permissions
        const [permissions] = await pool.query(
            `SELECT DISTINCT p.permission_name
             FROM permissions p
             INNER JOIN role_permissions rp ON p.id = rp.permission_id
             INNER JOIN user_roles ur ON rp.role_id = ur.role_id
             WHERE ur.user_id = ?`,
            [user.id]
        );

        const permissionsList = permissions.map(p => p.permission_name);

        // Log successful login
        await pool.query(
            `INSERT INTO admin_activity_log (admin_user_id, action_type, description, ip_address)
             VALUES (?, 'login', 'Successful admin login', ?)`,
            [user.id, req.ip]
        );

        // Return user session data
        res.json({
            success: true,
            message: 'Login successful',
            data: {
                userId: user.id,
                email: user.email,
                name: `${user.first_name} ${user.last_name}`,
                role: user.role_name,
                level: user.level,
                permissions: permissionsList,
                isAdmin: true
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

/**
 * Verify Admin Session
 * GET /api/admin/verify
 */
app.get('/api/admin/verify', async (req, res) => {
    try {
        const { userId } = req.query;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: 'User ID is required'
            });
        }

        const [users] = await pool.query(
            `SELECT u.id, u.email, u.first_name, u.last_name, r.role_name, r.level
             FROM users u
             INNER JOIN user_roles ur ON u.id = ur.user_id
             INNER JOIN roles r ON ur.role_id = r.id
             WHERE u.id = ? AND u.is_active = TRUE AND r.role_name IN ('admin', 'super_admin')`,
            [userId]
        );

        if (users.length === 0) {
            return res.status(401).json({
                success: false,
                message: 'Invalid session'
            });
        }

        const user = users[0];

        res.json({
            success: true,
            data: {
                userId: user.id,
                email: user.email,
                name: `${user.first_name} ${user.last_name}`,
                role: user.role_name,
                level: user.level
            }
        });

    } catch (error) {
        console.error('Verify error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// ================================
// DASHBOARD STATISTICS
// ================================

/**
 * Get Dashboard Stats
 * GET /api/admin/stats
 */
app.get('/api/admin/stats', async (req, res) => {
    try {
        // Get total users
        const [totalUsersResult] = await pool.query(
            'SELECT COUNT(*) as count FROM users WHERE is_active = TRUE'
        );

        // Get active loans (you'll need to create a loans table)
        // For now, returning mock data
        const stats = {
            totalUsers: totalUsersResult[0].count,
            activeLoans: 0, // TODO: Get from loans table
            pendingApprovals: 0, // TODO: Get from loans table
            totalDisbursed: '₹0' // TODO: Calculate from loans table
        };

        res.json({
            success: true,
            data: stats
        });

    } catch (error) {
        console.error('Stats error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

/**
 * Get Recent Users
 * GET /api/admin/users/recent
 */
app.get('/api/admin/users/recent', async (req, res) => {
    try {
        const limit = req.query.limit || 5;

        const [users] = await pool.query(
            `SELECT 
                id,
                CONCAT(first_name, ' ', last_name) as name,
                email,
                CASE WHEN is_active = TRUE THEN 'Active' ELSE 'Inactive' END as status,
                kyc_status as kyc,
                DATE_FORMAT(created_at, '%Y-%m-%d') as joinDate
             FROM users
             WHERE id NOT IN (SELECT user_id FROM user_roles WHERE role_id IN (SELECT id FROM roles WHERE role_name IN ('admin', 'super_admin')))
             ORDER BY created_at DESC
             LIMIT ?`,
            [parseInt(limit)]
        );

        res.json({
            success: true,
            data: users
        });

    } catch (error) {
        console.error('Recent users error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// ================================
// ADMIN MANAGEMENT (Super Admin Only)
// ================================

/**
 * Create Admin Account
 * POST /api/admin/create-admin
 */
app.post('/api/admin/create-admin', async (req, res) => {
    try {
        const { email, password, firstName, lastName, createdBy } = req.body;

        // Validation
        if (!email || !password || !firstName || !lastName || !createdBy) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Check if email already exists
        const [existingUsers] = await pool.query(
            'SELECT id FROM users WHERE email = ?',
            [email]
        );

        if (existingUsers.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'Email already exists'
            });
        }

        // Hash password
        const passwordHash = await bcrypt.hash(password, 10);

        // Insert new admin user
        const [result] = await pool.query(
            `INSERT INTO users (
                email, password_hash, first_name, last_name,
                is_verified, is_active, kyc_status, email_verified_at
            ) VALUES (?, ?, ?, ?, TRUE, TRUE, 'completed', NOW())`,
            [email, passwordHash, firstName, lastName]
        );

        const newUserId = result.insertId;

        // Get admin role ID
        const [roles] = await pool.query(
            "SELECT id FROM roles WHERE role_name = 'admin'"
        );

        if (roles.length > 0) {
            // Assign admin role
            await pool.query(
                'INSERT INTO user_roles (user_id, role_id, assigned_by) VALUES (?, ?, ?)',
                [newUserId, roles[0].id, createdBy]
            );
        }

        // Log activity
        await pool.query(
            `INSERT INTO admin_activity_log (admin_user_id, action_type, target_user_id, description, ip_address)
             VALUES (?, 'admin_created', ?, ?, ?)`,
            [createdBy, newUserId, `Created new admin account: ${email}`, req.ip]
        );

        res.json({
            success: true,
            message: 'Admin account created successfully',
            data: {
                userId: newUserId,
                email,
                name: `${firstName} ${lastName}`
            }
        });

    } catch (error) {
        console.error('Create admin error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

/**
 * Create User Account
 * POST /api/admin/create-user
 */
app.post('/api/admin/create-user', async (req, res) => {
    try {
        const { email, password, firstName, lastName, phone, createdBy } = req.body;

        // Validation
        if (!email || !password || !firstName || !lastName || !createdBy) {
            return res.status(400).json({
                success: false,
                message: 'Email, password, first name, last name are required'
            });
        }

        // Check if email already exists
        const [existingUsers] = await pool.query(
            'SELECT id FROM users WHERE email = ?',
            [email]
        );

        if (existingUsers.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'Email already exists'
            });
        }

        // Hash password
        const passwordHash = await bcrypt.hash(password, 10);

        // Insert new regular user
        const [result] = await pool.query(
            `INSERT INTO users (
                email, password_hash, first_name, last_name, phone,
                is_verified, is_active, kyc_status
            ) VALUES (?, ?, ?, ?, ?, TRUE, TRUE, 'pending')`,
            [email, passwordHash, firstName, lastName, phone || null]
        );

        const newUserId = result.insertId;

        // Get user role ID
        const [roles] = await pool.query(
            "SELECT id FROM roles WHERE role_name = 'user'"
        );

        if (roles.length > 0) {
            // Assign user role
            await pool.query(
                'INSERT INTO user_roles (user_id, role_id, assigned_by) VALUES (?, ?, ?)',
                [newUserId, roles[0].id, createdBy]
            );
        }

        // Log activity
        await pool.query(
            `INSERT INTO admin_activity_log (admin_user_id, action_type, target_user_id, description, ip_address)
             VALUES (?, 'user_created', ?, ?, ?)`,
            [createdBy, newUserId, `Created new user account: ${email}`, req.ip]
        );

        res.json({
            success: true,
            message: 'User account created successfully',
            data: {
                userId: newUserId,
                email,
                name: `${firstName} ${lastName}`
            }
        });

    } catch (error) {
        console.error('Create user error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// ================================
// HEALTH CHECK
// ================================

app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'API is running',
        timestamp: new Date().toISOString()
    });
});

// Handle 404
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Endpoint not found'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 API Server running on http://localhost:${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;
