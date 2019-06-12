const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codTotPar: {
    type: String,
    required: true,
  },
  vlrAcumTot: {
    type: String,
    required: true,
  },
  nrTot: {
    type: String,
  },
  descrNrTot: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regD365", RegSchema);
