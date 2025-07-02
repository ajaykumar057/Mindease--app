const mongoose = require('mongoose');

const CBTThoughtSchema = new mongoose.Schema({
  thought: String,
  reframe: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('CBTThought', CBTThoughtSchema);
