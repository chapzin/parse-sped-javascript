const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  vlFcpUfDest: {
    type: String,
    required: true,
  },
  vlIcmsUfDest: {
    type: String,
    required: true,
  },
  vlIcmsUfRem: {
    type: String,
    required: true,
  },
  reg0000: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('regD101', RegSchema)
