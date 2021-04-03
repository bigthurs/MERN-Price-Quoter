const mongoose = require("mongoose");

const PricingSchema = mongoose.Schema({
  center_id: {
    type: String,
    required: true,
  },
  Endometrin: {
    type: Number,
  },
  Omnitrope: {
    type: Number,
  },
});

module.exports = mongoose.model("pricing", PricingSchema, "pricing");
