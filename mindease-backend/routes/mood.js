const express = require('express');
const router = express.Router();
const Mood = require('../models/Mood');

router.post('/', async (req, res) => {
  const mood = new Mood(req.body);
  await mood.save();
  res.json(mood);
});

router.get('/', async (req, res) => {
  const moods = await Mood.find().sort({ date: -1 });
  res.json(moods);
});

module.exports = router;
