const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  dtRegistro: {
    type: String,
    required: true,
  },
  qtdMoid: {
    type: String,
  },
  estqIni: {
    type: String,
    required: true,
  },
  qtdProduz: {
    type: String,
  },
  entAnidHid: {
    type: String,
  },
  outrEntr: {
    type: String,
  },
  perda: {
    type: String,
  },
  cons: {
    type: String,
  },
  saiAniHid: {
    type: String,
  },
  saidas: {
    type: String,
    required: true,
  },
  estqFin: {
    type: String,
    required: true,
  },
  estqIniMel: {
    type: String,
  },
  prodDiaMel: {
    type: String,
  },
  utilMel: {
    type: String,
  },
  prodAlcMel: {
    type: String,
  },
  obs: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("reg1391", RegSchema);
