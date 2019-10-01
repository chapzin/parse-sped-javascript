const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  numItem: {
    type: String,
    required: true
  },
  codItem: {
    type: String,
    required: true
  },
  vlServ: {
    type: String,
    required: true
  },
  vlOut: {
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

module.exports = mongoose.model("regD110", RegSchema);
