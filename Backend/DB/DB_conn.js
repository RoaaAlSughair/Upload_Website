const mongoose = require('mongoose');
const Grid = require('gridfs-stream');

require('dotenv').config();

const conn = mongoose.createConnection(process.env.DB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

process.on('unhandledRejection', (error) => {
  console.log('unhandledRejection', error.message);
});

let gfs;
conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('PDF');
});
