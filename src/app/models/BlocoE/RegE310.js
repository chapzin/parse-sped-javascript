const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  indMovDifal: {
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
  vlTotDebFcp: {
    type: String,
    required: true
  },
  vlTotCreditosDifal: {
    type: String,
    required: true
  },
  vlTotCredFcp: {
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
  vlRecol: {
    type: String,
    required: true
  },
  vlSldCredTransportar: {
    type: String,
    required: true
  },
  debEspDifal: {
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
