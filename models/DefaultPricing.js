const mongoose = require("mongoose");

const DefaultPricingSchema = mongoose.Schema({
  Endometrin: {
    type: Number,
    required: true,
  },
  Omnitrope: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model(
  "defaultpricing",
  DefaultPricingSchema,
  "defaultpricing"
);
