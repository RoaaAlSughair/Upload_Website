const express = require('express');
const { downloadFile } = require('../Controllers/downloadFile');

const downloadRouter = express.Router();

downloadRouter.get('/pdf/:id', downloadFile);

module.exports = downloadRouter;