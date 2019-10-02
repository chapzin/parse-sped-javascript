const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  unidConv: {
    type: String,
    required: true
  },
  fatConv: {
    type: Number,
    required: true
  },
  codItem: {
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

module.exports = mongoose.model("reg0220", RegSchema);
