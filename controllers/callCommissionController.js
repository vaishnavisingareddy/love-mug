const CallCommission = require('../models/CallCommission');

// Add a call commission
const addCallCommission = async (req, res) => {
    try {
        const { type, commission_rate } = req.body;

        const callCommission = new CallCommission({ type, commission_rate });

        await callCommission.save();
        res.status(201).json({ message: 'Call commission added successfully', callCommission });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all call commissions
const getCallCommissions = async (req, res) => {
    try {
        const callCommissions = await CallCommission.find();
        res.json(callCommissions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addCallCommission, getCallCommissions };
