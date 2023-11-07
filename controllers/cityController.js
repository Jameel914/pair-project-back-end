const express = require("express");
const cities = express.Router();
const {
  getAllCities,
  getCity,
  createCity,
  deleteCity,
} = require("../queries/city.js");

cities.get("/", async (req, res) => {
  const allCities = await getAllCities();
  console.log(allCities);
  if (allCities[0]) {
    res.status(200).json(allCities);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

cities.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneCity = await getCity(id);
  if (oneCity) {
    res.status(200).json(oneCity);
  } else {
    res.status(404).json({ message: "City Not Found" });
  }
});

cities.post("/", async (req, res) => {
  const body = req.body;
  const city = await createCity(body);
  if (city) {
    res.status(200).json(city);
  } else {
    res.status(404).json({ message: "Unable to add the city" });
  }
});

cities.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedCity = await deleteCity(id);
  if (deletedCity.id) {
    res.status(200).json(deletedCity);
  } else {
    res.status(404).json({ error: "Unable to delete thhe city" });
  }
});

module.exports = cities;
