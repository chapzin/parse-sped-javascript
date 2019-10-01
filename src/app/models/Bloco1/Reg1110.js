const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  codPart: {
    type: String,
    required: true
  },
  codMod: {
    type: String,
    required: true
  },
  ser: {
    type: String
  },
  numDoc: {
    type: String,
    required: true
  },
  dtDoc: {
    type: String,
    required: true
  },
  chvNfe: {
    type: String
  },
  nrMemo: {
    type: String,
    required: true
  },
  qtd: {
    type: String,
    required: true
  },
  unid: {
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

module.exports = mongoose.model("reg1110", RegSchema);
