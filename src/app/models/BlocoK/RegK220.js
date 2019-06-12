const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  dtMov: {
    type: String,
    required: true,
  },
  codItemOri: {
    type: String,
    required: true,
  },
  codItemDest: {
    type: String,
    required: true,
  },
  qtdOri: {
    type: String,
    required: true,
  },
  qtdDest: {
    type: String,
    required: true,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regK220", RegSchema);
