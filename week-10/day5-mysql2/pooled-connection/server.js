// npm init -y
// npm i express dotenv mysql2
const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv').config();

const app = express();

// changed method from createConnection to createPool
// changing the variable name from 'connection' to 'pool'
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  // new properties below
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 2,
});

// localhost:PORT/
app.get('/', (req, res) => {
  // run the query in MySQL
  pool.query(`SELECT * FROM WORLD.COUNTRY LIMIT 3`, (err, result) => {
    res.send(result); // sending the result of the query as the API response
  });
});

const PORT = process.env.PORT;
console.log('Your PORT is', PORT); // Express in 3000
app.listen(PORT);
