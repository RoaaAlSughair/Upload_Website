const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');

require('dotenv').config();

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
  