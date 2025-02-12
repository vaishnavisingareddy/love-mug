const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    google_id: { type: String, unique: true, sparse: true }, // Unique Google User ID
    username: { type: String, unique: true, sparse: true }, // Allow null for Google users
    name: { type: String, required: true },
    image: { type: String, default: null },
    country_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Country', required: false }, // Not required for Google
    gender: { type: String, enum: ['male', 'female', 'others'], required: false },
    fcm_token: { type: String, unique: true, default: null },
    dob: { type: Date, required: false }, // Not required for Google
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    is_creator: { type: Boolean, default: false },
    wallet_balance: { type: Number, default: 0.0 },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
