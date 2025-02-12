const express = require('express');
const { addCallRate, getCallRates } = require('../controllers/callRateController');

const router = express.Router();

// Add a call rate
router.post('/add', addCallRate);

// Get all call rates
router.get('/', getCallRates);

module.exports = router;
