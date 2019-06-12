const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  ufSt: {
    type: String,
    required: true,
  },
  ieSt: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('reg0015', RegSchema)
