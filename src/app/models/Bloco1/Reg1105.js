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
  serie: {
    type: String
  },
  numDoc: {
    type: String,
    required: true
  },
  chvNfe: {
    type: String
  },
  dtDoc: {
    type: String,
    required: true
  },
  codItem: {
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

module.exports = mongoose.model("reg1105", RegSchema);
