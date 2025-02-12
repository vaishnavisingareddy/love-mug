const CallRate = require('../models/CallRate');

// Add a call rate
const addCallRate = async (req, res) => {
    try {
        const { type, rate } = req.body;

        const callRate = new CallRate({ type, rate });

        await callRate.save();
        res.status(201).json({ message: 'Call rate added successfully', callRate });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all call rates
const getCallRates = async (req, res) => {
    try {
        const callRates = await CallRate.find();
        res.json(callRates);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addCallRate, getCallRates };
