const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codVer: {
    type: String,
    required: true,
  },
  codFin: {
    type: String,
    required: true,
  },
  dtIni: {
    type: String,
    required: true,
  },
  dtFin: {
    type: String,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
  },
  cpf: {
    type: String,
  },
  uf: {
    type: String,
    required: true,
  },
  ie: {
    type: String,
  },
  codMun: {
    type: Number,
    required: true,
  },
  im: {
    type: String,
  },
  suframa: {
    type: String,
  },
  indPerfil: {
    type: String,
    required: true,
  },
  indAtiv: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('reg0000', RegSchema)
