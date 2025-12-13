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
// USER AUTHENTICATION
// ================================

/**
 * User Login with Password
 * POST /api/auth/login
 */
app.post('/api/auth/login', async (req, res) => {
    try {
        const { userId, password } = req.body;

        if (!userId || !password) {
            return res.status(400).json({
                success: false,
                message: 'Phone/email and password are required'
            });
        }

        // Determine if userId is email or phone
        const isEmail = userId.includes('@');
        const query = isEmail
            ? 'SELECT * FROM users WHERE email = ? AND is_active = TRUE'
            : 'SELECT * FROM users WHERE phone = ? AND is_active = TRUE';

        const [users] = await pool.query(query, [userId]);

        if (users.length === 0) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        const user = users[0];

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password_hash);

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Update last login
        await pool.query(
            'UPDATE users SET updated_at = NOW() WHERE id = ?',
            [user.id]
        );

        res.json({
            success: true,
            message: 'Login successful',
            user: {
                id: user.id,
                email: user.email,
                phone: user.phone,
                name: `${user.first_name || ''} ${user.last_name || ''}`.trim(),
                isVerified: user.is_verified
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
 * Request OTP for Phone Number
 * POST /api/auth/request-otp
 */
app.post('/api/auth/request-otp', async (req, res) => {
    try {
        const { phone } = req.body;

        if (!phone || phone.length !== 10) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a valid 10-digit phone number'
            });
        }

        // Check if user exists
        let [users] = await pool.query(
            'SELECT id FROM users WHERE phone = ?',
            [phone]
        );

        let userId;

        if (users.length === 0) {
            // Create new user with temporary password
            const tempPassword = Math.random().toString(36).slice(-8);
            const passwordHash = await bcrypt.hash(tempPassword, 10);

            const [result] = await pool.query(
                `INSERT INTO users (phone, password_hash, is_verified, is_active, kyc_status)
                 VALUES (?, ?, FALSE, TRUE, 'pending')`,
                [phone, passwordHash]
            );

            userId = result.insertId;

            // Assign user role
            const [roles] = await pool.query("SELECT id FROM roles WHERE role_name = 'user'");
            if (roles.length > 0) {
                await pool.query(
                    'INSERT INTO user_roles (user_id, role_id) VALUES (?, ?)',
                    [userId, roles[0].id]
                );
            }
        } else {
            userId = users[0].id;
        }

        // Generate 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpExpire = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        // Store OTP (you might want to create an otp_codes table)
        // For now, we'll store it in a simple way
        await pool.query(
            `CREATE TABLE IF NOT EXISTS otp_codes (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT NOT NULL,
                otp VARCHAR(6) NOT NULL,
                expires_at DATETIME NOT NULL,
                is_used BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id)
            )`
        );

        await pool.query(
            'INSERT INTO otp_codes (user_id, otp, expires_at) VALUES (?, ?, ?)',
            [userId, otp, otpExpire]
        );

        // TODO: Send OTP via SMS (Twilio, AWS SNS, etc.)
        console.log(`📱 OTP for ${phone}: ${otp}`);

        res.json({
            success: true,
            message: 'OTP sent successfully',
            // Remove this in production!
            otp: process.env.NODE_ENV === 'development' ? otp : undefined
        });

    } catch (error) {
        console.error('Request OTP error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

/**
 * Verify OTP and Login
 * POST /api/auth/verify-otp
 */
app.post('/api/auth/verify-otp', async (req, res) => {
    try {
        const { phone, otp } = req.body;

        if (!phone || !otp) {
            return res.status(400).json({
                success: false,
                message: 'Phone number and OTP are required'
            });
        }

        // Find user
        const [users] = await pool.query(
            'SELECT * FROM users WHERE phone = ? AND is_active = TRUE',
            [phone]
        );

        if (users.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        const user = users[0];

        // Verify OTP
        const [otpRecords] = await pool.query(
            `SELECT * FROM otp_codes 
             WHERE user_id = ? AND otp = ? AND is_used = FALSE AND expires_at > NOW()
             ORDER BY created_at DESC LIMIT 1`,
            [user.id, otp]
        );

        if (otpRecords.length === 0) {
            return res.status(401).json({
                success: false,
                message: 'Invalid or expired OTP'
            });
        }

        // Mark OTP as used
        await pool.query(
            'UPDATE otp_codes SET is_used = TRUE WHERE id = ?',
            [otpRecords[0].id]
        );

        // Update user as verified
        await pool.query(
            'UPDATE users SET is_verified = TRUE, updated_at = NOW() WHERE id = ?',
            [user.id]
        );

        res.json({
            success: true,
            message: 'OTP verified successfully',
            user: {
                id: user.id,
                email: user.email,
                phone: user.phone,
                name: `${user.first_name || ''} ${user.last_name || ''}`.trim(),
                isVerified: true
            }
        });

    } catch (error) {
        console.error('Verify OTP error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

/**
 * Register New User
 * POST /api/auth/register
 */
app.post('/api/auth/register', async (req, res) => {
    try {
        const { phone, email, password, firstName, lastName } = req.body;

        if (!phone || !password) {
            return res.status(400).json({
                success: false,
                message: 'Phone and password are required'
            });
        }

        // Check if user already exists
        const [existingUsers] = await pool.query(
            'SELECT id FROM users WHERE phone = ? OR email = ?',
            [phone, email || null]
        );

        if (existingUsers.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'User with this phone or email already exists'
            });
        }

        // Hash password
        const passwordHash = await bcrypt.hash(password, 10);

        // Insert new user
        const [result] = await pool.query(
            `INSERT INTO users (
                phone, email, password_hash, first_name, last_name,
                is_verified, is_active, kyc_status
            ) VALUES (?, ?, ?, ?, ?, FALSE, TRUE, 'pending')`,
            [phone, email || null, passwordHash, firstName || null, lastName || null]
        );

        const newUserId = result.insertId;

        // Assign user role
        const [roles] = await pool.query("SELECT id FROM roles WHERE role_name = 'user'");
        if (roles.length > 0) {
            await pool.query(
                'INSERT INTO user_roles (user_id, role_id) VALUES (?, ?)',
                [newUserId, roles[0].id]
            );
        }

        res.json({
            success: true,
            message: 'User registered successfully',
            user: {
                id: newUserId,
                phone,
                email,
                name: `${firstName || ''} ${lastName || ''}`.trim()
            }
        });

    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
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
