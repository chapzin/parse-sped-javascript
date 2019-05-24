const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  indMov: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('regD001', RegSchema)
