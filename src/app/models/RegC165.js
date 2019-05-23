const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codPart: {
    type: String,
  },
  veicId: {
    type: String,
    required: true,
  },
  codAut: {
    type: String,
  },
  nrPasse: {
    type: String,
  },
  hora: {
    type: String,
    required: true,
  },
  temper: {
    type: String,
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
  momMot: {
    type: String,
  },
  cpf: {
    type: String,
  },
  ufId: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('regC165', RegSchema)
