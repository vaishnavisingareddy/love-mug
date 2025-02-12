const express = require('express');
const router = express.Router();
const followController = require('../controllers/followController');

// Route to follow a user
router.post('/follow', followController.followUser);

// Route to unfollow a user
router.post('/unfollow', followController.unfollowUser);

// Route to get all followers of a user
router.get('/followers/:user_id', followController.getFollowers);

// Route to get all users followed by a specific user
router.get('/following/:user_id', followController.getFollowing);

module.exports = router;
