const mongoose = require('mongoose');

const PDF = new mongoose.Schema({
  directory: { type: String, required: true },
  filename: { type: String, required: true },
  metadata: { type: Object },
  uploadDate: { type: Date, default: Date.now },
  contentType: { type: String },
});

module.exports = mongoose.model('PDF', PDF);
