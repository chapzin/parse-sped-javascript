const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codMunOrig: {
    type: String,
    required: true,
  },
  codMunDest: {
    type: String,
    required: true,
  },
  veicId: {
    type: String,
  },
  ufId: {
    type: String,
  },
  reg0000: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('regD120', RegSchema)
