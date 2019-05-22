const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  indOper: {
    type: String,
    required: true,
  },
  codPart: {
    type: String,
    required: true,
  },
  vlContRt: {
    type: String,
    required: true,
  },
  vlBcIssRt: {
    type: String,
    required: true,
  },
  vlIssRt: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('regB440', RegSchema)
