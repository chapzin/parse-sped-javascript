const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  codObs: {
    type: String,
    required: true
  },
  txtCompl: {
    type: String
  },
  reg0000: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("regD195", RegSchema);
