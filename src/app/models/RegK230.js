const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  dtIniOp: {
    type: String,
  },
  dtFinOp: {
    type: String,
  },
  codDocOp: {
    type: String,
  },
  codItem: {
    type: String,
    required: true,
  },
  qtdEnc: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regK230", RegSchema);
