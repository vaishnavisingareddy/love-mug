const express = require('express');
const { createTransaction, getTransactions } = require('../controllers/rechargeController'); // Ensure this path is correct!

const router = express.Router();

// Add a new recharge transaction
router.post('/add', createTransaction);

// Get all transactions
router.get('/', getTransactions);

module.exports = router;
