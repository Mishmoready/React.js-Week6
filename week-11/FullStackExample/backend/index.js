// Module Imports
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
require("dotenv").config();

// Express Middleware
app.use(cors());
app.use(express.json());

// The below code should work properly with your mission-x database setup (unless your field names are different to mine)
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get("/", (req, res) => {
  res.send("Server connected!");
});

// Student Profiles endpoint - GET list of students
app.get("/students", (req, res) => {
  const query = `SELECT student_id, name, profile_pic FROM student;`;
  console.log("STUDENTS endpoint request received. Query:", query);
  pool.query(query, (err, result) => {
    console.log("STUDENTS endpoint query **RESULT**:", result);
    if (err) return console.log(err);
    res.send(result);
  });
});

// Students endpoint - GET specific student user data (not currently implemented in the frontend example)
app.get("/students/:id", (req, res) => {
  const query = `SELECT * FROM student WHERE student_id = ?;`;
  console.log("STUDENT/:ID endpoint request received. Query:", query);
  pool.execute(query, [req.params.id], (err, result) => {
    console.log("STUDENT/:ID endpoint query **RESULT**:", result);
    if (err) return console.log(err);
    console.log(result);
    res.send(result);
  });
});

// Login endpoint - POST user credentials and validate them
app.post("/login", (req, res) => {
  let query;
  if (req.body.type === "student") {
    query = `SELECT name FROM student WHERE email = ? AND password = ?;`;
    console.log("LOGIN endpoint request received. Query:", query);
  } else {
    query = `SELECT name FROM teacher WHERE email = ? AND password = ?;`;
    console.log("LOGIN endpoint request received. Query:", query);
  }

  pool.execute(query, [req.body.email], (err, result) => {
    if (err) return console.log(err);
    console.log("LOGIN endpoint query **RESULT**:", result);
    if (result.length === 0) {
      console.log("Wrong credentials!");
      return res.status(404);
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
