const CallHistory = require('../models/CallHistory');

// Add a new call history record
const addCallHistory = async (req, res) => {
    try {
        const { duration, user_id, caller_id, amount, rate_id, commission_id, payout_request_id } = req.body;

        const callRecord = new CallHistory({ 
            duration, user_id, caller_id, amount, rate_id, commission_id, payout_request_id 
        });

        await callRecord.save();
        res.status(201).json({ message: 'Call history added successfully', callRecord });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all call history records
const getCallHistory = async (req, res) => {
    try {
        const callHistory = await CallHistory.find()
            .populate('user_id', 'username name')
            .populate('caller_id', 'username name')
            .populate('rate_id', 'type rate')
            .populate('commission_id', 'type commission_rate')
            .populate('payout_request_id', 'amount status');

        res.json(callHistory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get call history for a specific user
const getUserCallHistory = async (req, res) => {
    try {
        const { user_id } = req.params;
        const callHistory = await CallHistory.find({ user_id })
            .populate('caller_id', 'username name')
            .populate('rate_id', 'type rate')
            .populate('commission_id', 'type commission_rate')
            .populate('payout_request_id', 'amount status');

        res.json(callHistory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addCallHistory, getCallHistory, getUserCallHistory };
