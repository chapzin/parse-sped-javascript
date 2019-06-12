const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codPartConsg: {
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
  indVeic: {
    type: String,
    required: true,
  },
  veicId: {
    type: String,
  },
  indNav: {
    type: String,
    required: true,
  },
  viagem: {
    type: String,
  },
  vlFrtLiq: {
    type: String,
    required: true,
  },
  vlDespPort: {
    type: String,
  },
  vlDespCarDest: {
    type: String,
  },
  vlOut: {
    type: String,
  },
  vlFrtBrt: {
    type: String,
    required: true,
  },
  vlFrtMm: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regD140", RegSchema);
