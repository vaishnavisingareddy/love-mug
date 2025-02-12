const mongoose = require('mongoose');

const callHistorySchema = new mongoose.Schema({
    duration: { type: Number, required: true }, // in seconds
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    caller_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    rate_id: { type: mongoose.Schema.Types.ObjectId, ref: 'CallRate', required: true },
    commission_id: { type: mongoose.Schema.Types.ObjectId, ref: 'CallCommission', required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CallHistory', callHistorySchema);
