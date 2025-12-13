const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
exports.register = async (req, res) => {
    try {
        const { phone, email, password, name } = req.body;

        // Check if user already exists
        const userExists = await User.findOne({ phone });
        if (userExists) {
            return res.status(400).json({
                success: false,
                message: 'User with this phone number already exists'
            });
        }

        // Create user
        const user = await User.create({
            phone,
            email,
            password,
            name
        });

        // Generate token
        const token = generateToken(user._id);

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            token,
            user: {
                id: user._id,
                phone: user.phone,
                email: user.email,
                name: user.name
            }
        });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Server error during registration'
        });
    }
};

// @route   POST /api/auth/login
// @desc    Login user with phone/email and password
// @access  Public
exports.login = async (req, res) => {
    try {
        const { userId, password } = req.body;

        if (!userId || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide phone/email and password'
            });
        }

        // Find user by phone or email
        const isEmail = userId.includes('@');
        const query = isEmail ? { email: userId } : { phone: userId };

        const user = await User.findOne(query).select('+password');

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Check password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Update last login
        user.lastLogin = Date.now();
        await user.save();

        // Generate token
        const token = generateToken(user._id);

        res.status(200).json({
            success: true,
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                phone: user.phone,
                email: user.email,
                name: user.name
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error during login'
        });
    }
};

// @route   POST /api/auth/request-otp
// @desc    Request OTP for phone number
// @access  Public
exports.requestOTP = async (req, res) => {
    try {
        const { phone } = req.body;

        if (!phone || phone.length !== 10) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a valid 10-digit phone number'
            });
        }

        // Find or create user
        let user = await User.findOne({ phone }).select('+otp +otpExpire');

        if (!user) {
            // Create new user with temporary password
            user = await User.create({
                phone,
                password: Math.random().toString(36).slice(-8) // Temporary password
            });
        }

        // Generate OTP
        const otp = user.generateOTP();
        await user.save();

        // TODO: Send OTP via SMS (Twilio, AWS SNS, etc.)
        // For development, we'll just log it
        console.log(`📱 OTP for ${phone}: ${otp}`);

        // In production, uncomment this and remove the console.log
        // await sendSMS(phone, `Your E-Fin OTP is: ${otp}`);

        res.status(200).json({
            success: true,
            message: 'OTP sent successfully',
            // Remove this in production!
            otp: process.env.NODE_ENV === 'development' ? otp : undefined
        });
    } catch (error) {
        console.error('Request OTP error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error while sending OTP'
        });
    }
};

// @route   POST /api/auth/verify-otp
// @desc    Verify OTP and login
// @access  Public
exports.verifyOTP = async (req, res) => {
    try {
        const { phone, otp } = req.body;

        if (!phone || !otp) {
            return res.status(400).json({
                success: false,
                message: 'Please provide phone number and OTP'
            });
        }

        // Find user
        const user = await User.findOne({ phone }).select('+otp +otpExpire');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Check if OTP is valid
        if (user.otp !== otp) {
            return res.status(401).json({
                success: false,
                message: 'Invalid OTP'
            });
        }

        // Check if OTP is expired
        if (Date.now() > user.otpExpire) {
            return res.status(401).json({
                success: false,
                message: 'OTP has expired. Please request a new one'
            });
        }

        // Clear OTP
        user.otp = undefined;
        user.otpExpire = undefined;
        user.isVerified = true;
        user.lastLogin = Date.now();
        await user.save();

        // Generate token
        const token = generateToken(user._id);

        res.status(200).json({
            success: true,
            message: 'OTP verified successfully',
            token,
            user: {
                id: user._id,
                phone: user.phone,
                email: user.email,
                name: user.name
            }
        });
    } catch (error) {
        console.error('Verify OTP error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error while verifying OTP'
        });
    }
};

// @route   GET /api/auth/me
// @desc    Get current logged in user
// @access  Private
exports.getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        res.status(200).json({
            success: true,
            user: {
                id: user._id,
                phone: user.phone,
                email: user.email,
                name: user.name,
                isVerified: user.isVerified,
                createdAt: user.createdAt,
                lastLogin: user.lastLogin
            }
        });
    } catch (error) {
        console.error('Get me error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
};
