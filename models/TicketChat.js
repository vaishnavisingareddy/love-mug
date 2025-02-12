const mongoose = require('mongoose');

const ticketChatSchema = new mongoose.Schema({
    message: { type: String, required: true },
    sender: { type: String, enum: ['user', 'admin'], required: true },
    ticket_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket', required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TicketChat', ticketChatSchema);
