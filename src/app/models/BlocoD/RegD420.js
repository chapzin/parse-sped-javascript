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
    type: String,
    required: true
  },
  vlIcms: {
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

module.exports = mongoose.model("regD420", RegSchema);
