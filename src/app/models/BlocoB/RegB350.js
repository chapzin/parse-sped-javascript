const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  codCtd: {
    type: String,
    required: true
  },
  ctaIss: {
    type: String,
    required: true
  },
  ctaCosif: {
    type: String,
    required: true
  },
  qtdOcor: {
    type: String,
    required: true
  },
  codServ: {
    type: String,
    required: true
  },
  vlCont: {
    type: String,
    required: true
  },
  vlBcIss: {
    type: String,
    required: true
  },
  aliqIss: {
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

module.exports = mongoose.model("regB350", RegSchema);
