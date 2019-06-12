const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  numItem: {
    type: String,
    required: true,
  },
  codItem: {
    type: String,
    required: true,
  },
  codClass: {
    type: String,
    required: true,
  },
  qtd: {
    type: String,
  },
  unid: {
    type: String,
  },
  vlItem: {
    type: String,
    required: true,
  },
  vlDesc: {
    type: String,
  },
  cstIcms: {
    type: String,
    required: true,
  },
  cfop: {
    type: String,
    required: true,
  },
  vlBcIcms: {
    type: String,
  },
  aliqIcms: {
    type: String,
  },
  vlIcms: {
    type: String,
  },
  vlBcIcmsSt: {
    type: String,
  },
  aliqSt: {
    type: String,
  },
  vlIcmsSt: {
    type: String,
  },
  indRec: {
    type: String,
    required: true,
  },
  codPart: {
    type: String,
  },
  vlPis: {
    type: String,
  },
  vlCofins: {
    type: String,
  },
  codCta: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("reg1510", RegSchema);
