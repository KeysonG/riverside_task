const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  created: {
      type: Date,
      default: Date.now,
  },
  rating: {
      type: Number,
  },
  feedback: String,
});
  
module.exports = mongoose.model("Rating", ratingSchema);
