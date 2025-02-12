const express = require('express');
const { addBankAccount, getBankAccounts } = require('../controllers/userBankAccountController');

const router = express.Router();

// Add a bank account
router.post('/add', addBankAccount);

// Get all bank accounts
router.get('/:user_id', getBankAccounts);

module.exports = router;
