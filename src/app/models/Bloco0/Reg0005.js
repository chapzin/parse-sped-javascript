const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  fantasia: {
    type: String,
    required: true
  },
  cep: {
    type: String,
    required: true
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
    type: String,
    required: true
  },
  fone: {
    type: String
  },
  fax: {
    type: String
  },
  email: {
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
module.exports = mongoose.model("reg0005", RegSchema);
