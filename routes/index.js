const express = require("express");
const router = express.Router();
const podcastController = require("../controllers/podcastController");
const feedbackController = require("../controllers/feedbackController");
const { catchErrors } = require("../handlers/errorHandlers");

// Do work here
router.get("/", podcastController.home);
router.post("/add", catchErrors(podcastController.createPodcast));
router.post("/feedback", feedbackController.createFeedback);

module.exports = router;
