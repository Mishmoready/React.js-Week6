// Module Imports
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

// Enable express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  // database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
}); 

// 1. Default endpoint
app.get('/', (req, res) => {
  res.send('Hey the backend is running.');
});

// 2..Student endpoint
app.get('/api/students', (req, res) => {
  pool.query('SELECT * FROM team_mate;', function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

/*

CREATE TABLE app_users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

INSERT INTO app_users (email, password)
VALUES
  ('johndoe@gmail.com', 'mypassword123'),
  ('janedoe@hotmail.com', 'supersecret'),
  ('bobsmith@yahoo.com', 'password1234');

SELECT * FROM learn_sql.app_users;

*/
// 2.1 Show all users endpoint
app.get('/api/showUsers', (req, res) => {
  pool.query('SELECT `email` FROM learn_sql.app_users;', function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// 2.2 - Check Password
app.post('/api/checkPassword', (req, res) => {
  const userPassword = req.body.password; // body of the API request
  pool.query("SELECT password from learn_sql.app_users where email = 'johndoe@gmail.com';", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      // check the query result with what the user has provided
      if(userPassword === result[0].password)
        res.status(200).send('All good, get in please')
        else {
        res.status(401).send('Please check your passwords')
      }
    }
  });
});

// 3. Login endpoint
// /api/authentication/login
// SELECT id from app_users where email = 'johndoe@gmail.com' AND password = 'mypassword123';


// 4. Signup endpoint
// /api/authentication/signup


// Check if your server is running fine
app.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use`);
    process.exit(1); // force stop the running node app
  } else {
    console.error(`Server error: ${error}`);
  }
});

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else console.log(`It's working yo, at http://localhost:${PORT}`);
});
