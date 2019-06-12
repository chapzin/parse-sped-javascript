const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  qtdLinD: {
    type: String,
    required: true
  },
  reg0000: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("regD990", RegSchema);
