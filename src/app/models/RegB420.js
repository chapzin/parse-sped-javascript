const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  vlCont: {
    type: String,
    required: true,
  },
  vlBcIss: {
    type: String,
    required: true,
  },
  aliqIss: {
    type: String,
    required: true,
  },
  vlIsntIss: {
    type: String,
    required: true,
  },
  vlIss: {
    type: String,
    required: true,
  },
  codServ: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('regB420', RegSchema)
