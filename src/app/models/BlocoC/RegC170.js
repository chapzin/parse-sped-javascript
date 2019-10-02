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
  descrCompl: {
    type: String
  },
  qtd: {
    type: Number,
    required: true
  },
  unid: {
    type: String,
    required: true
  },
  vlItem: {
    type: Number,
    required: true
  },
  vlDesc: {
    type: Number
  },
  indMov: {
    type: String,
    required: true
  },
  cstIcms: {
    type: String,
    required: true
  },
  cfop: {
    type: String,
    required: true
  },
  codNat: {
    type: String
  },
  vlBcIcms: {
    type: Number
  },
  aliqIcms: {
    type: Number
  },
  vlIcms: {
    type: Number
  },
  vlBcIcmsSt: {
    type: Number
  },
  aliqSt: {
    type: Number
  },
  vlIcmsSt: {
    type: Number
  },
  indApur: {
    type: String
  },
  cstIpi: {
    type: String
  },
  codEnq: {
    type: String
  },
  vlBcIpi: {
    type: Number
  },
  aliqIpi: {
    type: Number
  },
  vlIpi: {
    type: Number
  },
  cstPis: {
    type: String
  },
  vlBcPis: {
    type: Number
  },
  aliqPis: {
    type: Number
  },
  quantBcPis: {
    type: Number
  },
  aliqPis2: {
    type: Number
  },
  vlPis: {
    type: Number
  },
  cstCofins: {
    type: String
  },
  vlBcCofins: {
    type: Number
  },
  aliqCofins: {
    type: Number
  },
  quantBcCofins: {
    type: Number
  },
  aliqCofins2: {
    type: Number
  },
  vlCofins: {
    type: Number
  },
  codCta: {
    type: String
  },
  vlAbatNt: {
    type: Number
  },
  flag: {
    type: String,
    required: true
  },
  regC100: {
    type: Object,
    required: true
  },
  reg0000: {
    type: Object,
    required: true
  }
});

module.exports = mongoose.model("regC170", RegSchema);
