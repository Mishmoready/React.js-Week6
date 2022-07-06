const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// mock db of users
let users = [
  { email: "rob@dvds.com", password: "rob123" },
  { email: "john@dvds.com", password: "john123" },
];

// Login endpoint
app.post("/login", (req, res) => {
  console.log(req.body);
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].email === req.body.email &&
      users[i].password === req.body.password
    ) {
      return res.redirect(
        "http://127.0.0.1:5500/Week%209%20Class%20Code%20Only/Personal%20Practice/LoginApp/frontend/loggedin.html"
      );
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
      return res.sendStatus(200);
    }
  }
  res.sendStatus(404);
});
app.listen(4000);
