const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
    caption: { type: String, required: true },
    status_type: { type: String, enum: ['image', 'video'], required: true },
    file_address: { type: String, required: true },
    total_likes: { type: Number, default: 0 },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Status', statusSchema);
