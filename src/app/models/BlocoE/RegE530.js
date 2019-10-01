const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  indAj: {
    type: String,
    required: true
  },
  vlAj: {
    type: String,
    required: true
  },
  codAj: {
    type: String,
    required: true
  },
  indDoc: {
    type: String,
    required: true
  },
  numDoc: {
    type: String,
    required: true
  },
  descrAj: {
    type: String,
    required: true
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

module.exports = mongoose.model("regE530", RegSchema);
