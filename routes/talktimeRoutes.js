const express = require('express');
const { createTalktimeOffer, getTalktimeOffers } = require('../controllers/talktimeController');

const router = express.Router();

// Add a new talktime offer
router.post('/add', createTalktimeOffer);

// Get all talktime offers
router.get('/', getTalktimeOffers);

module.exports = router;
