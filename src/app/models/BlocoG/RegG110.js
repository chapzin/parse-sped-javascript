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
  dtFin: {
    type: String,
    required: true,
  },
  saldoInIcms: {
    type: String,
    required: true,
  },
  somParc: {
    type: String,
    required: true,
  },
  vlTribExp: {
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
  icmsAprop: {
    type: String,
    required: true,
  },
  somIcmsOc: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regG110", RegSchema);
