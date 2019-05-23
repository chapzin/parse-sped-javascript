const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  idCarga: {
    type: String,
    required: true,
  },
  cnpjCol: {
    type: String,
  },
  ieCol: {
    type: String,
  },
  cpfCol: {
    type: String,
  },
  codMunCol: {
    type: String,
  },
  cnpjEntg: {
    type: String,
  },
  ieEntg: {
    type: String,
  },
  cpfEntg: {
    type: String,
  },
  codMunEntg: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('regC115', RegSchema)
