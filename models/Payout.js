const mongoose = require('mongoose');

const payoutSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'successful', 'failed'], default: 'pending' },
    transaction_id: { type: String, unique: true, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payout', payoutSchema);
