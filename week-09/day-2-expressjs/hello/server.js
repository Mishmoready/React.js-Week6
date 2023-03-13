/*
const http = require('http');

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.write('Hello world');
    response.end();
  }
});

// Expose port 4000 so that we can send requests there
server.listen(4000);
*/

const express = require('express');
const app = express();

// Endpoint 1 - GET /
app.get('/', (request, response) => {
  console.log('This is calling a GET to / route');
  response.send('Hello World'); //  equivalent to the http write() & end().
});

// Endpoint 2 - GET /api/userList
app.get('/api/userList', (req, res) => {
  const userList = [
    { name: 'john', age: 27 },
    { name: 'Mary', age: 22 },
    { name: 'Ethan', age: 17 },
    { name: 'Joe', age: 53 },
    { name: 'Amelia', age: 87 },
    { name: 'Adam', age: 34 },
  ];
  res.json(userList);
});

// Endpoint 3 - GET /api/greet
// Hello Rob, thanks for visiting this URL 🖐️

// Expose port 4000 so that we can send requests there
app.listen(4000);
