const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Smartphone",
      price: 25000,
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
    },
  ]);
});

module.exports = router;