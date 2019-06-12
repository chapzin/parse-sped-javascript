const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  numDocCanc: {
    type: String,
    required: true
  },
  reg0000: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("regD411", RegSchema);
