// Module imports
const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();
const cors = require("cors");
const myFunctions = require("./myFunctions"); // our own module

console.log(myFunctions.addOne(1));

// Enable Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Database config
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Endpoints
// Profiles Endpoint
app.get("/api/students", (req, res) => {
  console.log("/api/students ENDPOINT was hit! 🙌");
  pool.query("SELECT id, name, photo FROM team_mate;", (err, result) => {
    if (err) return console.log(err);
    console.log(result);
    res.send(result);
  });
});

// Authentication Login Endpoint
app.post("/api/authentication/login", (req, res) => {
  console.log("/api/authentication/login ENDPOINT was hit! 🔓");
  console.log(req.body);

  pool.execute(
    `SELECT name FROM team_mate WHERE name = ? AND password = ?;`,
    [req.body.username, req.body.password],
    (err, result) => {
      if (err) return console.log(err);

      if (result.length === 0) {
        console.log("INCORRECT CREDENTIALS!");
        res.sendStatus(401);
      } else {
        console.log(result);
        res.status(200).send(result);
      }
    }
  );
});

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else console.log(`It's working yo, at http://localhost:${PORT}`);
});
