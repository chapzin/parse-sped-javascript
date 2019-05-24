const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codModUltE: {
    type: String,
    required: true,
  },
  numDocUltE: {
    type: String,
    required: true,
  },
  serUltE: {
    type: String,
    required: true,
  },
  dtUltE: {
    type: String,
    required: true,
  },
  codPartUltE: {
    type: String,
    required: true,
  },
  quantUltE: {
    type: String,
    required: true,
  },
  vlUnitUltE: {
    type: String,
    required: true,
  },
  chaveNfeUltE: {
    type: String,
    required: true,
  },
  numItemUltE: {
    type: String,
    required: true,
  },
  vlUnitBcIcmsUltE: {
    type: String,
    required: true,
  },
  AliqIcmsUltE: {
    type: String,
    required: true,
  },
  vlUnitLimiteBcIcmsUltE: {
    type: String,
    required: true,
  },
  vlUnitIcmsUltE: {
    type: String,
    required: true,
  },
  aliqStUltE: {
    type: String,
    required: true,
  },
  vlUnitRes: {
    type: String,
    required: true,
  },
  codRespRet: {
    type: String,
    required: true,
  },
  codMotRes: {
    type: String,
    required: true,
  },
  chaveNfeRet: {
    type: String,
    required: true,
  },
  codPartNfeRet: {
    type: String,
    required: true,
  },
  serNfeRet: {
    type: String,
    required: true,
  },
  numNfeRet: {
    type: String,
    required: true,
  },
  itemNfeRet: {
    type: String,
    required: true,
  },
  codDa: {
    type: String,
    required: true,
  },
  numDa: {
    type: String,
    required: true,
  },
  vlUnitResFcpSt: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('regC176', RegSchema)
