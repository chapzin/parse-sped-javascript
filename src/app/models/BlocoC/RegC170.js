const mongoose = require('mongoose')

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
  descrCompl: {
    type: String,
  },
  qtd: {
    type: String,
    required: true,
  },
  unid: {
    type: String,
    required: true,
  },
  vlItem: {
    type: String,
    required: true,
  },
  vlDesc: {
    type: String,
  },
  indMov: {
    type: String,
    required: true,
  },
  cstIcms: {
    type: String,
    required: true,
  },
  cfop: {
    type: String,
    required: true,
  },
  codNat: {
    type: String,
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
  indApur: {
    type: String,
  },
  cstIpi: {
    type: String,
  },
  codEnq: {
    type: String,
  },
  vlBcIpi: {
    type: String,
  },
  aliqIpi: {
    type: String,
  },
  vlIpi: {
    type: String,
  },
  cstPis: {
    type: String,
  },
  vlBcPis: {
    type: String,
  },
  aliqPis: {
    type: String,
  },
  quantBcPis: {
    type: String,
  },
  aliqPis2: {
    type: String,
  },
  vlPis: {
    type: String,
  },
  cstCofins: {
    type: String,
  },
  vlBcCofins: {
    type: String,
  },
  aliqCofins: {
    type: String,
  },
  quantBcCofins: {
    type: String,
  },
  aliqCofins2: {
    type: String,
  },
  vlCofins: {
    type: String,
  },
  codCta: {
    type: String,
  },
  vlAbatNt: {
    type: String,
  },
  chaveNfe: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('regC170', RegSchema)
