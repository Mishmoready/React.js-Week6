const express = require("express");
const { pool } = require("../db/db-config");
const router = express.Router();

// Authentication Login Endpoint
router.get("/api/authentication/login", (req, res) => {
  console.log("/api/authentication/LOGIN ENDPOINT was hit! 🔓");
  res.send();
});

// Authentication Signup Endpoint
router.get("/api/authentication/signup", (req, res) => {
  console.log("/api/authentication/SIGNUP ENDPOINT was hit! 🔓");
});

module.exports = router;
