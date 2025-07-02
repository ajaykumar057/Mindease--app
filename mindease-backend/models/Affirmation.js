const mongoose = require('mongoose');

const AffirmationSchema = new mongoose.Schema({
  text: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Affirmation', AffirmationSchema);
