const mongoose = require('mongoose');

const callCommissionSchema = new mongoose.Schema({
    type: { type: String, enum: ['audio', 'video'], required: true },
    commission_rate: { type: Number, required: true, min: 0, max: 100 }, // percentage (0-100)
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CallCommission', callCommissionSchema);
