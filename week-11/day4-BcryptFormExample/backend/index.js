const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
app.use(express.json());
app.use(cors());

// To test this server out on your end, please create a new table called 'users' with id, name, email, and password fields.
// Alternatively, execute the attached SQL script.
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST, // localhost
  user: process.env.MYSQL_USER, // root
  password: process.env.MYSQL_PASS, // your root password!
  database: process.env.MYSQL_DATABASE, // your database schema name (mine was called bcrypt)
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Root endpoint
app.get("/", (req, res) => {
  res.send("Server connected");
});

// Signup endpoint
app.post("/signup", (req, res) => {
  const query = `INSERT INTO users (email, password) VALUES (?, ?);`;

  // Hash the user's entered in password and then insert it into the database
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    pool.execute(query, [req.body.email, hashedPass], (err, result) => {
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

  // Run a new query
  pool.execute(query, [req.body.email], (err, result) => {
    if (err) return console.log(err);
    if (result.length === 0) {
      console.log("No such user");
      return res.sendStatus(404);
    }

    // Check if the user's entered in password and the bcrypt hash in the database match or not
    bcrypt.compare(req.body.password, result[0].password, function (err, validPass) {
      if (validPass) {
        return res.status(200).send([{ name: result[0].name }]); // In this example, I'm sending back the user's name
      }
      if (!validPass) {
        return res.sendStatus(401);
      }
    });
  });
});

const PORT = process.env.PORT; // mine was 4000
app.listen(PORT, (err) => {
  if (err) console.log(err);
  else {
    console.log(`Server Connected! Listening at http://localhost:${PORT}`);
  }
});
