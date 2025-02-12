const mongoose = require('mongoose');

const callRateSchema = new mongoose.Schema({
    type: { type: String, enum: ['audio', 'video'], required: true },
    rate: { type: Number, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CallRate', callRateSchema);
