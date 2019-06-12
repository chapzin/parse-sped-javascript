const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codInfAdic: {
    type: String,
    required: true,
  },
  vlInfAdic: {
    type: String,
    required: true,
  },
  descrComplAj: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("reg1925", RegSchema);
