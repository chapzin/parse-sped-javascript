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
  qtdCorPos: {
    type: String,
  },
  qtdCorNeg: {
    type: String,
  },
  codInsSubst: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regK275", RegSchema);
