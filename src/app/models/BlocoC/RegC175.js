const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  indVeicOper: {
    type: String,
    required: true
  },
  cnpj: {
    type: String
  },
  uf: {
    type: String
  },
  chassiVeic: {
    type: String,
    required: true
  },
  flag: {
    type: String,
    required: true
  },
  reg0000: {
    reg0000: Object,
    required: true
  }
});

module.exports = mongoose.model("regC175", RegSchema);
