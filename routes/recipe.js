const express = require("express");
const router = express.Router();

const recetteCtrl = require("../controllers/recipe");

router.get("/", recetteCtrl.getAllRecipes);
router.post("/", recetteCtrl.createRecipe);
router.get("/:id", recetteCtrl.getOneRecipe);
router.put("/:id", recetteCtrl.modifyRecipe);
router.delete("/:id", recetteCtrl.deleteRecipe);

module.exports = router;
