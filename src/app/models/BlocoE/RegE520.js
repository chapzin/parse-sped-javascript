const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  vlSdAntIpi: {
    type: String,
    required: true
  },
  vlDebIpi: {
    type: String,
    required: true
  },
  vlCredIpi: {
    type: String,
    required: true
  },
  vlOdIpi: {
    type: String,
    required: true
  },
  vlOcIpi: {
    type: String,
    required: true
  },
  vlScIpi: {
    type: String,
    required: true
  },
  vlSdIpi: {
    type: String,
    required: true
  },
  flag: {
    type: String,
    required: true
  },
  reg0000: {
    type: Object,
    required: true
  }
});

module.exports = mongoose.model("regE520", RegSchema);
