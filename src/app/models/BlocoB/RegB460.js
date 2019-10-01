const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  indDed: {
    type: String,
    required: true
  },
  vlDed: {
    type: String,
    required: true
  },
  numProc: {
    type: String
  },
  indProc: {
    type: String
  },
  proc: {
    type: String
  },
  codInfObs: {
    type: String,
    required: true
  },
  indObr: {
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

module.exports = mongoose.model("regB460", RegSchema);
