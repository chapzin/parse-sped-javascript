const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  indMovFcpDifal: {
    type: String,
    required: true
  },
  vlSldCredAntDifal: {
    type: String,
    required: true
  },
  vlTotDebitosDifal: {
    type: String,
    required: true
  },
  vlOutDebDifal: {
    type: String,
    required: true
  },
  vlTotCreditosDifal: {
    type: String,
    required: true
  },
  vlOutCredDifal: {
    type: String,
    required: true
  },
  vlSldDevAntDifal: {
    type: String,
    required: true
  },
  vlDeducoesDifal: {
    type: String,
    required: true
  },
  vlRecolDifal: {
    type: String,
    required: true
  },
  vlSldCredTransportarDifal: {
    type: String,
    required: true
  },
  debEspDifal: {
    type: String,
    required: true
  },
  vlSldCredAntFcp: {
    type: String,
    required: true
  },
  vlTotDebFcp: {
    type: String,
    required: true
  },
  vlOutDebFcp: {
    type: String,
    required: true
  },
  vlTotCredFcp: {
    type: String,
    required: true
  },
  vlOutCredFcp: {
    type: String,
    required: true
  },
  vlSldDevAntFcp: {
    type: String,
    required: true
  },
  vlDeducoesFcp: {
    type: String,
    required: true
  },
  vlRecolFcp: {
    type: String,
    required: true
  },
  vlSldCredTransportarFcp: {
    type: String,
    required: true
  },
  debEspFcp: {
    type: String,
    required: true
  },
  flag: {
    type: String,
    required: true
  },
  reg0000: {
    type: Object,
    required: true
  }
});

module.exports = mongoose.model("regE310", RegSchema);
