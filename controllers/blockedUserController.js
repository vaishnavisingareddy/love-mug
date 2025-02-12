const BlockedUser = require('../models/BlockedUser');

// Block a user
const blockUser = async (req, res) => {
    try {
        const { user_id, blocker_id } = req.body;

        const block = new BlockedUser({ user_id, blocker_id });

        await block.save();
        res.status(201).json({ message: 'User blocked successfully', block });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all blocked users for a user
const getBlockedUsers = async (req, res) => {
    try {
        const { user_id } = req.params;
        const blockedUsers = await BlockedUser.find({ blocker_id: user_id }).populate('user_id', 'username name');
        res.json(blockedUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { blockUser, getBlockedUsers };
