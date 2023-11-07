const db = require("../db/dbConfig.js");

const getAllCities = async () => {
  try {
    const allCities = await db.any("SELECT * FROM cities");
    return allCities;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllCities };
