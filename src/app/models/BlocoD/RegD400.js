const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codPart: {
    type: String,
    required: true,
  },
  codMod: {
    type: String,
    required: true,
  },
  codSit: {
    type: String,
  },
  ser: {
    type: String,
  },
  sub: {
    type: String,
  },
  numDoc: {
    type: String,
    required: true,
  },
  dtDoc: {
    type: String,
    required: true,
  },
  vlDoc: {
    type: String,
    required: true,
  },
  vlDesc: {
    type: String,
  },
  vlServ: {
    type: String,
    required: true,
  },
  vlBcIcms: {
    type: String,
  },
  vlIcms: {
    type: String,
  },
  vlPis: {
    type: String,
  },
  vlCofins: {
    type: String,
  },
  codCta: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regD400", RegSchema);
