const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  codIndBem: {
    type: String,
    required: true
  },
  identMerc: {
    type: String,
    required: true
  },
  descrItem: {
    type: String,
    required: true
  },
  codPrnc: {
    type: String
  },
  codCta: {
    type: String,
    required: true
  },
  nrParc: {
    type: String
  },
  flag: {
    type: String,
    required: true
  },
  reg0000: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("reg0300", RegSchema);
