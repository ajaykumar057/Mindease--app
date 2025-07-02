const mongoose = require('mongoose');

const JournalSchema = new mongoose.Schema({
  prompt: String,
  entry: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Journal', JournalSchema);
