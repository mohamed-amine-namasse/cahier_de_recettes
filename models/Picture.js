const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const pictureSchema = mongoose.Schema({
  imageUrl: { type: String, required: true, unique: true },
});

pictureSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Picture", pictureSchema);
