const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  numDa: {
    type: String,
    required: true,
  },
  numProc: {
    type: String,
    required: true,
  },
  indProc: {
    type: String,
    required: true,
  },
  proc: {
    type: String,
    required: true,
  },
  txtCompl: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regE312", RegSchema);
