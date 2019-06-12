const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codOr: {
    type: String,
    required: true,
  },
  vlOr: {
    type: String,
    required: true,
  },
  dtVcto: {
    type: String,
    required: true,
  },
  codRec: {
    type: String,
    required: true,
  },
  numProc: {
    type: String,
  },
  indProc: {
    type: String,
  },
  proc: {
    type: String,
  },
  txtCompl: {
    type: String,
  },
  mesRef: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regE250", RegSchema);
