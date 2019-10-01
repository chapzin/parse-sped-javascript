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
  codSit: {
    type: String,
    required: true
  },
  numCfe: {
    type: String,
    required: true
  },
  dtDoc: {
    type: String,
    required: true
  },
  vlCfe: {
    type: String,
    required: true
  },
  vlPis: {
    type: String
  },
  vlCofins: {
    type: String
  },
  cnpjCpf: {
    type: String
  },
  nrSat: {
    type: String,
    required: true
  },
  chvCfe: {
    type: String,
    required: true
  },
  vlDesc: {
    type: String,
    required: true
  },
  vlMerc: {
    type: String,
    required: true
  },
  vlOutDa: {
    type: String,
    required: true
  },
  vlIcms: {
    type: String,
    required: true
  },
  vlPisSt: {
    type: String,
    required: true
  },
  vlCofinsSt: {
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

module.exports = mongoose.model("regC171", RegSchema);
