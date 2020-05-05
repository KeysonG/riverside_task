const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now,
  },
  rating: Number,
  comment: String
});

module.exports = mongoose.model("Feedback", feedbackSchema);