const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  cstIcms: {
    type: String,
    required: true
  },
  bcIcms: {
    type: String,
    required: true
  },
  vlIcms: {
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

module.exports = mongoose.model("regH020", RegSchema);
