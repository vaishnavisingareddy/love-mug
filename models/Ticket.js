const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    description: { type: String, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['raised', 'open', 'closed'], default: 'raised' },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
    resolved_at: { type: Date, default: null },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', ticketSchema);
