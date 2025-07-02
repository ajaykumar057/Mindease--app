const express = require('express');
const router = express.Router();
const Journal = require('../models/Journal');

router.post('/', async (req, res) => {
  const journal = new Journal(req.body);
  await journal.save();
  res.json(journal);
});

router.get('/', async (req, res) => {
  const journals = await Journal.find().sort({ date: -1 });
  res.json(journals);
});

module.exports = router;
