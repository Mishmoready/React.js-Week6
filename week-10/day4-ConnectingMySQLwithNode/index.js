const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Default endpoint
app.get("/", (req, res) => {
  pool.query("SELECT * FROM country", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// Exercise 1: Using the city table, create an endpoint at localhost:4000/city to get a list of cities that start with ‘A’
app.get("/city", (req, res) => {
  pool.query("SELECT * FROM city WHERE name LIKE 'A%'", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

// Exercise 2: Create an endpoint at localhost:4000/country/:code that shows all the information about a specific country.
app.get("/country/:myNamedParameter", (req, res) => {
  console.log(req.params.myNamedParameter);
  pool.query(`SELECT * FROM country WHERE Code2 = '${req.params.myNamedParameter}';`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

// Exercise 3: Create an endpoint at localhost:4000/countryAvgLifeExpectancy that returns a list of countries ordered by the highest Life Expectancy.
app.get("/countryHighestLifeExpectancy/", (req, res) => {
  const limit = req.query.limit;
  pool.query(
    `SELECT * FROM country ORDER BY LifeExpectancy DESC ${limit ? `LIMIT ${limit}` : ""};`,
    (err, myQueryResult) => {
      res.send(myQueryResult);
    }
  );
});

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else console.log(`It's working yo, at http://localhost:${PORT}`);
});
