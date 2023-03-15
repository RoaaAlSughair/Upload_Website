const express = require('express');
const { uploadMiddleware } = require('../Middleware/Upload');
const { uploadFile } = require('../Controllers/uploadFile');

const uploadRouter = express.Router();

uploadRouter.post('/pdf', uploadMiddleware, uploadFile);

module.exports = uploadRouter;
