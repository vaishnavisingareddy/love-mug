const TicketChat = require('../models/TicketChat');

// Send a new message
const sendMessage = async (req, res) => {
    try {
        const { message, sender, ticket_id } = req.body;

        const chatMessage = new TicketChat({ message, sender, ticket_id });

        await chatMessage.save();
        res.status(201).json({ message: 'Message sent successfully', chatMessage });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all messages for a ticket
const getMessages = async (req, res) => {
    try {
        const { ticket_id } = req.params;
        const messages = await TicketChat.find({ ticket_id }).sort({ created_at: 1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { sendMessage, getMessages };
