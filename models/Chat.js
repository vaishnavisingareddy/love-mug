const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    message: { type: String, required: true },
    from_user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    to_user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    is_read: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Chat', chatSchema);
