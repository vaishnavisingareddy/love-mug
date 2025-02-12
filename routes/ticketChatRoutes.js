const express = require('express');
const { sendMessage, getMessages } = require('../controllers/ticketChatController');

const router = express.Router();

// Add a new message to a ticket
router.post('/send', sendMessage);

// Get all messages for a ticket
router.get('/:ticket_id', getMessages);

module.exports = router;
