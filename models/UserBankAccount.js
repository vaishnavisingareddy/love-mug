const mongoose = require('mongoose');

const userBankAccountSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bank_name: { type: String, default: null },
    account_number: { type: String, default: null },
    account_holder_name: { type: String, required: true },
    ifsc_code: { type: String, default: null },
    upi_id: { type: String, default: null },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserBankAccount', userBankAccountSchema);
