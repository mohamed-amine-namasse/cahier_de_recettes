const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const Recipe = require("./models/Recipes");
const User = require("./models/Users");
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://mohamedaminenamasse_db_user:QlpFqRlUFiYhDHgd@cluster0.41ovz2h.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use(bodyParser.json());

// --- ROUTES POUR LES RECETTES ---

// Ajouter une recette (POST)
app.post("/api/recettes", (req, res) => {
  const recipe = new Recipe({
    ...req.body, // Récupère title, ingredients, etc. depuis le corps de la requête
  });

  recipe
    .save()
    .then(() => res.status(201).json({ message: "Recette enregistrée !" }))
    .catch((error) => res.status(400).json({ error }));
});

// Récupérer toutes les recettes (GET)
app.get("/api/recettes", (req, res) => {
  Recipe.find()
    .then((recettes) => res.status(200).json(recettes))
    .catch((error) => res.status(400).json({ error }));
});
//Récuperer une recette par ID (GET)
app.get("/api/recettes/:id", (req, res) => {
  Recipe.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(404).json({ error }));
});
//Modifier une recette (PUT)
app.put("/api/recettes/:id", (req, res) => {
  Recipe.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Recette modifiée !" }))
    .catch((error) => res.status(400).json({ error }));
});
//Supprimer une recette (DELETE)
app.delete("/api/recettes/:id", (req, res) => {
  Recipe.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Recette supprimée !" }))
    .catch((error) => res.status(400).json({ error }));
});
module.exports = app;
