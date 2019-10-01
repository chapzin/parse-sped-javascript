const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
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
  numDocIni: {
    type: String,
    required: true
  },
  numDocFin: {
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
  vlPis: {
    type: String
  },
  vlCofins: {
    type: String
  },
  codCta: {
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

module.exports = mongoose.model("regC300", RegSchema);
