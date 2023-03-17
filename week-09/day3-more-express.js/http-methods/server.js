const express = require('express');
const cors = require('cors'); // 1. import cors library.
// Make sure that you do an `npm install cors` for this to work

const app = express();
app.use(cors()); // 2. allowing Cross Origin requests ( a security feature)

app.get('/', (req, res) => {
  console.log(req.method, req.url);
  res.json('Hello World - GET response');
});

// HTTP Method used - POST
app.post('/', (req, res) => {
  console.log(req.method, req.url);
  res.json('Hello World - POST response. tHIS IS DIFFERENT from GET ');
});

// HTTP Method used - DELETE
app.delete('/', (req, res) => {
  console.log(req.method, req.url);
  res.json('Hello World - DELETE response');
});


// Make an API for a PUT request to /apples
app.put('/apples', (req, res) => {
  console.log(req.method, req.url);
  res.json('Here are some apples');
});

app.listen(4000);

// npm init -y | A new package.json is created and the folder that you're is now a node project
// npm install express cors <other_package_1> <other_package_2> <other_package_...>
// Add nodemon filename.js to the start script in package.json
// npm start - Make sure your server is kept running
