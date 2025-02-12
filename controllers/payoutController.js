const Payout = require('../models/Payout'); // Import the Payout model
const User = require('../models/User'); // Import the User model

// Create a new payout request
const createPayoutRequest = async (req, res) => {
    try {
        const { user_id, amount, status } = req.body;

        const payoutRequest = new Payout({
            user_id, amount, status, timestamp: new Date()
        });

        await payoutRequest.save();
        res.status(201).json({ message: 'Payout request created successfully', payoutRequest });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update payout status (e.g., from pending to completed)
const updatePayoutStatus = async (req, res) => {
    try {
        const { payout_request_id, status } = req.body;

        const payoutRequest = await Payout.findByIdAndUpdate(payout_request_id, { status }, { new: true });
        if (!payoutRequest) {
            return res.status(404).json({ message: 'Payout request not found' });
        }

        res.status(200).json({ message: 'Payout status updated successfully', payoutRequest });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all payout requests for a specific user
const getUserPayoutRequests = async (req, res) => {
    try {
        const { user_id } = req.params;
        const payouts = await Payout.find({ user_id })
            .populate('user_id', 'username name')
            .sort({ timestamp: -1 }); // Sorting by timestamp to get the latest payouts first

        res.json(payouts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all payout requests (admin view)
const getAllPayoutRequests = async (req, res) => {
    try {
        const payouts = await Payout.find()
            .populate('user_id', 'username name')
            .sort({ timestamp: -1 });

        res.json(payouts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createPayoutRequest, updatePayoutStatus, getUserPayoutRequests, getAllPayoutRequests };
