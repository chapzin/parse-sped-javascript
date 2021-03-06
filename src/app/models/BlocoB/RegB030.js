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
  qtdCanc: {
    type: String,
    required: true
  },
  vlCont: {
    type: String,
    required: true
  },
  vlIsntIss: {
    type: String,
    required: true
  },
  vlBcIss: {
    type: String,
    required: true
  },
  vlIss: {
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

module.exports = mongoose.model("regB030", RegSchema);
