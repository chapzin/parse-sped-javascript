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
  nome: {
    type: String,
    required: true
  },
  codPais: {
    type: String,
    required: true
  },
  cnpj: {
    type: String
  },
  cpf: {
    type: String
  },
  ie: {
    type: String
  },
  codMun: {
    type: String
  },
  suframa: {
    type: String
  },
  end: {
    type: String,
    required: true
  },
  num: {
    type: String
  },
  compl: {
    type: String
  },
  bairro: {
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

module.exports = mongoose.model("reg0150", RegSchema);
