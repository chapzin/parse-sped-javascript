const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  dtIni: {
    type: String,
    required: true,
  },
  dtFim: {
    type: String,
    required: true,
  },
  numParc: {
    type: String,
    required: true,
  },
  vlParcPass: {
    type: String,
    required: true,
  },
  vlTribOc: {
    type: String,
    required: true,
  },
  vlTotal: {
    type: String,
    required: true,
  },
  indPerSai: {
    type: String,
    required: true,
  },
  vlParcAprop: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regG126", RegSchema);
