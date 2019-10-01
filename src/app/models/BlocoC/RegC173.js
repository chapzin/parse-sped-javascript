const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  loteMed: {
    type: String,
    required: true
  },
  qtdItem: {
    type: String,
    required: true
  },
  dtFab: {
    type: String,
    required: true
  },
  dtVal: {
    type: String,
    required: true
  },
  indMed: {
    type: String,
    required: true
  },
  tpProd: {
    type: String,
    required: true
  },
  vlTabMax: {
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

module.exports = mongoose.model("regC173", RegSchema);
