const express = require("express");
const cities = express.Router();
const { getAllCities } = require("../queries/city.js");

cities.get("/", async (req, res) => {
  const allCities = await getAllCities();
  console.log(allCities);
  if (allCities[0]) {
    res.status(200).json(allCities);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = cities;
