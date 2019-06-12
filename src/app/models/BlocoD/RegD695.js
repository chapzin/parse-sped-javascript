const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codMod: {
    type: String,
    required: true,
  },
  ser: {
    type: String,
    required: true,
  },
  nroOrdIni: {
    type: String,
    required: true,
  },
  nroOrdFin: {
    type: String,
    required: true,
  },
  dtDocIni: {
    type: String,
    required: true,
  },
  dtDocFin: {
    type: String,
    required: true,
  },
  nomMest: {
    type: String,
    required: true,
  },
  chvCodDig: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regD695", RegSchema);
