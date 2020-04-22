const express = require("express");
const router = express.Router();
const podcastController = require("../controllers/podcastController");
const ratingController = require("../controllers/ratingController");
const { catchErrors } = require("../handlers/errorHandlers");

// Do work here
router.get("/", podcastController.home);
router.post("/add", catchErrors(podcastController.createPodcast));

router.get("/rating", ratingController.rate);
router.post("/thankyou", catchErrors(ratingController.thankyou));

module.exports = router;
