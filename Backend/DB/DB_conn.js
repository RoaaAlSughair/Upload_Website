const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

process.on('unhandledRejection', (error) => {
  console.log('unhandledRejection', error.message);
});
