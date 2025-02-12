const express = require('express');
const { createTicket, getTickets } = require('../controllers/ticketController');

const router = express.Router();

// Add a new ticket
router.post('/add', createTicket);

// Get all tickets
router.get('/', getTickets);

module.exports = router;
