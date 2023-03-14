const express = require('express');
const { getAllFiles } = require('../Controllers/showAllFiles');

const showAllFilesRouter = express.Router();

showAllFilesRouter.get('/', getAllFiles);

module.exports = showAllFilesRouter;