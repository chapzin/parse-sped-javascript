const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  codDa: {
    type: String,
    required: true
  },
  uf: {
    type: String,
    required: true
  },
  numDa: {
    type: String
  },
  codAut: {
    type: String
  },
  vlDa: {
    type: String,
    required: true
  },
  dtVcto: {
    type: String,
    required: true
  },
  dtPgto: {
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

module.exports = mongoose.model("regC112", RegSchema);
