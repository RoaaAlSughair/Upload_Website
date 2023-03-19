const PDF = require('../../DB/Models/PDF');

const uploadFile = (req, res) => {
  const pdf = new PDF({
    directory: req.dir,
    filename: req.file.filename,
    contentType: req.file.contentType,
  });

  try {
    pdf.save();
    res
      .status(201)
      .setHeader('Expires', new Date(Date().now() + 5 * 1000).toUTCString())
      .send('PDF uploaded successfully');
  } catch (error) {
    res.status(400);
  }
};

module.exports = { uploadFile };
