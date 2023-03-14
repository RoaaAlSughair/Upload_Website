const PDF = require('../../DB/Models/PDF');

const getAllFiles = (req, res) => {
  PDF.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { getAllFiles };
