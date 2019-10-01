const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  vlTotDebitos: {
    type: String,
    required: true
  },
  vlAjDebitos: {
    type: String,
    required: true
  },
  vlTotAjDebitos: {
    type: String,
    required: true
  },
  vlEstornosCred: {
    type: String,
    required: true
  },
  vlTotCreditos: {
    type: String,
    required: true
  },
  vlAjCreditos: {
    type: String,
    required: true
  },
  vlTotAjCreditos: {
    type: String,
    required: true
  },
  vlEstornoDeb: {
    type: String,
    required: true
  },
  vlSldCredorAnt: {
    type: String,
    required: true
  },
  vlSldApurado: {
    type: String,
    required: true
  },
  vlTotDed: {
    type: String,
    required: true
  },
  vlIcmsRecolher: {
    type: String,
    required: true
  },
  vlSldCredorTransportar: {
    type: String,
    required: true
  },
  debEsp: {
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

module.exports = mongoose.model("regE110", RegSchema);
