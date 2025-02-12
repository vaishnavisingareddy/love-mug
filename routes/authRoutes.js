const express = require('express');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const User = require('../models/User');

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Google Sign-In Route
router.post('/google', async (req, res) => {
    try {
        const { token } = req.body;
        
        // Verify Google ID Token
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        });
        const { sub, name, email, picture } = ticket.getPayload();

        // Check if user exists
        let user = await User.findOne({ google_id: sub });
        if (!user) {
            user = new User({ google_id: sub, name, email, image: picture });
            await user.save();
        }

        // Generate JWT Token
        const authToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.json({ message: "Login successful", token: authToken, user });
    } catch (error) {
        res.status(400).json({ message: "Google authentication failed", error: error.message });
    }
});

module.exports = router;
