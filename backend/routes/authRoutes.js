const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {
  res.json({
    success: true,
    message: "User Registered Successfully"
  });
});

router.post("/login", (req, res) => {
  res.json({
    success: true,
    message: "Login Successful"
  });
});

module.exports = router;
