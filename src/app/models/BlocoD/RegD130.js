const mongoose = require("mongoose");

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
  indFrtRed: {
    type: String,
    required: true,
  },
  codMunOrig: {
    type: String,
    required: true,
  },
  codMunDest: {
    type: String,
    required: true,
  },
  veicId: {
    type: String,
  },
  vlLiqFrt: {
    type: String,
    required: true,
  },
  vlSecCat: {
    type: String,
  },
  vlDesp: {
    type: String,
  },
  vlPedg: {
    type: String,
  },
  vlOut: {
    type: String,
  },
  vlFrt: {
    type: String,
    required: true,
  },
  ufId: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regD130", RegSchema);
