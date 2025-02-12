const RechargeTransaction = require('../models/RechargeTransaction');

// Create a new transaction
const createTransaction = async (req, res) => {
    try {
        const { recharge_amount, received_talktime, user_id, payment_method, transaction_id } = req.body;

        const transaction = new RechargeTransaction({ 
            recharge_amount, received_talktime, user_id, payment_method, transaction_id 
        });

        await transaction.save();

        console.log('✅ New Recharge Transaction Added:', transaction); // Prints in terminal

        res.status(201).json({ message: 'Transaction added successfully', transaction });
    } catch (error) {
        console.error('❌ Error:', error.message); // Print errors in terminal
        res.status(500).json({ error: error.message });
    }
};

// Get all transactions
const getTransactions = async (req, res) => {
    try {
        const transactions = await RechargeTransaction.find().populate('user_id', 'username name');
        
        console.log('📜 All Transactions:', transactions); // Prints transactions in terminal

        res.json(transactions);
    } catch (error) {
        console.error('❌ Error:', error.message);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createTransaction, getTransactions };
