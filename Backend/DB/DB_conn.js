const mongoose = require('mongoose');
require('dotenv').config();

const conn = mongoose.createConnection(process.env.DB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

process.on('unhandledRejection', (error) => {
  console.log('unhandledRejection', error.message);
});

module.exports = { conn };