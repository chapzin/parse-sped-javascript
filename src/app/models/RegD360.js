const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  vlPis: {
    type: String
  },
  vlCofins: {
    type: String
  },
  reg0000: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("regD360", RegSchema);
