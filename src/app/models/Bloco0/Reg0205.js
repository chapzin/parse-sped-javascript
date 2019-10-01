const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  descrAntItem: {
    type: String
  },
  dtIni: {
    type: String,
    required: true
  },
  dtFim: {
    type: String,
    required: true
  },
  codAntItem: {
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

module.exports = mongoose.model("reg0205", RegSchema);
