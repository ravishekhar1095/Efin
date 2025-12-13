const express = require('express');
const router = express.Router();
const {
    register,
    login,
    requestOTP,
    verifyOTP,
    getMe
} = require('../controllers/authController');
const { protect } = require('../middleware/auth');

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/request-otp', requestOTP);
router.post('/verify-otp', verifyOTP);

// Protected routes
router.get('/me', protect, getMe);

module.exports = router;
