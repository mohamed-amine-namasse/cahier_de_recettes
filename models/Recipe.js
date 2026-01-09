const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: String, required: true },
  steps: [{ type: String, required: true }],
  author: { type: String, required: true },
  date: { type: Date, required: true },
  userId: { type: String, required: true },
  imageUrl: { type: String, required: false, unique: true },
});

module.exports = mongoose.model("Recipe", recipeSchema);
