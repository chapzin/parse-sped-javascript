const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  numDa: {
    type: String
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
  txtCompl: {
    type: String
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

module.exports = mongoose.model("regE112", RegSchema);
