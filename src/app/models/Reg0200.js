const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codItem: {
    type: String,
    required: true,
  },
  descrItem: {
    type: String,
    required: true,
  },
  codBarra: {
    type: String,
  },
  codAntItem: {
    type: String,
  },
  unidInv: {
    type: String,
    required: true,
  },
  tipoItem: {
    type: String,
    required: true,
  },
  codNcm: {
    type: String,
  },
  exIpi: {
    type: String,
  },
  codGen: {
    type: String,
  },
  codLst: {
    type: String,
  },
  aliqIcms: {
    type: String,
  },
  cest: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('reg0200', RegSchema)
