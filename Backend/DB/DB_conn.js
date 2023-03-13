const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');

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

// Create a new storage object with Multer
const storage = new GridFsStorage({
  url: process.env.DB_URI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = `${Date.now()}-${file.originalname}`;
      const fileInfo = {
        filename: filename,
        bucketName: 'PDF',
      };
      resolve(fileInfo);
    });
  },
});

const upload = multer({ storage });

module.exports = { upload };
