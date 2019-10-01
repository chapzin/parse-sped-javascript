const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  numSeq: {
    type: String,
    required: true
  },
  indEmit: {
    type: String,
    required: true
  },
  cnpjCpfEmit: {
    type: String,
    required: true
  },
  ufEmit: {
    type: String,
    required: true
  },
  ieEmit: {
    type: String
  },
  codMunOrig: {
    type: String,
    required: true
  },
  cnpjCpfTom: {
    type: String,
    required: true
  },
  ufTom: {
    type: String,
    required: true
  },
  ieTom: {
    type: String
  },
  codMunDest: {
    type: String,
    required: true
  },
  codMod: {
    type: String,
    required: true
  },
  ser: {
    type: String,
    required: true
  },
  sub: {
    type: String
  },
  numDoc: {
    type: String,
    required: true
  },
  dtDoc: {
    type: String,
    required: true
  },
  vlDoc: {
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

module.exports = mongoose.model("regD180", RegSchema);
