const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  crc: {
    type: String,
    required: true
  },
  cnpj: {
    type: String
  },
  cep: {
    type: String
  },
  end: {
    type: String
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
  fone: {
    type: String
  },
  fax: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  codMun: {
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

module.exports = mongoose.model("reg0100", RegSchema);
