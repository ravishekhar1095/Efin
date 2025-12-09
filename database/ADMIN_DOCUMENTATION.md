# Admin & RBAC System Documentation

## 🎭 Role Hierarchy

```
┌─────────────────────────────────────────────────────────┐
│                    SUPER ADMINISTRATOR                  │
│                      (Level 100)                        │
│  👑 Complete system control & all privileges            │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                      ADMINISTRATOR                       │
│                       (Level 50)                        │
│  ⚡ User & loan management, reports, support            │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                      REGULAR USER                        │
│                        (Level 0)                        │
│  👤 Loan applications & personal dashboard              │
└─────────────────────────────────────────────────────────┘
```

## 📋 Database Tables

### Core RBAC Tables
1. **`roles`** - Defines user roles (super_admin, admin, user)
2. **`user_roles`** - Assigns roles to users (many-to-many)
3. **`permissions`** - Granular permission definitions
4. **`role_permissions`** - Maps permissions to roles
5. **`admin_activity_log`** - Tracks all admin actions

## 🔑 Permissions by Module

### 👥 User Management
- `users.view_all` - View all user accounts
- `users.create` - Create new users
- `users.edit` - Edit user information
- `users.delete` - Delete/deactivate users
- `users.verify_kyc` - Approve/reject KYC documents

### 🔐 Admin Management (Super Admin Only)
- `admins.view_all` - View all admin accounts
- `admins.create` - Create admin accounts
- `admins.edit` - Edit admin accounts
- `admins.delete` - Delete admin accounts

### 🎭 Role Management (Super Admin Only)
- `roles.view` - View roles and permissions
- `roles.assign` - Assign roles to users
- `roles.create` - Create new roles
- `roles.delete` - Delete roles

### 💰 Loan Management
- `loans.view_all` - View all loan applications
- `loans.approve` - Approve/reject loans
- `loans.modify` - Modify loan terms

### 📊 Reports & Analytics
- `reports.view` - Access reports dashboard
- `reports.export` - Export reports

### ⚙️ System Settings (Super Admin Only)
- `settings.view` - View system settings
- `settings.edit` - Modify configurations

### 📝 Activity Logs
- `logs.view` - View activity logs
- `logs.export` - Export logs

## 🔐 Default Accounts

### Super Administrator
```
Email:    superadmin@efin.co.in
Password: SuperAdmin@2025
Permissions: ALL (22 permissions)
```

**Capabilities:**
- ✅ Create/edit/delete admins
- ✅ Manage all roles and permissions
- ✅ Complete system configuration
- ✅ All user and loan management
- ✅ Full access to reports and logs
- ✅ System settings control

### Administrator
```
```

**Capabilities:**
- ✅ View/create/edit users
- ✅ Verify KYC documents
- ✅ Manage loan applications
- ✅ View reports and activity logs
- ❌ Cannot create/edit other admins
- ❌ Cannot modify system settings
- ❌ Cannot create new roles

## 🛡️ Security Features

1. **Role-based Access Control** - Granular permission system
2. **Activity Logging** - All admin actions are tracked
3. **Password Hashing** - Bcrypt encryption for passwords
4. **Session Management** - Secure session tracking
5. **Failed Login Tracking** - Monitor suspicious activity

## 📝 Usage Examples

### Check if user has permission:
```javascript
// In your backend code
function hasPermission(userId, permissionName) {
  // Query user_roles -> role_permissions -> permissions
  // Return true/false
}
```

### Assign role to user:
```javascript
// Only super admin can assign admin roles
assignRole(targetUserId, roleId, assignedByUserId);
```

### Log admin action:
```javascript
logAdminAction({
  admin_user_id: adminId,
  action_type: 'user_created',
  target_user_id: newUserId,
  description: 'Created new user account',
  ip_address: req.ip,
  metadata: { ... }
});
```

## ⚠️ Important Security Notes

1. **Change default passwords immediately** after first login
2. **Super Admin** should only be used for critical operations
3. All admin actions are **logged and auditable**
4. Role assignments require proper authorization
5. Implement **IP whitelisting** for admin accounts in production

## 🚀 Next Steps

1. Create authentication middleware to check permissions
2. Implement admin dashboard UI
3. Add 2FA for admin accounts
4. Set up email notifications for admin actions
5. Create audit report generation

---

**Created:** 2025-12-10
**Version:** 1.0
**System:** E-Fin Finance Platform
