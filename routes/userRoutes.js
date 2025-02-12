const express = require('express');
const { 
    registerUser, 
    loginUser, 
    getUserProfile, 
    updateUserProfile, 
    getAllUsers 
} = require('../controllers/userController'); // Make sure this path is correct!

const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Get user profile (protected route)
router.get('/profile/:id', authMiddleware, getUserProfile);

// Update user profile (protected route)
router.put('/profile/:id', authMiddleware, updateUserProfile);

// Get all users
router.get('/', getAllUsers);

module.exports = router;
