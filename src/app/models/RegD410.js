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
  cstIcms: {
    type: String,
    required: true
  },
  cfop: {
    type: String,
    required: true
  },
  aliqIcms: {
    type: String
  },
  vlOpr: {
    type: String,
    required: true
  },
  vlDesc: {
    type: String
  },
  vlServ: {
    type: String,
    required: true
  },
  vlBcIcms: {
    type: String,
    required: true
  },
  vlIcms: {
    type: String,
    required: true
  },
  reg0000: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("regD410", RegSchema);
