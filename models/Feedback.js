const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now,
  },
  Rating: Number,
  Comment: String
});
module.exports = mongoose.model("Feedback", feedbackSchema);
