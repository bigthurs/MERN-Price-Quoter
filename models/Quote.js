const mongoose = require("mongoose");

const QuoteSchema = mongoose.Schema({
  center_id: {
    type: String,
    required: true,
  },
  center_name: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
  },
  total: {
    type: Number,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("quote", QuoteSchema);
