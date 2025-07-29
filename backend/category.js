const express = require("express");
const router = express.Router();
const Category = require("./category1"); // adjust path if needed

// GET /api/categories
router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
