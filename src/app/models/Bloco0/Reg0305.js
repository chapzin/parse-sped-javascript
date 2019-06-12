const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codCcus: {
    type: String,
    required: true,
  },
  func: {
    type: String,
    required: true,
  },
  vidaUtil: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('reg0305', RegSchema)
