const express = require('express');
const { blockUser, getBlockedUsers } = require('../controllers/blockedUserController');

const router = express.Router();

// Block a user
router.post('/block', blockUser);

// Get all blocked users
router.get('/:user_id', getBlockedUsers);

module.exports = router;
