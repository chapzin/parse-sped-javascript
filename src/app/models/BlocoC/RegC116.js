const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true
  },
  codMod: {
    type: String,
    required: true
  },
  nrSat: {
    type: String,
    required: true
  },
  chvCfe: {
    type: String,
    required: true
  },
  numCfe: {
    type: String,
    required: true
  },
  dtDoc: {
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

module.exports = mongoose.model("regC116", RegSchema);
