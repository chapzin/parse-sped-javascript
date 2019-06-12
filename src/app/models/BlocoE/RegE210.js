const mongoose = require('mongoose')

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  indMovSt: {
    type: String,
    required: true,
  },
  vlSldCredAntSt: {
    type: String,
    required: true,
  },
  vlDevolSt: {
    type: String,
    required: true,
  },
  vlRessarcSt: {
    type: String,
    required: true,
  },
  vlOutCredSt: {
    type: String,
    required: true,
  },
  vlAjCreditosSt: {
    type: String,
    required: true,
  },
  vlRetencaoSt: {
    type: String,
    required: true,
  },
  vlOutDebSt: {
    type: String,
    required: true,
  },
  vlAjDebitosSt: {
    type: String,
    required: true,
  },
  vlSldDevAntSt: {
    type: String,
    required: true,
  },
  vlDeducoesSt: {
    type: String,
    required: true,
  },
  vlIcmsRecolSt: {
    type: String,
    required: true,
  },
  vlSldCredStTransportar: {
    type: String,
    required: true,
  },
  debEspSt: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
})

module.exports = mongoose.model('regE210', RegSchema)
