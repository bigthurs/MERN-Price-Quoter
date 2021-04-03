const express = require("express");
const router = express.Router();

const Center = require("../models/Center");

// @route   GET api/centers
// @desc    Get all centers
// @access  Public
router.get("/", async (req, res) => {
  try {
    const centers = await Center.find().sort({
      name: 1,
    });
    res.json(centers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/center
// @desc    Add new center
// @access  Public
router.post("/", (req, res) => {
  var data = req.body;

  data.forEach(async (item) => {
    const { name, doctors } = item;
    try {
      const newCenter = new Center({
        name,
        doctors,
      });

      const center = await newCenter.save();

      res.json(center);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });
});

module.exports = router;
