const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// The below code should work properly with your mission-x database setup (unless your field names are different to mine)
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
});

app.get("/", (req, res) => {
  res.send("Server connected!");
});

// Student Profiles endpoint - GET list of students
app.get("/students", (req, res) => {
  const query = `SELECT student_id, name, profile_pic FROM student;`;
  console.log("STUDENTS endpoint request received. Query:", query);
  connection.query(query, (err, result) => {
    console.log("STUDENTS endpoint query **RESULT**:", result);
    if (err) return console.log(err);
    res.send(result);
  });
});

// Students endpoint - GET specific student user data (not currently implemented in the frontend example)
app.get("/students/:id", (req, res) => {
  const query = `SELECT * FROM student WHERE student_id=${req.params.id};`;
  console.log("STUDENT/:ID endpoint request received. Query:", query);
  connection.query(query, (err, result) => {
    console.log("STUDENT/:ID endpoint query **RESULT**:", result);
    if (err) return console.log(err);
    console.log(result);
    res.send(result);
  });
});

// Login endpoint - POST user credentials and validate them
app.post("/login", (req, res) => {
  const query = `SELECT name FROM student WHERE password='${req.body.password}' and email = '${req.body.email}';`;
  console.log("LOGIN endpoint request received. Query:", query);
  connection.query(query, (err, result) => {
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
