const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  vlRec: {
    type: String,
    required: true,
  },
  qtdProf: {
    type: String,
    required: true,
  },
  vlOr: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('regB500', RegSchema)
