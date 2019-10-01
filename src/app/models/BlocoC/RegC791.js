const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  uf: {
    type: String,
    required: true
  },
  vlBcIcmsSt: {
    type: String,
    required: true
  },
  vlIcmsSt: {
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

module.exports = mongoose.model("regC791", RegSchema);
