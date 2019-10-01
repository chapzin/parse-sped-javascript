const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  numItem: {
    type: String,
    required: true
  },
  codItem: {
    type: String,
    required: true
  },
  codClass: {
    type: String,
    required: true
  },
  qtd: {
    type: String,
    required: true
  },
  unid: {
    type: String,
    required: true
  },
  vlItem: {
    type: String,
    required: true
  },
  vlDesc: {
    type: String
  },
  cstIcms: {
    type: String,
    required: true
  },
  cfop: {
    type: String,
    required: true
  },
  vlBcIcms: {
    type: String
  },
  aliqIcms: {
    type: String
  },
  vlIcms: {
    type: String
  },
  vlBcIcmsUf: {
    type: String
  },
  vlIcmsUf: {
    type: String
  },
  indRec: {
    type: String,
    required: true
  },
  codPart: {
    type: String
  },
  vlPis: {
    type: String
  },
  vlCofins: {
    type: String
  },
  codCta: {
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

module.exports = mongoose.model("regD510", RegSchema);
