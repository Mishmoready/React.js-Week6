const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
});

// Root endpoint
app.get("/", (req, res) => {
  res.send("Server connected");
});

// Signup endpoint
app.post("/signup", (req, res) => {
  const query = `INSERT INTO users (email, password) VALUES (?, ?);`;

  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    connection.query(query, [req.body.email, hashedPass], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(400).send(err);
      }
      res.sendStatus(200);
    });
  });
});

// Login endpoint
app.post("/login", (req, res) => {
  const query = `SELECT name, password FROM users WHERE email=?;`;

  connection.query(query, [req.body.email], (err, result) => {
    if (err) return console.log(err);
    if (result.length === 0) {
      console.log("No such user");
      return res.sendStatus(404);
    }

    bcrypt.compare(req.body.password, result[0].password, function (err, validPass) {
      if (validPass) {
        return res.status(200).send([{ name: result[0].name }]);
      }
      if (!validPass) {
        return res.sendStatus(401);
      }
    });
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
