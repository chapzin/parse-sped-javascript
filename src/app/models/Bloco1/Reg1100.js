const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  indDoc: {
    type: String,
    required: true
  },
  nroDe: {
    type: String,
    required: true
  },
  dtDe: {
    type: String,
    required: true
  },
  natExp: {
    type: String,
    required: true
  },
  nroRe: {
    type: String
  },
  dtRe: {
    type: String
  },
  chcEmb: {
    type: String
  },
  dtChc: {
    type: String
  },
  dtAvb: {
    type: String,
    required: true
  },
  tpChc: {
    type: String,
    required: true
  },
  pais: {
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

module.exports = mongoose.model("reg1100", RegSchema);
