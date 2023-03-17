const express = require('express');
const app = express();

console.log('This is the cat dog example');

// Endpoint 1 - /api/cat
// GETs me a picture of a cat when I call http://localhost:4000/api/cat
app.get('/api/cat', (req, res) => {
  res.send(`
  <img src="https://static.fundacion-affinity.org/cdn/farfuture/xFsdVk-9Vi8ifllknxGrwV-ul0WVSmjXl7DSObD4iLU/mtime:1644939075/sites/default/files/los-10-sonidos-principales-del-gato-fa.jpg" width="100%">
  `);
});

// Endpoint 2 - /api/dog
// GETs me a picture of a dog
app.get('/api/dog', (req, res) => {
  // res.setHeader('Content-Type', 'text/html'); => can be skipped.
  // send does that for us, so we don't need to do that ourself
  res.send(`
  <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" width="100%">
  `);
});

// Endpoint 3 - /api/dinosaur
// GETs me a picture of a dinosaur
app.get('/api/dinosaur', (req, res) => {
  res.send(`
<img src="https://i.natgeofe.com/n/d4492040-e42e-4c0b-9604-3b1ddea67f88/FInal-Submission_NJG_square.jpg" width="100%">
`);
});
app.listen(4000);
