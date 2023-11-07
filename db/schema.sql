DROP DATABASE IF EXISTS cities_dev;
CREATE DATABASE cities_dev;

\c cities_dev

CREATE TABLE cities (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT,
    population INTEGER,
    area DECIMAL,
    annual_visitors DECIMAL,
    currency TEXT NOT NULL,
    is_capital BOOLEAN
);