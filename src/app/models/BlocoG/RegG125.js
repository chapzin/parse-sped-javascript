const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  codIndBem: {
    type: String,
    required: true
  },
  dtMov: {
    type: String,
    required: true
  },
  tipoMov: {
    type: String,
    required: true
  },
  vlImobIcmsOp: {
    type: String,
    required: true
  },
  vlImobIcmsSt: {
    type: String,
    required: true
  },
  vlImobIcmsFrt: {
    type: String,
    required: true
  },
  vlImobIcmsDif: {
    type: String,
    required: true
  },
  numParc: {
    type: String,
    required: true
  },
  vlParcPass: {
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

module.exports = mongoose.model("regG125", RegSchema);
