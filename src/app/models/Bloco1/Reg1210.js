const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  tipoUtil: {
    type: String,
    required: true
  },
  nrDoc: {
    type: String,
    required: true
  },
  vlCredUtil: {
    type: String,
    required: true
  },
  chvDoce: {
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

module.exports = mongoose.model("reg1210", RegSchema);
