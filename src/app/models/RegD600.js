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
  codMun: {
    type: String,
    required: true
  },
  ser: {
    type: String,
    required: true
  },
  sub: {
    type: String
  },
  codCons: {
    type: String,
    required: true
  },
  qtdCons: {
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
  vlDesc: {
    type: String
  },
  vlServ: {
    type: String,
    required: true
  },
  vlServNt: {
    type: String
  },
  vlTerc: {
    type: String
  },
  vlDa: {
    type: String
  },
  vlBcIcms: {
    type: String,
    required: true
  },
  vlIcms: {
    type: String,
    required: true
  },
  vlPis: {
    type: String
  },
  vlCofins: {
    type: String
  },
  reg0000: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("regD600", RegSchema);
