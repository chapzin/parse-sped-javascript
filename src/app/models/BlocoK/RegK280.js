const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  dtEst: {
    type: String,
    required: true
  },
  codItem: {
    type: String,
    required: true
  },
  qtdCorPos: {
    type: String
  },
  qtdCorNeg: {
    type: String
  },
  indEst: {
    type: String,
    required: true
  },
  codPart: {
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

module.exports = mongoose.model("regK280", RegSchema);
