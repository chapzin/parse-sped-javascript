const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  cstIcms: {
    type: String,
    required: true,
  },
  cfop: {
    type: String,
    required: true,
  },
  AliqIcms: {
    type: String,
  },
  vlOpr: {
    type: String,
    required: true,
  },
  vlBcIcms: {
    type: String,
    required: true,
  },
  vlIcms: {
    type: String,
    required: true,
  },
  vlRedBc: {
    type: String,
    required: true,
  },
  codObs: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regD190", RegSchema);
