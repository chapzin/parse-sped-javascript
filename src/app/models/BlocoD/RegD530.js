const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  indServ: {
    type: String,
    required: true
  },
  dtIniServ: {
    type: String
  },
  dtFinServ: {
    type: String
  },
  perFiscal: {
    type: String,
    required: true
  },
  codArea: {
    type: String
  },
  terminal: {
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

module.exports = mongoose.model("regD530", RegSchema);
