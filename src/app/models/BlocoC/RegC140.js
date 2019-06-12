const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  indEmit: {
    type: String,
    required: true,
  },
  indTit: {
    type: String,
    required: true,
  },
  descTit: {
    type: String,
  },
  numTit: {
    type: String,
    required: true,
  },
  qtdParc: {
    type: String,
    required: true,
  },
  vlTit: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('regC140', RegSchema)
