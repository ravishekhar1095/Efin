const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

async function createSuperAdmin() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    try {
        console.log('🔐 Creating Super Admin Account...\n');

        // Super Admin credentials
        const email = 'superadmin@efin.co.in';
        const password = 'SuperAdmin@2025!Secure';
        const firstName = 'Super';
        const lastName = 'Administrator';

        // Hash password
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);

        // Check if user already exists
        const [existingUsers] = await connection.query(
            'SELECT id FROM users WHERE email = ?',
            [email]
        );

        let userId;

        if (existingUsers.length > 0) {
            // Update existing user
            userId = existingUsers[0].id;
            await connection.query(
                `UPDATE users 
                 SET password_hash = ?, 
                     first_name = ?, 
                     last_name = ?, 
                     is_verified = TRUE, 
                     is_active = TRUE,
                     kyc_status = 'completed',
                     email_verified_at = NOW()
                 WHERE id = ?`,
                [passwordHash, firstName, lastName, userId]
            );
            console.log('✅ Updated existing super admin user');
        } else {
            // Insert new user
            const [result] = await connection.query(
                `INSERT INTO users (
                    email, password_hash, first_name, last_name,
                    is_verified, is_active, kyc_status, email_verified_at
                ) VALUES (?, ?, ?, ?, TRUE, TRUE, 'completed', NOW())`,
                [email, passwordHash, firstName, lastName]
            );
            userId = result.insertId;
            console.log('✅ Created new super admin user');
        }

        // Get super_admin role ID
        const [roles] = await connection.query(
            "SELECT id FROM roles WHERE role_name = 'super_admin'"
        );

        if (roles.length === 0) {
            console.log('❌ Super admin role not found in database');
            console.log('Please run the admin-schema.sql file first');
            await connection.end();
            return;
        }

        const roleId = roles[0].id;

        // Check if role assignment exists
        const [existingRoles] = await connection.query(
            'SELECT id FROM user_roles WHERE user_id = ? AND role_id = ?',
            [userId, roleId]
        );

        if (existingRoles.length === 0) {
            // Assign super admin role
            await connection.query(
                'INSERT INTO user_roles (user_id, role_id) VALUES (?, ?)',
                [userId, roleId]
            );
            console.log('✅ Assigned super admin role');
        } else {
            console.log('✅ Super admin role already assigned');
        }

        console.log('\n🎉 Super Admin Account Ready!\n');
        console.log('═══════════════════════════════════════');
        console.log('📧 Email:    superadmin@efin.co.in');
        console.log('🔑 Password: SuperAdmin@2025!Secure');
        console.log('═══════════════════════════════════════\n');
        console.log('⚠️  IMPORTANT: Change this password after first login!\n');

    } catch (error) {
        console.error('❌ Error creating super admin:', error.message);

        if (error.code === 'ER_NO_SUCH_TABLE') {
            console.log('\n💡 Please run the database schema first:');
            console.log('   mysql -u your_username -p efin_database < database/admin-schema.sql\n');
        }
    } finally {
        await connection.end();
    }
}

createSuperAdmin();
