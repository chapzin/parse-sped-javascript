const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  dtAlt: {
    type: String,
    required: true,
  },
  codNatCc: {
    type: String,
    required: true,
  },
  indCta: {
    type: String,
    required: true,
  },
  nivel: {
    type: String,
    required: true,
  },
  codCta: {
    type: String,
    required: true,
  },
  nomeCta: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('reg0500', RegSchema)
