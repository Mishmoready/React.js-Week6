const express = require("express");
const { pool } = require("../db/db-config");
const router = express.Router();

// Students Endpoint
router.get("/api/students", (req, res) => {
  console.log("/api/STUDENTS ENDPOINT was hit! 🙌");
  pool.query("SELECT * FROM team_mate", function (err, result) {
    if (err) return console.log(err);
    res.send(result);
  });
});

module.exports = router;
