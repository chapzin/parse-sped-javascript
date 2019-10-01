const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  indExp: {
    type: String,
    required: true
  },
  indCcrf: {
    type: String,
    required: true
  },
  indComb: {
    type: String,
    required: true
  },
  indUsina: {
    type: String,
    required: true
  },
  indVa: {
    type: String,
    required: true
  },
  indEe: {
    type: String,
    required: true
  },
  indCart: {
    type: String,
    required: true
  },
  indForm: {
    type: String,
    required: true
  },
  indAer: {
    type: String,
    required: true
  },
  indGiaf1: {
    type: String,
    required: true
  },
  indGiaf3: {
    type: String,
    required: true
  },
  indGiaf4: {
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

module.exports = mongoose.model("reg1010", RegSchema);
