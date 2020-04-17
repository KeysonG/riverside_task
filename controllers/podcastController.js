const mongoose = require("mongoose");

const Podcast = mongoose.model("Podcast");

exports.createPodcast = async (req, res) => {
  const podcast = await new Podcast(req.body);
  res.render("success", { title: podcast.title });
};

exports.home = (req, res) => {
  return res.render("create", { title: "Create Podcast" });
};
