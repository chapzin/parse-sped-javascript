const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  vlBcIssqn: {
    type: String,
    required: true,
  },
  aliqIssqn: {
    type: String,
    required: true,
  },
  vlIssqn: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('regC172', RegSchema)
