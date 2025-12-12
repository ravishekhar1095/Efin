# 🔐 Admin Portal Backend Setup Guide

## Overview
This guide will help you set up the backend API server for the E-Fin Admin Portal with MySQL database connection.

## Prerequisites
- ✅ Node.js installed
- ✅ MySQL database server running
- ✅ Database schema created (admin-schema.sql)

## Step 1: Install Dependencies

Run the following command to install all required backend packages:

```bash
npm install
```

This will install:
- `express` - Web framework for Node.js
- `mysql2` - MySQL database driver
- `bcrypt` - Password hashing
- `cors` - Enable cross-origin requests
- `dotenv` - Environment variables
- `concurrently` - Run multiple commands

## Step 2: Configure Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Edit `.env` file with your database credentials:

```bash
# MySQL Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=efin_database

# Optional: Connection pool settings
DB_CONNECTION_LIMIT=10

# API Server Configuration
API_PORT=5000

# Node Environment
NODE_ENV=development
```

**IMPORTANT:** Replace the following values:
- `DB_USER` - Your MySQL username (e.g., 'root')
- `DB_PASSWORD` - Your MySQL password
- `DB_NAME` - Your database name (e.g., 'efin_database')

## Step 3: Create Database and Tables

1. Connect to your MySQL server:
```bash
mysql -u your_username -p
```

2. Create the database:
```sql
CREATE DATABASE efin_database CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE efin_database;
```

3. Run the admin schema SQL script:
```bash
mysql -u your_username -p efin_database < database/admin-schema.sql
```

This will create:
- Users table with admin accounts
- Roles and permissions tables
- Admin activity logging
- Default admin accounts

## Step 4: Verify Database Setup

After running the schema, you should have these default accounts:

### Super Administrator
- **Email:** superadmin@efin.co.in
- **Password:** SuperAdmin@2025
- **Role:** super_admin
- **Access:** Full system control

### Regular Administrator
- **Email:** admin@efin.co.in
- **Password:** Admin@2025
- **Role:** admin
- **Access:** Limited permissions

## Step 5: Start the Application

### Option A: Run Frontend and Backend Together
```bash
npm run dev
```

This will start:
- Backend API server on `http://localhost:5000`
- Frontend React app on `http://localhost:3000`

### Option B: Run Separately

**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
npm start
```

## Step 6: Test the Setup

1. **Check API Health:**
   Open browser to: `http://localhost:5000/api/health`
   
   You should see:
   ```json
   {
     "success": true,
     "message": "API is running",
     "timestamp": "2025-12-11T..."
   }
   ```

2. **Test Admin Login:**
   - Navigate to: `http://localhost:3000/admin/login`
   - Use the super admin credentials:
     - Email: `superadmin@efin.co.in`
     - Password: `SuperAdmin@2025`
   - Click "Sign In to Admin Portal"
   - You should be redirected to the admin dashboard

## Troubleshooting

### Problem: "Unable to connect to server"
**Solution:**
- Make sure the backend server is running (`npm run server`)
- Check if port 5000 is available
- Verify `.env` file exists and has correct values

### Problem: "Database connection failed"
**Solution:**
- Verify MySQL server is running
- Check database credentials in `.env`
- Ensure database exists: `SHOW DATABASES;`
- Check if user has permissions: `GRANT ALL PRIVILEGES ON efin_database.* TO 'your_user'@'localhost';`

### Problem: "Invalid credentials"
**Solution:**
- Make sure you ran the admin-schema.sql file
- Verify admin accounts exist:
  ```sql
  SELECT email FROM users 
  WHERE email IN ('superadmin@efin.co.in', 'admin@efin.co.in');
  ```
- Check password hashes are correct in the database

### Problem: "CORS error in browser console"
**Solution:**
- Backend includes CORS middleware, but if issues persist:
- Check if backend is running on port 5000
- Verify frontend is making requests to correct URL

## API Endpoints

### Authentication
- `POST /api/admin/login` - Admin login
- `GET /api/admin/verify` - Verify admin session

### Dashboard
- `GET /api/admin/stats` - Dashboard statistics
- `GET /api/admin/users/recent` - Recent users list

### System
- `GET /api/health` - API health check

## Security Features

1. ✅ **Password Hashing** - Bcrypt with salt rounds
2. ✅ **Activity Logging** - All admin actions tracked
3. ✅ **Session Management** - 1-hour timeout
4. ✅ **Role-Based Access** - Different permissions per role
5. ✅ **Failed Login Tracking** - Security monitoring

## File Structure

```
finance-app/
├── server/
│   └── server.js           # Express API server
├── database/
│   ├── admin-schema.sql    # Database schema
│   └── ADMIN_DOCUMENTATION.md
├── src/
│   ├── pages/
│   │   ├── AdminLoginPage.js
│   │   └── AdminDashboardPage.js
│   └── components/
│       ├── ProtectedAdminRoute.js
│       └── AdminDashboardLayout.js
├── .env                    # Environment variables (create this)
├── .env.example            # Environment template
└── package.json            # Dependencies and scripts
```

## Next Steps

1. ✅ Configure `.env` file
2. ✅ Create database and run schema
3. ✅ Install dependencies (`npm install`)
4. ✅ Start the application (`npm run dev`)
5. ✅ Test admin login
6. 🔜 Create additional admin management features
7. 🔜 Implement user management
8. 🔜 Build loan management system

## Production Deployment

For production deployment:

1. Set `NODE_ENV=production` in `.env`
2. Use strong database passwords
3. Enable HTTPS
4. Set up proper firewall rules
5. Use environment-specific configs
6. Implement rate limiting
7. Add IP whitelisting for admin panel
8. Enable 2FA for admin accounts

---

**Status:** ✅ Backend Setup Complete
**Last Updated:** 2025-12-11
**Support:** Check console logs for detailed error messages
