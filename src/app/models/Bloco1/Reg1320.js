const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  numBico: {
    type: String,
    required: true,
  },
  nrInterv: {
    type: String,
  },
  motInterv: {
    type: String,
  },
  nomInterv: {
    type: String,
  },
  cnpjInterv: {
    type: String,
  },
  cpfInterv: {
    type: String,
  },
  valFecha: {
    type: String,
    required: true,
  },
  valAbert: {
    type: String,
    required: true,
  },
  volAferi: {
    type: String,
  },
  volVendas: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("reg1320", RegSchema);
