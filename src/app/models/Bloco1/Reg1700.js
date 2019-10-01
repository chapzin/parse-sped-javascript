const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  codDisp: {
    type: String,
    required: true
  },
  codMod: {
    type: String,
    required: true
  },
  ser: {
    type: String
  },
  sub: {
    type: String
  },
  numDocIni: {
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

module.exports = mongoose.model("reg1700", RegSchema);
