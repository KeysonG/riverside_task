const mongoose = require("mongoose");
require("../models/Feedback");

const Feedback = mongoose.model("Feedback");

exports.createFeedback = async (req, res) => {
  const feedback = new Feedback(req.body);
  await feedback.save();
  res.send('{"msg": "success"}');
};
