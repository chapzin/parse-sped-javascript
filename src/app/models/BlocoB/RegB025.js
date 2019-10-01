const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  vlContP: {
    type: String,
    required: true
  },
  vlBcIssP: {
    type: String,
    required: true
  },
  aliqIss: {
    type: String,
    required: true
  },
  vlIssP: {
    type: String,
    required: true
  },
  vlIsntIssP: {
    type: String,
    required: true
  },
  codServ: {
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

module.exports = mongoose.model("regB025", RegSchema);
