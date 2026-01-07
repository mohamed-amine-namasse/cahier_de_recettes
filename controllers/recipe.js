const Recipe = require("../models/Recipe");

exports.createRecipe = (req, res, next) => {
  const recipeObject = JSON.parse(req.body.recipe);
  delete recipeObject._id;
  delete recipeObject._userId;
  const recipe = new Recipe({
    ...recipeObject,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });

  recipe
    .save()
    .then(() => {
      res.status(201).json({ message: "Recette ajouté avec succès!" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
exports.getOneRecipe = (req, res, next) => {
  Recipe.findOne({
    _id: req.params.id,
  })
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};
exports.modifyRecipe = (req, res, next) => {
  const recipe = new Recipe({
    _id: req.params.id,
    title: req.body.title,
    ingredients: req.body.ingredients,
    steps: req.body.steps,
    author: req.body.author,
    date: req.body.date,
  });
  Recipe.updateOne({ _id: req.params.id }, recipe)
    .then(() => {
      res.status(201).json({
        message: "Recette modifié avec succès!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
exports.deleteRecipe = (req, res, next) => {
  Recipe.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Recette supprimée!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
exports.getAllRecipes = (req, res, next) => {
  Recipe.find()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
