const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codPart: {
    type: String,
    required: true,
  },
  veicId: {
    type: String,
    required: true,
  },
  qtdVol: {
    type: String,
    required: true,
  },
  pesoBrt: {
    type: String,
    required: true,
  },
  pesoLiq: {
    type: String,
    required: true,
  },
  ufId: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})
module.exports = mongoose.model('regC160', RegSchema)
