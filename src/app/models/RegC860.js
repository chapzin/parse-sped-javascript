const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codMod: {
    type: String,
    required: true,
  },
  nrSat: {
    type: String,
    required: true,
  },
  dtDoc: {
    type: String,
    required: true,
  },
  docIni: {
    type: String,
    required: true,
  },
  docFim: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('regC860', RegSchema)
