const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codMod: {
    type: String,
    required: true,
  },
  ser: {
    type: String,
    required: true,
  },
  sub: {
    type: String,
  },
  numDocIni: {
    type: String,
    required: true,
  },
  numDocFin: {
    type: String,
    required: true,
  },
  cstIcms: {
    type: String,
    required: true,
  },
  cfop: {
    type: String,
    required: true,
  },
  aliqIcms: {
    type: String,
  },
  dtDoc: {
    type: String,
    required: true,
  },
  vlOpr: {
    type: String,
    required: true,
  },
  vlDesc: {
    type: String,
  },
  vlServ: {
    type: String,
    required: true,
  },
  vlSeg: {
    type: String,
  },
  vlOutDesp: {
    type: String,
  },
  vlBcIcms: {
    type: String,
    required: true,
  },
  vlIcms: {
    type: String,
    required: true,
  },
  vlRedBc: {
    type: String,
    required: true,
  },
  codObs: {
    type: String,
  },
  codCta: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regD300", RegSchema);
