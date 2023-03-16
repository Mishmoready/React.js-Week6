const express = require('express');
const app = express();

// Adding the middleware to process the form data
app.use(express.urlencoded({ extended: true })); // puts form data in req.body so that it can be used later on in the /login endpoint

const users = [
  { email: 'sebin@mail.com', password: 'sebin' },
  { email: 'john@dvds.com', password: 'john123' },
];

app.post('/login', (req, res) => {
  console.log(req.body);
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].email === req.body.email &&
      users[i].password === req.body.password
    ) {
      // successfully login + redirect to the success page
      res.redirect(
        'http://127.0.0.1:3000/week-09/day-4-full-stack-app/forms-project/frontend/loggedin.html'
      );
    }
  }
  res.status(401).send('Email or password is incorrect');
});

app.listen(4000);
