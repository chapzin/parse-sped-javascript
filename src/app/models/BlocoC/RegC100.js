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
    type: String
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
  numDoc: {
    type: Number,
    required: true
  },
  chvNfe: {
    type: String
  },
  dtDoc: {
    type: String
  },
  dtES: {
    type: String
  },
  vlDoc: {
    type: Number
  },
  indPgto: {
    type: String
  },
  vlDesc: {
    type: String
  },
  vlAbatNt: {
    type: String
  },
  vlMerc: {
    type: String
  },
  indFrt: {
    type: String
  },
  vlFrt: {
    type: String
  },
  vlSeg: {
    type: String
  },
  vlOutDa: {
    type: String
  },
  vlBcIcms: {
    type: String
  },
  vlIcms: {
    type: String
  },
  vlBcIcmsSt: {
    type: String
  },
  vlIcmsSt: {
    type: String
  },
  vlIpi: {
    type: String
  },
  vlPis: {
    type: String
  },
  vlCofins: {
    type: String
  },
  vlPisSt: {
    type: String
  },
  vlCofinsSt: {
    type: String
  },
  reg0000: {
    type: Object,
    required: true
  }
});

module.exports = mongoose.model("regC100", RegSchema);
