const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  aliqImpBase: {
    type: String,
    required: true,
  },
  g310: {
    type: String,
    required: true,
  },
  g311: {
    type: String,
    required: true,
  },
  g312: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("reg1975", RegSchema);
