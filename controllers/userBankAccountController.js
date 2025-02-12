const UserBankAccount = require('../models/UserBankAccount');

// Add a bank account
const addBankAccount = async (req, res) => {
    try {
        const { user_id, bank_name, account_number, account_holder_name, ifsc_code, upi_id } = req.body;

        const bankAccount = new UserBankAccount({ 
            user_id, bank_name, account_number, account_holder_name, ifsc_code, upi_id 
        });

        await bankAccount.save();
        res.status(201).json({ message: 'Bank account added successfully', bankAccount });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get bank accounts for a user
const getBankAccounts = async (req, res) => {
    try {
        const { user_id } = req.params;
        const bankAccounts = await UserBankAccount.find({ user_id });
        res.json(bankAccounts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addBankAccount, getBankAccounts };
