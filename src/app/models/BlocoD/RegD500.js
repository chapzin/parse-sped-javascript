const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  indOper: {
    type: String,
    required: true
  },
  indEmit: {
    type: String,
    required: true
  },
  codPart: {
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
  ser: {
    type: String
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
  dtAp: {
    type: String
  },
  vlDoc: {
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
  vlServNt: {
    type: String,
    required: true
  },
  vlTerc: {
    type: String,
    required: true
  },
  vlDa: {
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
  codInf: {
    type: String
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
  tpAssinante: {
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

module.exports = mongoose.model("regD500", RegSchema);
