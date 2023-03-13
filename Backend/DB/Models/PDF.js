const mongoose = require('mongoose');

const PDF = new mongoose.Schema({
  filename: { type: String, required: true },
  metadata: { type: Object },
  uploadDate: { type: Date, default: Date.now },
  contentType: { type: String },
});

module.exports = mongoose.model('PDF', PDF);
