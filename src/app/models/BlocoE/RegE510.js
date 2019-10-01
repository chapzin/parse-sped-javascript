const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  cfop: {
    type: String,
    required: true
  },
  cstIpi: {
    type: String,
    required: true
  },
  vlContIpi: {
    type: String,
    required: true
  },
  vlBcIpi: {
    type: String,
    required: true
  },
  vlIpi: {
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

module.exports = mongoose.model("regE510", RegSchema);
