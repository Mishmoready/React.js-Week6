const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM country", (err, result) => {
    if (err) return console.log(err);
    console.log(result);
    res.send(result);
  });
});

// Exercise 1: Using the city table, create an endpoint at localhost:4000/city to get a list of cities that start with ‘A’
app.get("/city", (req, res) => {
  connection.query("SELECT * FROM city WHERE name LIKE 'A%'", (err, result) => {
    if (err) return console.log(err);
    console.log(result);
    res.send(result);
  });
});

// Exercise 2: Create an endpoint at localhost:4000/country/:code that shows all the information about a specific country.
app.get("/country/:code2", (req, res) => {
  const countryCode = req.params.code2;
  console.log(countryCode);

  connection.query(`SELECT * FROM country WHERE Code2='${countryCode}'`, (err, result) => {
    if (err) return console.log(err);
    console.log(result);
    res.send(result);
  });
});

// Exercise 3: Create an endpoint at localhost:4000/countryAvgLifeExpectancy that returns a list of countries ordered by the highest Life Expectancy.
app.get("/countryAvgLifeExpectancy", (req, res) => {
  const limit = req.query.limit;
  const query = `SELECT * FROM country ORDER BY LifeExpectancy DESC ${limit ? `LIMIT ${limit}` : ""}`;
  console.log(query);
  connection.query(query, (err, result) => {
    if (err) return console.log(err);
    console.log(result);
    res.send(result);
  });
});

// Exercise 4: Create a new endpoint localhost:4000/addCountry (post). It needs to accept a post request that contains an object with the properties of the country we are trying to add.
// Create a new React project in a separate directory, with a button, that when pressed will send an HTTP Post Request via fetch with the below object data in the body.
// Note: we will need to install cors and require the cors middleware as well as require the express.json() middleware before the request can go through
app.post("/addCountry", (req, res) => {
  const newCountry = req.body;
  console.log(newCountry);
  const query = `INSERT INTO country (Code, Name, Continent, Region, IndepYear, Population, LifeExpectancy, LocalName, 
    HeadOfState, Code2) VALUES ('${newCountry.Code}', '${newCountry.Name}', '${newCountry.Continent}', '${newCountry.Region}', 
      ${newCountry.IndepYear}, ${newCountry.Population}, ${newCountry.LifeExpectancy}, '${newCountry.LocalName}', 
      '${newCountry.HeadOfState}', '${newCountry.Code2}');`;

  console.log(query);
  connection.query(query, (err, result) => {
    if (err) return console.log(err);
    console.log(result);
    res.send(result);
  });
});

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server Connected! Listening at http://localhost:${PORT}`);
  }
});
