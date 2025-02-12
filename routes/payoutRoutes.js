const express = require('express');
const router = express.Router();
const payoutController = require('../controllers/payoutController');

// Route to create a new payout request
router.post('/request', payoutController.createPayoutRequest);

// Route to update the payout status (e.g., from pending to completed)
router.post('/update-status', payoutController.updatePayoutStatus);

// Route to get all payout requests for a specific user
router.get('/user/:user_id', payoutController.getUserPayoutRequests);

// Route to get all payout requests (admin view)
router.get('/all', payoutController.getAllPayoutRequests);

module.exports = router;
