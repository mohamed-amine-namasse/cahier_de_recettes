const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const recipeCtrl = require("../controllers/recipe");

router.get("/", recipeCtrl.getAllRecipes);
router.post("/", multer, recipeCtrl.createRecipe);
router.get("/:id", recipeCtrl.getOneRecipe);
router.put("/:id", multer, recipeCtrl.modifyRecipe);
router.delete("/:id", recipeCtrl.deleteRecipe);

module.exports = router;
