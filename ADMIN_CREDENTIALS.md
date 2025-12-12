# 🔐 Admin Portal Login Credentials

## ✅ Active Admin Accounts

### Super Administrator (Full Access)
```
Email:    superadmin@efin.co.in
Password: SuperAdmin@2025!Secure
URL:      http://localhost:3000/admin/login
```

**Capabilities:**
- ✅ Complete system control
- ✅ Manage admins (create, edit, delete)
- ✅ Manage users (create, edit, delete)
- ✅ View system activity logs
- ✅ Access system settings
- ✅ All permissions (22 total)

**Dashboard:** `/admin/super-dashboard`

---

### Regular Administrator (Limited Access)
```
Email:    admin@efin.co.in
Password: Admin@2025!Secure
URL:      http://localhost:3000/admin/login
```

**Capabilities:**
- ✅ View and manage users
- ✅ Verify KYC documents
- ✅ Approve/reject loan applications
- ✅ View reports and analytics
- ✅ View activity logs
- ❌ Cannot manage other admins
- ❌ Cannot modify system settings
- ❌ Cannot create new roles

**Dashboard:** `/admin/dashboard`

---

## 🔒 Security Notes

1. **Change Passwords After First Login**
   - These are temporary credentials
   - Update immediately after accessing the system

2. **Password Requirements**
   - Minimum 8 characters
   - Must include uppercase, lowercase, number, and special character
   - Current passwords meet these requirements

3. **Session Management**
   - Admin sessions expire after 1 hour of activity
   - Automatic logout after 15 minutes of inactivity
   - Maximum session time: 30 minutes

4. **Activity Logging**
   - All admin actions are logged in the database
   - Includes login/logout, user management, and system changes
   - Failed login attempts are tracked with IP addresses

---

## 📝 How to Login

1. **Open Admin Portal:**
   ```
   http://localhost:3000/admin/login
   ```

2. **Enter Credentials:**
   - Use one of the email/password combinations above

3. **Access Dashboard:**
   - Super Admin → `/admin/super-dashboard` (4 tabs)
   - Regular Admin → `/admin/dashboard` (basic view)

---

## 🛠️ Managing Admin Accounts

### Create New Admin (Super Admin Only)

Run this script:
```bash
node scripts/create-regular-admin.js
```

Or create directly in database:
```sql
-- Create user
INSERT INTO users (email, password_hash, first_name, last_name, is_verified, is_active)
VALUES ('newadmin@efin.co.in', '$2b$10$...', 'First', 'Last', TRUE, TRUE);

-- Assign admin role
INSERT INTO user_roles (user_id, role_id)
SELECT u.id, r.id FROM users u
CROSS JOIN roles r
WHERE u.email = 'newadmin@efin.co.in' AND r.role_name = 'admin';
```

### Create New Super Admin

Run this script:
```bash
node scripts/create-super-admin.js
```

This will update credentials to the secure version.

---

## 🔄 Reset Password

If you forget the password, run the appropriate script:

```bash
# Reset Super Admin
node scripts/create-super-admin.js

# Reset Regular Admin  
node scripts/create-regular-admin.js
```

These scripts will reset the password to the secure default.

---

## ⚠️ IMPORTANT SECURITY REMINDERS

1. ✅ **Never share** admin credentials via insecure channels
2. ✅ **Always use HTTPS** in production
3. ✅ **Enable 2FA** for admin accounts (future feature)
4. ✅ **Rotate passwords** regularly
5. ✅ **Monitor activity logs** for suspicious behavior
6. ✅ **Use strong, unique passwords**
7. ✅ **Limit super admin access** to trusted personnel only

---

## 📊 Current Account Status

| Email | Role | Status | Created |
|-------|------|--------|---------|
| superadmin@efin.co.in | Super Admin | ✅ Active | 2025-12-11 |
| admin@efin.co.in | Admin | ✅ Active | 2025-12-11 |

---

## 🚀 Quick Start

```bash
# Start backend server
npm run server

# Start frontend (another terminal)
npm start

# Login at:
http://localhost:3000/admin/login
```

---

**Last Updated:** 2025-12-11  
**Version:** 1.0  
**Status:** ✅ Active & Secure

---

## 📞 Support

If you encounter any issues with login:

1. Check backend server is running on port 5001
2. Verify database connection
3. Check browser console for errors
4. Review backend logs for failed authentication

**For password issues:**
- Run the appropriate create script to reset
- Verify database schema is up to date
- Check bcrypt hashing is working correctly
