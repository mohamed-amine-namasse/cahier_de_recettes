const Picture = require("../models/Picture");
const fs = require("fs");
exports.createPicture = async (req, res, next) => {
  const picture = new Picture({
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }}`,
  });
  picture
    .save()
    .then(() => {
      res.status(201).json(picture);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
