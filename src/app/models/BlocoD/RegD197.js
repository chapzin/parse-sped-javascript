const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codAj: {
    type: String,
    required: true,
  },
  descrComplAj: {
    type: String,
  },
  codItem: {
    type: String,
  },
  vlBcIcms: {
    type: String,
  },
  aliqIcms: {
    type: String,
  },
  vlIcms: {
    type: String,
  },
  vlOutros: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regD197", RegSchema);
