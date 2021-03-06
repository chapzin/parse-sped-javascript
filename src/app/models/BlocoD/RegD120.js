const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  codMunOrig: {
    type: String,
    required: true
  },
  codMunDest: {
    type: String,
    required: true
  },
  veicId: {
    type: String
  },
  ufId: {
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

module.exports = mongoose.model("regD120", RegSchema);
