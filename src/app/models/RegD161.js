const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  indCarga: {
    type: String,
    required: true,
  },
  cnpjCpfCol: {
    type: String,
  },
  ieCol: {
    type: String,
  },
  codMunCol: {
    type: String,
    required: true,
  },
  cnpjCpfEntg: {
    type: String,
  },
  ieEntg: {
    type: String,
  },
  codMunEntg: {
    type: String,
    required: true,
  },
  reg0000: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('regD160', RegSchema)
