const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
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
  vlBcIssqn: {
    type: String
  },
  aliqIssqn: {
    type: String
  },
  vlIssqn: {
    type: String
  },
  vlBcIcms: {
    type: String,
    required: true
  },
  vlIcms: {
    type: String,
    required: true
  },
  codObs: {
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

module.exports = mongoose.model("regD390", RegSchema);
