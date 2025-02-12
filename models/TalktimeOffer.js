const mongoose = require('mongoose');

const talktimeOfferSchema = new mongoose.Schema({
    recharge_amount: { type: Number, required: true },
    received_talktime: { type: Number, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TalktimeOffer', talktimeOfferSchema);
