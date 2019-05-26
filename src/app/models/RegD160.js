const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  despacho: {
    type: String,
  },
  cnpjCpfRem: {
    type: String,
  },
  ieRem: {
    type: String,
  },
  codMunOri: {
    type: String,
    required: true,
  },
  cnpjCpfDest: {
    type: String,
  },
  ieDest: {
    type: String,
  },
  codMunDest: {
    type: String,
    required: true,
  },
  reg0000: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('regD160', RegSchema)
