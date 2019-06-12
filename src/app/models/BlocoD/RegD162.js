const mongoose = require("mongoose");

const RegSchema = new mongoose.Schema({
  reg: {
    type: String,
    required: true,
  },
  codMod: {
    type: String,
  },
  ser: {
    type: String,
  },
  numDoc: {
    type: String,
    required: true,
  },
  dtDoc: {
    type: String,
  },
  vlDoc: {
    type: String,
  },
  vlMerc: {
    type: String,
  },
  qtdVol: {
    type: String,
    required: true,
  },
  pesoBrt: {
    type: String,
  },
  pesoLiq: {
    type: String,
  },
  reg0000: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("regD162", RegSchema);
