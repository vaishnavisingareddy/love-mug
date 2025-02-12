const mongoose = require('mongoose');

const blockedUserSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    blocker_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    created_at: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('BlockedUser', blockedUserSchema);
