const { conn } = require('./DB_conn');
const mongoose = require('mongoose');
const multer = require('multer');
const Grid = require('gridfs-stream');
const { GridFsStorage } = require('multer-gridfs-storage');
require('dotenv').config();

let gfs;
conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('PDF');
});

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

module.exports = { gfs, upload };
