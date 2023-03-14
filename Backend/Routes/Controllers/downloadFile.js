const { gfs } = require('../../DB/GF_Storage');

const downloadFile = (req, res) => {
  gfs.files.findOne({ _id: req.params.id }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists',
      });
    }

    const readstream = gfs.createReadStream(file.filename);
    res.set('Content-Type', file.contentType);
    res.set('Content-Disposition', `attachment; filename="${file.filename}"`);
    readstream.pipe(res);
  });
};

module.exports = { downloadFile };