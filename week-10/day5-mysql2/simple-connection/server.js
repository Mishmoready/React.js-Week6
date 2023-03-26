const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv').config();

const app = express();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  // port: 3306 // default where your database is running 
  // database: process.env.MYSQL_DATABASE,
});

// localhost:PORT/
app.get('/', (req, res) => {
  // run the query in MySQL
  connection.query(`SELECT * FROM WORLD.COUNTRY LIMIT 3`, (err, result) => {
    res.send(result); // sending the result of the query as the API response 
  });
});

// localhost:PORT/city
app.get('/city', (req, res) => {
  // run the query in MySQL
  // connection.query(`SELECT NAME FROM WORLD.CITY WHERE NAME LIKE 'A%' LIMIT 10;`, (err, result) => {
  //   res.send(result); // sending the result of the query as the API response 
  // });
  
  connection.query(`SELECT NAME FROM WORLD.CITY WHERE NAME LIKE 'A%' LIMIT 3;`, (err, result) => {
    //                    0                   1                   2
    // ARRAY => [{"NAME":"Amsterdam"},{"NAME":"Apeldoorn"},{"NAME":"Almere"}]
    // ARRAY => [{"name":"Amsterdam"},{"name":"Apeldoorn"},{"name":"Almere"}]
    const cityNames = result.map(cityObject => cityObject.NAME)

    // ["Amsterdam", "Apeldoorn","Almere"]
    res.send(cityNames); // sending the result of the query as the API response 
  });
});

const PORT = process.env.PORT;
console.log('Your PORT is', PORT); // Express in 3000
app.listen(PORT);
