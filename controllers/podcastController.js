const mongoose = require("mongoose");

const Podcast = mongoose.model("Podcast");

exports.createPodcast = async (req, res) => {
  const podcast = new Podcast(req.body);
  await podcast.save();
  res.render("success", { title: podcast.title });
};

exports.home = (req, res) => {
  return res.render("create", { title: "Create Podcast" });
};
