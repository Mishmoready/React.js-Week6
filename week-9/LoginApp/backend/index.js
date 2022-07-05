const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded data (like HTML form submissions) into an object we can work with
app.use(express.json()); // for parsing the body of an HTTP request where it is in JSON format into an object we can work with
app.use(cors()); // We use this to accept HTTP requests from a specific recipient (or in this case with no further options defined, everybody)

// mock db of users
let users = [
  { email: "rob@dvds.com", password: "rob123" },
  { email: "john@dvds.com", password: "john123" },
];

// Login endpoint
app.post("/login", (req, res) => {
  // view the req.body object (our incoming data)
  console.log(req.body);
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].email === req.body.email &&
      users[i].password === req.body.password
    ) {
      return res.redirect(
        "http://127.0.0.1:5500/Week%209%20Class%20Code%20Only/Personal%20Practice/LoginApp/frontend/loggedin.html"
      ); // the return means we will exit the app.post callback function immediately
    }
  }
  res.status(404).send("email or password is incorrect");
});

// Login endpoint using the fetch() API
app.post("/loginWithFetch", (req, res) => {
  console.log(req.body);
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].email === req.body.email &&
      users[i].password === req.body.password
    ) {
      return res.sendStatus(200); // the return means we will exit the app.post callback function immediately
    }
  }
  res.sendStatus(404);
});
app.listen(4000, () => {
  console.log("Listening at http://localhost:4000/ 😎");
});
