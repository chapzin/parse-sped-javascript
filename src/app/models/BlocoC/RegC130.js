const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  vlServNt: {
    type: String,
    required: true,
  },
  vlBcIssqn: {
    type: String,
    required: true,
  },
  vlIssqn: {
    type: String,
  },
  vlBcIrrf: {
    type: String,
  },
  vlBcPrev: {
    type: String,
  },
  vlPrev: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('regC130', RegSchema)
