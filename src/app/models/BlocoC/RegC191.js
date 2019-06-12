const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  vlFcpOp: {
    type: String,
  },
  vlFcpSt: {
    type: String,
  },
  vlFcpRet: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('regC191', RegSchema)
