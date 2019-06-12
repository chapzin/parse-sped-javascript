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
  codMun: {
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
  qtdCons: {
    type: String,
    required: true,
  },
  qtdCanc: {
    type: String,
  },
  dtDoc: {
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
  cons: {
    type: String,
  },
  vlForn: {
    type: String,
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
  vlPis: {
    type: String,
  },
  vlCofins: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regC600", RegSchema);
