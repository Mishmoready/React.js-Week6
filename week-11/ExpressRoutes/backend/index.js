// Module imports
const express = require("express");
require("dotenv").config();
const cors = require("cors");

// Let's refer to Express as app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Route Imports
const studentsRouter = require("./routes/studentsRoutes");
const authenticationRouter = require("./routes/authenticationRoutes");

// Routes
app.use(studentsRouter);
app.use(authenticationRouter);

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log(`It's working yo, at http://localhost:${PORT}`);
});
