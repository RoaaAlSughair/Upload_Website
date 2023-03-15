const PDF = require('../../DB/Models/PDF');

const uploadFile = (req, res) => {
  const pdf = new PDF({
    directory: req.dir,
    filename: req.file.filename,
    metadata: req.body.metadata,
    contentType: req.file.contentType,
  });

  try {
    pdf.save();
    res.status(201).send('PDF uploaded successfully');
  } catch (error) {
    res.status(400);
  }
};

module.exports = { uploadFile };
