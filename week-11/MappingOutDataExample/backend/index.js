const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
});

app.get("/", (req, res) => {
  res.send("Server connected!");
});

// Student Profiles endpoint
app.get("/students", (req, res) => {
  const query = `SELECT student_id, name, profile_pic FROM student;`;
  connection.query(query, (err, result) => {
    if (err) return console.log(err);
    console.log(result);
    res.send(result);
  });
});

// Specific student user data
app.get("/students/:id", (req, res) => {
  console.log(req.params);
  const query = `SELECT * FROM student WHERE student_id=${req.params.id};`;
  console.log(query);
  connection.query(query, (err, result) => {
    if (err) return console.log(err);
    console.log(result);
    res.send(result);
  });
});

// Login endpoint
app.post("/login", (req, res) => {
  // console.log(req.params);
  console.log("hey backend here");
  console.log(req.body.email, req.body.password);
  const query = `SELECT name FROM student WHERE password='${req.body.password}' and email = '${req.body.email}';`;
  console.log(query);
  connection.query(query, (err, result) => {
    if (err) return console.log(err);
    if (result.length === 0) {
      console.log("Wrong credentials!");
      return res.status(404).send(result);
    }
    res.status(200).send(result);
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
