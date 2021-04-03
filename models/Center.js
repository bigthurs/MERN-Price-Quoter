const mongoose = require("mongoose");

const CenterSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  doctors: {
    type: Array,
    required: true,
  },
  patientTypes: {
    type: Array,
  },
});

module.exports = mongoose.model("center", CenterSchema);
