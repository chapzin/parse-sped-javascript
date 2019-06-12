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
  vlServ: {
    type: String,
    required: true
  },
  qtdBilh: {
    type: String
  },
  vlBcIcms: {
    type: String
  },
  vlIcms: {
    type: String
  },
  reg0000: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("regD370", RegSchema);