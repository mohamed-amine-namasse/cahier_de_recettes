const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const Recipe = require("./models/Recipes");
const User = require("./models/Users");
const mongoose = require("mongoose");
const recetteRoutes = require("./routes/recette");
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

app.use("/api/recette", recetteRoutes);
module.exports = app;
