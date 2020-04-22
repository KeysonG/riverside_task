const mongoose = require("mongoose");
const Rating = mongoose.model("Rating");

exports.rate = (req, res) => {
  return res.render("review");
};
  
exports.thankyou = async (req, res) => {
  const rating = new Rating(req.body);
  await rating.save()
  res.render("thankyou", { feedback: req.body.feedback });
};