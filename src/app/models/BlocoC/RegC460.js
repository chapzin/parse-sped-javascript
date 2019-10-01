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
  codSit: {
    type: String,
    required: true
  },
  numDoc: {
    type: String,
    required: true
  },
  dtDoc: {
    type: String,
    required: true
  },
  vlDoc: {
    type: String,
    required: true
  },
  vlPis: {
    type: String
  },
  vlCofins: {
    type: String
  },
  cpfCnpj: {
    type: String
  },
  nomAdq: {
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

module.exports = mongoose.model("regC460", RegSchema);
