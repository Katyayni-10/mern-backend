const express = require('express');
const router = express.Router();
const Product = require('.products'); // your Mongoose model

// GET /api/products?category=Mobiles
router.get('/', async (req, res) => {
  try {
    const category = req.query.category;
    const products = await Product.find({ category });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
