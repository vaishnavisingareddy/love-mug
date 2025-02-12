const express = require('express');
const { addCallCommission, getCallCommissions } = require('../controllers/callCommissionController');

const router = express.Router();

// Add a call commission
router.post('/add', addCallCommission);

// Get all call commissions
router.get('/', getCallCommissions);

module.exports = router;
