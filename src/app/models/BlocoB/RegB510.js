const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  indProf: {
    type: String,
    required: true,
  },
  indEsc: {
    type: String,
    required: true,
  },
  indSoc: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('regB510', RegSchema)
