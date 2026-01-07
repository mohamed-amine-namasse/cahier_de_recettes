const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const connectDB = require("./config/conn");

connectDB();
const recipeRoutes = require("./routes/recipe");
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

app.use("/api/recipe", recipeRoutes);
module.exports = app;
