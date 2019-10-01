const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  ser: {
    type: String
  },
  subSer: {
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
  cnpjCpf: {
    type: String
  },
  vlMerc: {
    type: String,
    required: true
  },
  vlDoc: {
    type: String,
    required: true
  },
  vlDesc: {
    type: String
  },
  vlPis: {
    type: String
  },
  vlCofins: {
    type: String
  },
  codCta: {
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

module.exports = mongoose.model("regC350", RegSchema);
