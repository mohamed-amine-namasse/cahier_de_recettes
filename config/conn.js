const mongoose = require("mongoose");
// On charge les variables d'environnement
require("dotenv").config();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch((err) => console.log("Connexion à MongoDB échouée !", err));
};

module.exports = connectDB;
