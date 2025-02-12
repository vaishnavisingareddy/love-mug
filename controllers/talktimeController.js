const TalktimeOffer = require('../models/TalktimeOffer');

// Create a new talktime offer
const createTalktimeOffer = async (req, res) => {
    try {
        const { recharge_amount, received_talktime } = req.body;

        const offer = new TalktimeOffer({ recharge_amount, received_talktime });

        await offer.save();
        res.status(201).json({ message: 'Talktime offer added successfully', offer });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all talktime offers
const getTalktimeOffers = async (req, res) => {
    try {
        const offers = await TalktimeOffer.find();
        res.json(offers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createTalktimeOffer, getTalktimeOffers };
