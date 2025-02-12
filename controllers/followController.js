const Follow = require('../models/Follow'); // Import the Follow model
const User = require('../models/User'); // Import the User model

// Follow a user
const followUser = async (req, res) => {
    try {
        const { follower_id, followed_id } = req.body;

        // Check if the user is already following the other user
        const existingFollow = await Follow.findOne({ follower_id, followed_id });
        if (existingFollow) {
            return res.status(400).json({ message: 'Already following this user' });
        }

        const newFollow = new Follow({ follower_id, followed_id });
        await newFollow.save();

        res.status(201).json({ message: 'User followed successfully', newFollow });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Unfollow a user
const unfollowUser = async (req, res) => {
    try {
        const { follower_id, followed_id } = req.body;

        // Find the follow record and remove it
        const followRecord = await Follow.findOneAndDelete({ follower_id, followed_id });
        if (!followRecord) {
            return res.status(404).json({ message: 'Follow record not found' });
        }

        res.status(200).json({ message: 'User unfollowed successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all followers of a user
const getFollowers = async (req, res) => {
    try {
        const { user_id } = req.params;
        const followers = await Follow.find({ followed_id: user_id })
            .populate('follower_id', 'username name');

        res.json(followers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all users followed by a specific user
const getFollowing = async (req, res) => {
    try {
        const { user_id } = req.params;
        const following = await Follow.find({ follower_id: user_id })
            .populate('followed_id', 'username name');

        res.json(following);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { followUser, unfollowUser, getFollowers, getFollowing };
