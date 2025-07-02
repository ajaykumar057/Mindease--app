const express = require('express');
const router = express.Router();
const Affirmation = require('../models/Affirmation');

// Save one
router.post('/', async (req, res) => {
  const affirmation = new Affirmation(req.body);
  await affirmation.save();
  res.json(affirmation);
});

// Get latest
router.get('/', async (req, res) => {
  const latest = await Affirmation.find().sort({ date: -1 }).limit(1);
  res.json(latest[0]);
});

module.exports = router;
