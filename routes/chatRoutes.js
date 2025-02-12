const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Route to add a new message
router.post('/send', chatController.addMessage);

// Route to get messages between two users
router.get('/:sender_id/:receiver_id', chatController.getChatMessages);

// Route to get all chats for a specific user
router.get('/user/:user_id', chatController.getUserChats);

module.exports = router;
