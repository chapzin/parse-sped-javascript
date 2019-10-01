const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  codItem: {
    type: String,
    required: true
  },
  unid: {
    type: String,
    required: true
  },
  qtd: {
    type: String,
    required: true
  },
  vlUnit: {
    type: String,
    required: true
  },
  vlItem: {
    type: String,
    required: true
  },
  indProp: {
    type: String,
    required: true
  },
  codPart: {
    type: String
  },
  txtCompl: {
    type: String
  },
  codCta: {
    type: String
  },
  vlItemIr: {
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

module.exports = mongoose.model("regH010", RegSchema);
