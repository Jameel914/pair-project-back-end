const db = require("../db/dbConfig.js");

const getAllCities = async () => {
  try {
    const allCities = await db.any("SELECT * FROM cities");
    return allCities;
  } catch (error) {
    return error;
  }
};

const getCity = async (id) => {
  try {
    const oneCity = await db.one("SELECT * FROM cities WHERE id=$1", id);
    return oneCity;
  } catch (error) {
    return error;
  }
};

const createCity = async (city) => {
  try {
    const newCity = await db.one(
      "INSERT INTO cities (name, image, population, area, annual_visitors, currency, is_capital) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        city.name,
        city.image,
        city.population,
        city.area,
        city.annual_visitors,
        city.currency,
        city.is_capital,
      ]
    );
    return newCity;
  } catch (error) {
    return error;
  }
};

const deleteCity = async (id) => {
  try {
    const deletedCity = await db.one(
      "DELETE FROM cities WHERE id=$1 RETURNING *",
      id
    );
    return deletedCity;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllCities, getCity, createCity, deleteCity };
