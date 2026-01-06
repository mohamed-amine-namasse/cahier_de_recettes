const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://mohamedaminenamasse_db_user:mXr605umJgGwxSBQ@cluster0.41ovz2h.mongodb.net/test?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch((err) => console.log("Connexion à MongoDB échouée !", err));
};

module.exports = connectDB;
