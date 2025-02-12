const express = require('express');
const { addCallHistory, getCallHistory, getUserCallHistory } = require('../controllers/callHistoryController');

const router = express.Router();

// Add a new call history record
router.post('/add', addCallHistory);

// Get all call history records
router.get('/', getCallHistory);

// Get call history for a specific user
router.get('/:user_id', getUserCallHistory);

module.exports = router;
