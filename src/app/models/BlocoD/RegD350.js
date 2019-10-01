const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  codMod: {
    type: String,
    required: true
  },
  ecfMod: {
    type: String,
    required: true
  },
  ecfFab: {
    type: String,
    required: true
  },
  ecfFab: {
    type: String,
    required: true
  },
  ecfCx: {
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

module.exports = mongoose.model("regD350", RegSchema);
