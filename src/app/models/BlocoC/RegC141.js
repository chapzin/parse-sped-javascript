const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  numParc: {
    type: String,
    required: true,
  },
  dtVcto: {
    type: String,
    required: true,
  },
  vlParc: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('regC141', RegSchema)
