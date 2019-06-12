const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  dtDoc: {
    type: String,
    required: true
  },
  cro: {
    type: String,
    required: true
  },
  crz: {
    type: String,
    required: true
  },
  numCooFin: {
    type: String,
    required: true
  },
  gtFin: {
    type: String,
    required: true
  },
  vlBrt: {
    type: String,
    required: true
  },
  reg0000: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("regD355", RegSchema);
