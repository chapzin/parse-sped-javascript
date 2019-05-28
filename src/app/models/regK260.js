const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codOpOs: {
    type: String,
    required: true,
  },
  codItem: {
    type: String,
    required: true,
  },
  dtSaida: {
    type: String,
    required: true,
  },
  qtdSaida: {
    type: String,
    required: true,
  },
  dtRet: {
    type: String,
    required: true,
  },
  qtdRet: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regK260", RegSchema);
