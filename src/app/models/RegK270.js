const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  dtIniAp: {
    type: String,
  },
  dtFinAp: {
    type: String,
  },
  codOpOs: {
    type: String,
  },
  codItem: {
    type: String,
    required: true,
  },
  qtdCorPos: {
    type: String,
  },
  qtdCorNeg: {
    type: String,
  },
  Origem: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regK270", RegSchema);
