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
  codCons: {
    type: String,
    required: true,
  },
  numDoc: {
    type: String,
    required: true,
  },
  dtDoc: {
    type: String,
    required: true,
  },
  dtES: {
    type: String,
    required: true,
  },
  vlDoc: {
    type: String,
    required: true,
  },
  vlDesc: {
    type: String,
  },
  vlForn: {
    type: String,
    required: true,
  },
  vlServNt: {
    type: String,
  },
  vlTerc: {
    type: String,
  },
  vlDa: {
    type: String,
  },
  vlBcIcms: {
    type: String,
  },
  vlIcms: {
    type: String,
  },
  vlBcIcmsSt: {
    type: String,
  },
  vlIcmsSt: {
    type: String,
  },
  codInf: {
    type: String,
  },
  vlPis: {
    type: String,
  },
  vlCofins: {
    type: String,
  },
  tpLigacao: {
    type: String,
  },
  codGrupoTensao: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("reg1500", RegSchema);
