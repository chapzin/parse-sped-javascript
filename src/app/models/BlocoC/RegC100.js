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
  codDest: {
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
    type: Date
  },
  dtES: {
    type: Date
  },
  vlDoc: {
    type: Number
  },
  indPgto: {
    type: String
  },
  vlDesc: {
    type: Number
  },
  vlAbatNt: {
    type: Number
  },
  vlMerc: {
    type: Number
  },
  indFrt: {
    type: String
  },
  vlFrt: {
    type: Number
  },
  vlSeg: {
    type: Number
  },
  vlOutDa: {
    type: Number
  },
  vlBcIcms: {
    type: Number
  },
  vlIcms: {
    type: Number
  },
  vlBcIcmsSt: {
    type: Number
  },
  vlIcmsSt: {
    type: Number
  },
  vlIpi: {
    type: Number
  },
  vlPis: {
    type: Number
  },
  vlCofins: {
    type: Number
  },
  vlPisSt: {
    type: Number
  },
  vlCofinsSt: {
    type: Number
  },
  flag: {
    type: String,
    required: true
  },
  reg0000: {
    type: Object
  }
});

module.exports = mongoose.model("regC100", RegSchema);
