const express = require('express');
const { upload } = require('../../DB/GF_Storage');
const { uploadFile } = require('../Controllers/uploadFile');

const uploadRouter = express.Router();

uploadRouter.post('/pdf', upload.single('pdf'), uploadFile);

module.exports = uploadRouter;
