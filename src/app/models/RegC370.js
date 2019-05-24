const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  numItem: {
    type: String,
    required: true,
  },
  codItem: {
    type: String,
    required: true,
  },
  qtd: {
    type: String,
    required: true,
  },
  unid: {
    type: String,
    required: true,
  },
  vlItem: {
    type: String,
    required: true,
  },
  vlDesc: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('regC370', RegSchema)
