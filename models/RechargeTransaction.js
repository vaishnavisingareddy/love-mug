const mongoose = require('mongoose');

const rechargeTransactionSchema = new mongoose.Schema({
    recharge_amount: { type: Number, required: true },
    received_talktime: { type: Number, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['pending', 'successful', 'failed'], default: 'pending' },
    payment_method: { 
        type: String, 
        enum: ['credit_card', 'debit_card', 'upi', 'wallet', 'net_banking'], 
        required: true 
    },
    transaction_id: { type: String, unique: true, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RechargeTransaction', rechargeTransactionSchema);
