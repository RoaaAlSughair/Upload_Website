const path = require('path');
const fs = require('fs');
const multer = require('multer');

let uploadDir;

// Set up the multer storage engine to define where uploaded files will be saved
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    uploadDir = path.join(__dirname, 'Uploads');
    fs.mkdirSync(uploadDir, { recursive: true });
    callback(null, uploadDir);
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

// Set up the multer upload object with the storage engine and other options
const upload = multer({
  storage: storage,
}).single('pdf');

const uploadMiddleware = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).send(err.message);
    } else {
      res.dir = uploadDir;
      next();
    }
  });
};

module.exports = { uploadMiddleware };