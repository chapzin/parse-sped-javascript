const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codObs: {
    type: String,
    required: true,
  },
  txt: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('reg0460', RegSchema)
