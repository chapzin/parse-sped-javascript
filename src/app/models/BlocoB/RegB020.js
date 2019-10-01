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
    type: String,
    required: true
  },
  chvNfe: {
    type: String
  },
  dtDoc: {
    type: String,
    required: true
  },
  codMunServ: {
    type: String,
    required: true
  },
  vlCont: {
    type: String,
    required: true
  },
  vlMatTerc: {
    type: String,
    required: true
  },
  vlSub: {
    type: String,
    required: true
  },
  vlIsntIss: {
    type: String,
    required: true
  },
  vlDebBc: {
    type: String,
    required: true
  },
  vlBcIss: {
    type: String,
    required: true
  },
  vlBcIssRt: {
    type: String,
    required: true
  },
  vlIssRt: {
    type: String,
    required: true
  },
  codInfObs: {
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

module.exports = mongoose.model("regB020", RegSchema);
