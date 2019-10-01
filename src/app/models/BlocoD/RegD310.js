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
  vlBcIcms: {
    type: String
  },
  vlIcms: {
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

module.exports = mongoose.model("regD310", RegSchema);
