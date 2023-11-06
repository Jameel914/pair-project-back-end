const express = require("express");
const app = express();
const cors = require("cors");

const cityController = require("./controllers/cityController.js");

app.use(cors());
app.use(express.json());
app.use("/cities", cityController);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the popular cities in Europe!! ");
});

app.get("*", (req, res) => {
  res.status(404).send({ message: "Page Not Found!" });
});

module.exports = app;
