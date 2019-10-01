const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  codMunOrig: {
    type: String,
    required: true
  },
  codMunDest: {
    type: String,
    required: true
  },
  veicId: {
    type: String
  },
  viagem: {
    type: String
  },
  indTfa: {
    type: String,
    required: true
  },
  vlPesoTx: {
    type: String,
    required: true
  },
  vlTxTerr: {
    type: String
  },
  vlTxRed: {
    type: String
  },
  vlOut: {
    type: String
  },
  vlTxAdv: {
    type: String
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

module.exports = mongoose.model("regD150", RegSchema);
