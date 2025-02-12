const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    post_type: { type: String, enum: ['image', 'video'], required: true },
    file_address: { type: String, required: true },
    caption: { type: String, default: null },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);
