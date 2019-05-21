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
  nrCampo: {
    type: String,
    required: true,
  },
  contAnt: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('reg0175', RegSchema)
