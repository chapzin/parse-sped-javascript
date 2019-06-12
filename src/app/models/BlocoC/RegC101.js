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
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('regC101', RegSchema)
