const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codItem: {
    type: String,
    required: true,
  },
  qtd: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regK291", RegSchema);
