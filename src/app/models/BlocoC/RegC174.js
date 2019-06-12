const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  indArm: {
    type: String,
    required: true,
  },
  numArm: {
    type: String,
    required: true,
  },
  descrCompl: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('regC174', RegSchema)
