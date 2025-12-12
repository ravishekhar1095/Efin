#!/bin/bash

# E-Fin Admin Portal - Quick Setup Script
# This script helps you verify the setup requirements

echo "🚀 E-Fin Admin Portal - Setup Verification"
echo "=========================================="
echo ""

# Check Node.js
echo "✓ Checking Node.js..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    echo "  ✅ Node.js installed: $NODE_VERSION"
else
    echo "  ❌ Node.js not found. Please install Node.js first."
    exit 1
fi

# Check npm
echo "✓ Checking npm..."
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm -v)
    echo "  ✅ npm installed: $NPM_VERSION"
else
    echo "  ❌ npm not found."
    exit 1
fi

# Check MySQL
echo "✓ Checking MySQL..."
if command -v mysql &> /dev/null; then
    MYSQL_VERSION=$(mysql --version)
    echo "  ✅ MySQL installed: $MYSQL_VERSION"
else
    echo "  ⚠️  MySQL command not found in PATH"
    echo "     If MySQL is installed, you can skip this warning."
fi

# Check .env file
echo "✓ Checking .env file..."
if [ -f ".env" ]; then
    echo "  ✅ .env file exists"
    
    # Check if DB credentials are set
    if grep -q "DB_USER=your_db_username" .env; then
        echo "  ⚠️  IMPORTANT: Update .env file with your database credentials!"
        echo "     Edit .env and replace:"
        echo "     - DB_USER"
        echo "     - DB_PASSWORD"
        echo "     - DB_NAME"
    else
        echo "  ✅ Database credentials appear to be configured"
    fi
else
    echo "  ❌ .env file not found"
    echo "     Creating .env from .env.example..."
    if [ -f ".env.example" ]; then
        cp .env.example .env
        echo "  ✅ Created .env file"
        echo "  ⚠️  IMPORTANT: Edit .env and add your database credentials!"
    else
        echo "  ❌ .env.example not found"
        exit 1
    fi
fi

# Check database schema file
echo "✓ Checking database schema..."
if [ -f "database/admin-schema.sql" ]; then
    echo "  ✅ admin-schema.sql found"
else
    echo "  ❌ database/admin-schema.sql not found"
    exit 1
fi

# Check server file
echo "✓ Checking API server..."
if [ -f "server/server.js" ]; then
    echo "  ✅ server.js found"
else
    echo "  ❌ server/server.js not found"
    exit 1
fi

# Check node_modules
echo "✓ Checking dependencies..."
if [ -d "node_modules" ]; then
    echo "  ✅ Dependencies installed"
else
    echo "  ⚠️  Dependencies not installed"
    echo "     Run: npm install"
fi

echo ""
echo "=========================================="
echo "📋 NEXT STEPS:"
echo "=========================================="
echo ""
echo "1. ✏️  Configure Database:"
echo "   Edit .env file and set your MySQL credentials:"
echo "   - DB_USER=your_mysql_username"
echo "   - DB_PASSWORD=your_mysql_password"
echo "   - DB_NAME=efin_database"
echo ""
echo "2. 🗄️  Create Database:"
echo "   mysql -u your_username -p -e \"CREATE DATABASE efin_database;\""
echo ""
echo "3. 📊 Run Database Schema:"
echo "   mysql -u your_username -p efin_database < database/admin-schema.sql"
echo ""
echo "4. 🚀 Start the Application:"
echo "   npm run dev"
echo ""
echo "5. 🔐 Test Admin Login:"
echo "   - Open: http://localhost:3000/admin/login"
echo "   - Email: superadmin@efin.co.in"
echo "   - Password: SuperAdmin@2025"
echo ""
echo "=========================================="
echo "📖 For detailed setup instructions, see:"
echo "   BACKEND_SETUP_GUIDE.md"
echo "=========================================="
