const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  codAjApur: {
    type: String,
    required: true
  },
  descrComplAj: {
    type: String
  },
  vlAjApur: {
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

module.exports = mongoose.model("reg1921", RegSchema);
