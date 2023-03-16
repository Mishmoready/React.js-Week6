const express = require('express');
const cors = require('cors');

const app = express();

// Adding the middleware to process the form data
app.use(express.urlencoded({ extended: true })); // puts form data in req.body so that it can be used later on in the /login endpoint
app.use(express.json()); // new API to get data processed as JSON
app.use(cors());

const users = [
  { email: 'sebin@mail.com', password: 'sebin' },
  { email: 'john@dvds.com', password: 'john123' },
];

// An API to handle login - When Data sent as - FORM DATA 
app.post('/login', (req, res) => {
  console.log(req.body);
  for (let i = 0; i < users.length; i++) { // array.find() or array.forEach to loop 
    if (users[i].email === req.body.email && users[i].password === req.body.password
    ) {
      // successfully login + redirect to the success page
      return res.redirect(
        'http://127.0.0.1:3000/week-09/day-4-full-stack-app/forms-project/frontend/loggedin.html'
      );
      // return res.send('You have logged in successfully')
    }
  }
  res.status(401).send('Email or password is incorrect'); // DID NOT WORK - WRONG PASSWORD/EMAIL
});

// Another API to handle login - When the data is being sent from the frontend as JSON
app.post('/loginWithFetch', (req, res) => {
  console.log('loginWithFetch is called', req.body);
  for (let i = 0; i < users.length; i++) {
    // if user is found => send a 200 response
    if (users[i].email === req.body.email && users[i].password === req.body.password
      ) {
        return res.sendStatus(200);
      }
  }
  // if no user found => send a 401 response
  res.sendStatus(401);
});

app.listen(4000); 
