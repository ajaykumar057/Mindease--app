const express = require('express');
const router = express.Router();
const CBTThought = require('../models/CBT');

router.post('/', async (req, res) => {
  const cbt = new CBTThought(req.body);
  await cbt.save();
  res.json(cbt);
});

router.get('/', async (req, res) => {
  const thoughts = await CBTThought.find().sort({ date: -1 });
  res.json(thoughts);
});

module.exports = router;
