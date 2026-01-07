const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: String, required: true },
  steps: { type: Number, required: true },
  author: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model("Recipe", recipeSchema);
