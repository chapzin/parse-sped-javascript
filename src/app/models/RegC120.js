const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codDocImp: {
    type: String,
    required: true,
  },
  numDocImp: {
    type: String,
    required: true,
  },
  pisImp: {
    type: String,
  },
  cofinsImp: {
    type: String,
  },
  numAcdraw: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('regC120', RegSchema)
