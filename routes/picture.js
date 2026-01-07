const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config");
const pictureCtrl = require("../controllers/picture");

router.post("/", multer, pictureCtrl.createPicture);

module.exports = router;
