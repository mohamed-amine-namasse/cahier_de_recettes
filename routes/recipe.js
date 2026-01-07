const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const recipeCtrl = require("../controllers/recipe");

router.get("/", auth, recipeCtrl.getAllRecipes);
router.post("/", auth, multer, recipeCtrl.createRecipe);
router.get("/:id", auth, recipeCtrl.getOneRecipe);
router.put("/:id", auth, recipeCtrl.modifyRecipe);
router.delete("/:id", auth, recipeCtrl.deleteRecipe);

module.exports = router;
