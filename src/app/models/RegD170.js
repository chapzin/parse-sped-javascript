const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codPartConsg: {
    type: String,
  },
  codPartRed: {
    type: String,
  },
  codMunOrig: {
    type: String,
    required: true,
  },
  codMunDest: {
    type: String,
    required: true,
  },
  otm: {
    type: String,
    required: true,
  },
  indNatFrt: {
    type: String,
    required: true,
  },
  vlLiqFrt: {
    type: String,
    required: true,
  },
  vlGris: {
    type: String,
  },
  vlPdg: {
    type: String,
  },
  vlOut: {
    type: String,
  },
  vlFrt: {
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

module.exports = mongoose.model('regD170', RegSchema)
