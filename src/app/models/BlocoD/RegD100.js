const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  indOper: {
    type: String,
    required: true,
  },
  indEmit: {
    type: String,
    required: true,
  },
  codPart: {
    type: String,
    required: true,
  },
  codMod: {
    type: String,
    required: true,
  },
  codSit: {
    type: String,
    required: true,
  },
  ser: {
    type: String,
  },
  sub: {
    type: String,
  },
  numDoc: {
    type: String,
    required: true,
  },
  chvCte: {
    type: String,
  },
  dtDoc: {
    type: String,
    required: true,
  },
  dtAP: {
    type: String,
  },
  tpCte: {
    type: String,
  },
  chvCteRef: {
    type: String,
  },
  vlDoc: {
    type: String,
    required: true,
  },
  vlDesc: {
    type: String,
  },
  indFrt: {
    type: String,
  },
  vlServ: {
    type: String,
    required: true,
  },
  vlBcIcms: {
    type: String,
  },
  vlIcms: {
    type: String,
  },
  vlNt: {
    type: String,
  },
  codInf: {
    type: String,
  },
  codCta: {
    type: String,
  },
  codMunOrig: {
    type: String,
  },
  codMunDest: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regD100", RegSchema);
