const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codClass: {
    type: String,
  },
  codItem: {
    type: String,
    required: true,
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
  cstIcms: {
    type: String,
    required: true,
  },
  cfop: {
    type: String,
    required: true,
  },
  aliqIcms: {
    type: String,
  },
  vlBcIcms: {
    type: String,
  },
  vlIcms: {
    type: String,
  },
  vlBcIcmsSt: {
    type: String,
  },
  vlIcmsSt: {
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
})

module.exports = mongoose.model('regC610', RegSchema)
