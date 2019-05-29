const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  vlTotTransfDebitosOa: {
    type: String,
    required: true,
  },
  vlTotAjDebitosOa: {
    type: String,
    required: true,
  },
  vlEstornosCredOa: {
    type: String,
    required: true,
  },
  vlTotTransfCreditosOa: {
    type: String,
    required: true,
  },
  vlTotAjCreditosOa: {
    type: String,
    required: true,
  },
  vlEstornosDebOa: {
    type: String,
    required: true,
  },
  vlSldCredorAntOa: {
    type: String,
    required: true,
  },
  vlSldApuradoOa: {
    type: String,
    required: true,
  },
  vlTotDed: {
    type: String,
    required: true,
  },
  vlIcmsRecolherOa: {
    type: String,
    required: true,
  },
  vlSldCredorTranspOa: {
    type: String,
    required: true,
  },
  debEspOa: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("reg1920", RegSchema);
