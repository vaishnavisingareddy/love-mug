const Ticket = require('../models/Ticket');

// Create a new ticket
const createTicket = async (req, res) => {
    try {
        const { description, user_id, priority } = req.body;

        const ticket = new Ticket({ description, user_id, priority });

        await ticket.save();
        res.status(201).json({ message: 'Ticket created successfully', ticket });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all tickets
const getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find().populate('user_id', 'username name');
        res.json(tickets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createTicket, getTickets };
