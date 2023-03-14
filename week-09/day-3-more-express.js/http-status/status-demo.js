const express = require('express');
const cors = require('cors'); // 1. import cors library.
// Make sure that you do an `npm install cors` for this to work

const app = express();
app.use(cors()); // 2. allowing Cross Origin requests ( a security feature)

app.get('/hello', (req, res) => {
  console.log('I have a GET request at /hello');
  console.log(req.url);
  res.json('My backend is great');
});

app.get('/hi', (req, res) => {
  // Request is the HTTP request. It gives us all the request information, including the request parameters, the headers, the body of the request, and more. Everything from the client making the request is here., ie everything from the browser
  console.log(req.method, req.url, new Date().toISOString());
  // Response is the HTTP response object that we’ll send to the client.
  res.json('My backend is great');
});

app.get('/helloStatus', (req, res) => {
  // Response is the HTTP response object that we’ll send to the client.
  // res.json('My backend is great'); // res.send()
  res.status(302).json("I don't understand you"); // res.send()
});

app.get('/helloStatusAgain', (req, res) => {
  // Response is the HTTP response object that we’ll send to the client.
  // res.json('My backend is great'); // res.send()
  res.status(401); //ignored
  res.status(200); //ignored
  res.status(201); //ignored
  res.status(301); //ignored
  res.status(400); // The last one would be the one sent back
  res.json("I don't understand you again"); // res.send()
});

app.listen(4000);

// npm init -y
// npm install express cors
// Add nodemon filename.js to the start script in package.json
// npm start - Make sure your server is kept running
