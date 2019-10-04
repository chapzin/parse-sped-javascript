const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  dtDoc: {
    type: Date,
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
    type: Number,
    required: true
  },
  vlBrt: {
    type: Number,
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

module.exports = mongoose.model("regC405", RegSchema);
