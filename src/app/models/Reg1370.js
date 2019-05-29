const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  numBico: {
    type: String,
    required: true,
  },
  codItem: {
    type: String,
    required: true,
  },
  numTanque: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("reg1370", RegSchema);
