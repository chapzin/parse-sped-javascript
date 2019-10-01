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
  sldCred: {
    type: String,
    required: true
  },
  credApr: {
    type: String,
    required: true
  },
  credReceb: {
    type: String,
    required: true
  },
  credUtil: {
    type: String,
    required: true
  },
  sldCredFim: {
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

module.exports = mongoose.model("reg1200", RegSchema);
