const mongoose = require("mongoose");

const podcastSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now,
  },
  title: String,
});

module.exports = mongoose.model("Podcast", podcastSchema);
