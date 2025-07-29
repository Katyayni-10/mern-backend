const mongoose = require("mongoose");

const category = new mongoose.Schema({
  name: String,
  image: String,
  route: String,
});

module.exports = mongoose.model("category", CategorySchema);
