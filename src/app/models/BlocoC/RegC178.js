const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  clEnq: {
    type: String,
    required: true
  },
  vlUnid: {
    type: String,
    required: true
  },
  quantPad: {
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

module.exports = mongoose.model("regC178", RegSchema);
